/**
 * Copyright (C) 2011-2012 Pavel Shramov
 * Copyright (C) 2013-2017 Maxime Petazzoni <maxime.petazzoni@bulix.org>
 * All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 *
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * Thanks to Pavel Shramov who provided the initial implementation and Leaflet
 * integration. Original code was at https://github.com/shramov/leaflet-plugins.
 *
 * It was then cleaned-up and modified to record and make available more
 * information about the GPX track while it is being parsed so that the result
 * can be used to display additional information about the track that is
 * rendered on the Leaflet map.
 */

var L = L || require('leaflet');

var _MAX_POINT_INTERVAL_MS = 15000;
var _SECOND_IN_MILLIS = 1000;
var _MINUTE_IN_MILLIS = 60 * _SECOND_IN_MILLIS;
var _HOUR_IN_MILLIS = 60 * _MINUTE_IN_MILLIS;
var _DAY_IN_MILLIS = 24 * _HOUR_IN_MILLIS;

var _GPX_STYLE_NS = 'http://www.topografix.com/GPX/gpx_style/0/2';

var _DEFAULT_MARKER_OPTS = {
  startIconUrl: 'pin-icon-start.png',
  endIconUrl: 'pin-icon-end.png',
  shadowUrl: 'pin-shadow.png',
  wptIcons: [],
  wptIconUrls : {
    '': 'pin-icon-wpt.png',
  },
  pointMatchers: [],
  iconSize: [33, 50],
  shadowSize: [50, 50],
  iconAnchor: [16, 45],
  shadowAnchor: [16, 47],
  clickable: false
};
var _DEFAULT_POLYLINE_OPTS = {
  color: 'blue',
  weight: 5
};
var _DEFAULT_GPX_OPTS = {
  parseElements: ['track', 'route', 'waypoint']
};
L.GPX = L.FeatureGroup.extend({
  initialize: function(gpx, options) {
    options.max_point_interval = options.max_point_interval || _MAX_POINT_INTERVAL_MS;
    options.marker_options = this._merge_objs(
      _DEFAULT_MARKER_OPTS,
      options.marker_options || {});
    options.polyline_options = options.polyline_options || {};
    options.gpx_options = this._merge_objs(
      _DEFAULT_GPX_OPTS,
      options.gpx_options || {});

    L.Util.setOptions(this, options);

    // Base icon class for track pins.
    L.GPXTrackIcon = L.Icon.extend({ options: options.marker_options });

    this._gpx = gpx;
    this._layers = {};
    this._init_info();

    if (gpx) {
      this._parse(gpx, options, this.options.async);
    }
  },

  get_duration_string: function(duration, hidems) {
    var s = '';

    if (duration >= _DAY_IN_MILLIS) {
      s += Math.floor(duration / _DAY_IN_MILLIS) + 'd ';
      duration = duration % _DAY_IN_MILLIS;
    }

    if (duration >= _HOUR_IN_MILLIS) {
      s += Math.floor(duration / _HOUR_IN_MILLIS) + ':';
      duration = duration % _HOUR_IN_MILLIS;
    }

    var mins = Math.floor(duration / _MINUTE_IN_MILLIS);
    duration = duration % _MINUTE_IN_MILLIS;
    if (mins < 10) s += '0';
    s += mins + '\'';

    var secs = Math.floor(duration / _SECOND_IN_MILLIS);
    duration = duration % _SECOND_IN_MILLIS;
    if (secs < 10) s += '0';
    s += secs;

    if (!hidems && duration > 0) s += '.' + Math.round(Math.floor(duration)*1000)/1000;
    else s += '"';

    return s;
  },

  get_duration_string_iso: function(duration, hidems) {
    var s = this.get_duration_string(duration, hidems);
    return s.replace("'",':').replace('"','');
  },

  // Public methods
  to_miles:            function(v) { return v / 1.60934; },
  to_ft:               function(v) { return v * 3.28084; },
  m_to_km:             function(v) { return v / 1000; },
  m_to_mi:             function(v) { return v / 1609.34; },

  get_name:            function() { return this._info.name; },
  get_desc:            function() { return this._info.desc; },
  get_author:          function() { return this._info.author; },
  get_copyright:       function() { return this._info.copyright; },
  get_distance:        function() { return this._info.length; },
  get_distance_imp:    function() { return this.to_miles(this.m_to_km(this.get_distance())); },

  get_start_time:      function() { return this._info.duration.start; },
  get_end_time:        function() { return this._info.duration.end; },
  get_moving_time:     function() { return this._info.duration.moving; },
  get_total_time:      function() { return this._info.duration.total; },

  get_moving_pace:     function() { return this.get_moving_time() / this.m_to_km(this.get_distance()); },
  get_moving_pace_imp: function() { return this.get_moving_time() / this.get_distance_imp(); },

  get_moving_speed:    function() { return this.m_to_km(this.get_distance()) / (this.get_moving_time() / (3600 * 1000)) ; },
  get_moving_speed_imp:function() { return this.to_miles(this.m_to_km(this.get_distance())) / (this.get_moving_time() / (3600 * 1000)) ; },

  get_total_speed:     function() { return this.m_to_km(this.get_distance()) / (this.get_total_time() / (3600 * 1000)); },
  get_total_speed_imp: function() { return this.to_miles(this.m_to_km(this.get_distance())) / (this.get_total_time() / (3600 * 1000)); },

  get_elevation_gain:     function() { return this._info.elevation.gain; },
  get_elevation_loss:     function() { return this._info.elevation.loss; },
  get_elevation_gain_imp: function() { return this.to_ft(this.get_elevation_gain()); },
  get_elevation_loss_imp: function() { return this.to_ft(this.get_elevation_loss()); },
  get_elevation_data:     function() {
    var _this = this;
    return this._info.elevation._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_km, null,
        function(a, b) { return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' m'; });
      });
  },
  get_elevation_data_imp: function() {
    var _this = this;
    return this._info.elevation._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_mi, _this.to_ft,
        function(a, b) { return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' ft'; });
      });
  },
  get_elevation_max:      function() { return this._info.elevation.max; },
  get_elevation_min:      function() { return this._info.elevation.min; },
  get_elevation_max_imp:  function() { return this.to_ft(this.get_elevation_max()); },
  get_elevation_min_imp:  function() { return this.to_ft(this.get_elevation_min()); },

  get_average_hr:         function() { return this._info.hr.avg; },
  get_average_temp:         function() { return this._info.atemp.avg; },
  get_average_cadence:         function() { return this._info.cad.avg; },
  get_heartrate_data:     function() {
    var _this = this;
    return this._info.hr._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_km, null,
        function(a, b) { return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' bpm'; });
      });
  },
  get_heartrate_data_imp: function() {
    var _this = this;
    return this._info.hr._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_mi, null,
        function(a, b) { return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' bpm'; });
      });
  },
  get_cadence_data:     function() {
    var _this = this;
    return this._info.cad._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_km, null,
        function(a, b) { return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' rpm'; });
      });
  },
  get_temp_data:     function() {
    var _this = this;
    return this._info.atemp._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_km, null,
        function(a, b) { return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' degrees'; });
      });
  },
  get_cadence_data_imp:     function() {
    var _this = this;
    return this._info.cad._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_mi, null,
        function(a, b) { return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' rpm'; });
      });
  },
  get_temp_data_imp:     function() {
    var _this = this;
    return this._info.atemp._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_mi, null,
        function(a, b) { return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' degrees'; });
      });
  },

  reload: function() {
    this._init_info();
    this.clearLayers();
    this._parse(this._gpx, this.options, this.options.async);
  },

  // Private methods
  _merge_objs: function(a, b) {
    var _ = {};
    for (var attr in a) { _[attr] = a[attr]; }
    for (var attr in b) { _[attr] = b[attr]; }
    return _;
  },

  _prepare_data_point: function(p, trans1, trans2, trans_tooltip) {
    var r = [trans1 && trans1(p[0]) || p[0], trans2 && trans2(p[1]) || p[1]];
    r.push(trans_tooltip && trans_tooltip(r[0], r[1]) || (r[0] + ': ' + r[1]));
    return r;
  },

  _init_info: function() {
    this._info = {
      name: null,
      length: 0.0,
      elevation: {gain: 0.0, loss: 0.0, max: 0.0, min: Infinity, _points: []},
      hr: {avg: 0, _total: 0, _points: []},
      duration: {start: null, end: null, moving: 0, total: 0},
      atemp: {avg: 0, _total: 0, _points: []},
      cad: {avg: 0, _total: 0, _points: []}
    };
  },

  _load_xml: function(url, cb, options, async) {
    if (async == undefined) async = this.options.async;
    if (options == undefined) options = this.options;

    var req = new window.XMLHttpRequest();
    req.open('GET', url, async);
    try {
      req.overrideMimeType('text/xml'); // unsupported by IE
    } catch(e) {}
    req.onreadystatechange = function() {
      if (req.readyState != 4) return;
      if(req.status == 200) cb(req.responseXML, options);
    };
    req.send(null);
  },

  _parse: function(input, options, async) {
    var _this = this;
    var cb = function(gpx, options) {
      var layers = _this._parse_gpx_data(gpx, options);
      if (!layers) return;
      _this.addLayer(layers);
      _this.fire('loaded', { layers: layers, element: gpx });
    }
    if (input.substr(0,1)==='<') { // direct XML has to start with a <
      var parser = new DOMParser();
      if (async) {
        setTimeout(function() {
          cb(parser.parseFromString(input, "text/xml"), options);
        });
      } else {
        cb(parser.parseFromString(input, "text/xml"), options);
      }
    } else {
      this._load_xml(input, cb, options, async);
    }
  },

  _parse_gpx_data: function(xml, options) {
    var i, t, l, el, layers = [];
    var tags = [];

    var parseElements = options.gpx_options.parseElements;
    if (parseElements.indexOf('route') > -1) {
      tags.push(['rte','rtept']);
    }
    if (parseElements.indexOf('track') > -1) {
      tags.push(['trkseg','trkpt']);
    }

    var name = xml.getElementsByTagName('name');
    if (name.length > 0) {
      this._info.name = name[0].textContent;
    }
    var desc = xml.getElementsByTagName('desc');
    if (desc.length > 0) {
      this._info.desc = desc[0].textContent;
    }
    var author = xml.getElementsByTagName('author');
    if (author.length > 0) {
      this._info.author = author[0].textContent;
    }
    var copyright = xml.getElementsByTagName('copyright');
    if (copyright.length > 0) {
      this._info.copyright = copyright[0].textContent;
    }

    for (t = 0; t < tags.length; t++) {
      el = xml.getElementsByTagName(tags[t][0]);
      for (i = 0; i < el.length; i++) {
        var trackLayers = this._parse_trkseg(el[i], options, tags[t][1]);
        for (l = 0; l < trackLayers.length; l++) {
          layers.push(trackLayers[l]);
        }
      }
    }

    this._info.hr.avg = Math.round(this._info.hr._total / this._info.hr._points.length);
    this._info.cad.avg = Math.round(this._info.cad._total / this._info.cad._points.length);
    this._info.atemp.avg = Math.round(this._info.atemp._total / this._info.atemp._points.length);

    // parse waypoints and add markers for each of them
    if (parseElements.indexOf('waypoint') > -1) {
      el = xml.getElementsByTagName('wpt');
      for (i = 0; i < el.length; i++) {
        var ll = new L.LatLng(
            el[i].getAttribute('lat'),
            el[i].getAttribute('lon'));

        var nameEl = el[i].getElementsByTagName('name');
        var name = '';
        if (nameEl.length > 0) {
          name = nameEl[0].textContent;
        }

        var descEl = el[i].getElementsByTagName('desc');
        var desc = '';
        if (descEl.length > 0) {
          desc = descEl[0].textContent;
        }

        var symEl = el[i].getElementsByTagName('sym');
        var symKey = '';
        if (symEl.length > 0) {
          symKey = symEl[0].textContent;
        }

        /*
         * Add waypoint marker based on the waypoint symbol key.
         *
         * First look for a configured icon for that symKey. If not found, look
         * for a configured icon URL for that symKey and build an icon from it.
         * Otherwise, fall back to the default icon if one was configured, or
         * finally to the default icon URL.
         */
        var wptIcons = options.marker_options.wptIcons;
        var wptIconUrls = options.marker_options.wptIconUrls;
        var symIcon;
        if (wptIcons && wptIcons[symKey]) {
          symIcon = wptIcons[symKey];
        } else if (wptIconUrls && wptIconUrls[symKey]) {
          symIcon = new L.GPXTrackIcon({iconUrl: wptIconUrls[symKey]});
        } else if (wptIcons && wptIcons['']) {
          symIcon = wptIcons[''];
        } else if (wptIconUrls && wptIconUrls['']) {
          symIcon = new L.GPXTrackIcon({iconUrl: wptIconUrls['']});
        } else {
          console.log('No icon or icon URL configured for symbol type "' + symKey
            + '", and no fallback configured; ignoring waypoint.');
          continue;
        }

        var marker = new L.Marker(ll, {
          clickable: options.marker_options.clickable,
          title: name,
          icon: symIcon
        });
        marker.bindPopup("<b>" + name + "</b>" + (desc.length > 0 ? '<br>' + desc : '')).openPopup();
        this.fire('addpoint', { point: marker, point_type: 'waypoint', element: el[i] });
        layers.push(marker);
      }
    }

    if (layers.length > 1) {
       return new L.FeatureGroup(layers);
    } else if (layers.length == 1) {
      return layers[0];
    }
  },

  _parse_trkseg: function(line, options, tag) {
    var el = line.getElementsByTagName(tag);
    if (!el.length) return [];

    var coords = [];
    var markers = [];
    var layers = [];
    var delta = [];
    var last_ll = null;
    var last_ele = null;
    var last_time = null;

    // preprocess all the points to compute a centered slope
    for (var i = 0; i < el.length; i++) {
        var ll = new L.LatLng(el[i].getAttribute('lat'),el[i].getAttribute('lon'));

        var elevation = 0; // elevation (always positive)
        var distance_h = 0; // planar movement (always positive)
        var delta_v = 0; // delta vertical movement (signed)
        var distance_tot = 0; // total movement (always positive)
        var point_time = 0; // absolute time of the point (milliseconds)
        var elapsed_time = 0; // elapsed time from the previous point (milliseconds)

        _ = el[i].getElementsByTagName('time');
        if (_.length > 0) {
            point_time = new Date(Date.parse(_[0].textContent));
        } else {
            point_time = new Date('1970-01-01T00:00:00');
        }

        _ = el[i].getElementsByTagName('ele');
        if (_.length > 0) {
            elevation = parseFloat(_[0].textContent);
        }

        // avoid issues for points missing elevation info
        if (elevation == 0 && last_ele != null) {
            elevation = last_ele;
        }

        if (last_ll != null) {
            // compute the distance from the previous point
            distance_h = this._dist2d(last_ll, ll);
            delta_v = elevation - last_ele;
            distance_tot = Math.sqrt(Math.pow(distance_h, 2) + Math.pow(Math.abs(delta_v), 2));
            elapsed_time = Math.abs(point_time - last_time);
        }

        // store in the delta vector
        delta.push({distance_h:distance_h, ele:elevation, delta_v:delta_v, distance_tot:distance_tot, point_time:point_time, elapsed_time:elapsed_time});

        last_ll = ll;
        last_ele = elevation;
        last_time = point_time;
    }

    // filter elevation with a median filter
    for (var i = 2; i + 2 < el.length; i++) {
        var ele_vect = [];

        ele_vect.push(delta[i-2].ele);
        ele_vect.push(delta[i-1].ele);
        ele_vect.push(delta[i].ele);
        ele_vect.push(delta[i+1].ele);
        ele_vect.push(delta[i+2].ele);

        ele_vect.sort();

        delta[i].ele = ele_vect[2];
        delta[i].delta_v = delta[i].ele - delta[i-1].ele;
    }

    last_ll = null;
    last_ele = null;
    last_time = null;

    // reprocess all the points
    for (var i = 0; i < el.length; i++) {
      var _, ll = new L.LatLng(
        el[i].getAttribute('lat'),
        el[i].getAttribute('lon'));
      ll.meta = { time: null, ele: null, hr: null, cad: null, atemp: null };

      // already computed fields
      ll.meta.ele = delta[i].ele;
      ll.meta.time = delta[i].point_time;

      _ = el[i].getElementsByTagName('name');
      if (_.length > 0) {
        var name = _[0].textContent;
        var ptMatchers = options.marker_options.pointMatchers || [];

        for (var j = 0; j < ptMatchers.length; j++) {
          if (ptMatchers[j].regex.test(name)) {
            markers.push({ label: name, coords: ll, icon: ptMatchers[j].icon, element: el[i] });
            break;
          }
        }
      }
      _ = el[i].getElementsByTagNameNS('*', 'hr');
      if (_.length > 0) {
        ll.meta.hr = parseInt(_[0].textContent);
        this._info.hr._points.push([this._info.length, ll.meta.hr]);
        this._info.hr._total += ll.meta.hr;
      }

      _ = el[i].getElementsByTagNameNS('*', 'cad');
      if (_.length > 0) {
        ll.meta.cad = parseInt(_[0].textContent);
        this._info.cad._points.push([this._info.length, ll.meta.cad]);
        this._info.cad._total += ll.meta.cad;
      }

      _ = el[i].getElementsByTagNameNS('*', 'atemp');
      if (_.length > 0) {
        ll.meta.atemp = parseInt(_[0].textContent);
        this._info.atemp._points.push([this._info.length, ll.meta.atemp]);
        this._info.atemp._total += ll.meta.atemp;
      }

      if (ll.meta.ele > this._info.elevation.max) {
        this._info.elevation.max = ll.meta.ele;
      }

      if (ll.meta.ele < this._info.elevation.min) {
        this._info.elevation.min = ll.meta.ele;
      }

      this._info.elevation._points.push([this._info.length, ll.meta.ele]);
      this._info.duration.end = ll.meta.time;

      if (last_ll != null) {
        var delta_v = delta[i].delta_v; // delta vertical movement (signed)
        var distance_tot = delta[i].distance_tot; // total movement (always positive)
        var elapsed_time = delta[i].elapsed_time; // elapsed time from the previous point (milliseconds)

        // compute the slope of a segment of 30 meters centered on the current point
        var segment_limit = 30.0; // segment

        // previous half segment
        var segment_dh = 0.0;
        var segment_dv = 0.0;
        var segment_sum = segment_limit / 2;
        var prev_i = i; // previous position starting from current point
        for (var j = 0; segment_sum > 0.0; j++) {
            // early exit
            if (prev_i <= 0 || j > 40)
                break;
            // add the previous point
            segment_dh += delta[prev_i].distance_h;
            segment_dv += delta[prev_i].delta_v;
            segment_sum -= delta[prev_i].distance_tot;
            --prev_i;
        }

        // following half segment
        segment_sum = segment_limit / 2;
        var next_i = i + 1; // next position
        for (var j = 0; segment_sum > 0.0; j++) {
            // early exit
            if (next_i >= el.length || j > 40)
                break;
            // add the following point
            segment_dh += delta[next_i].distance_h;
            segment_dv += delta[next_i].delta_v;
            segment_sum -= delta[next_i].distance_tot;
            ++next_i;
        }

        // store the slope in the "alt" field
        try {
          ll.alt = Math.floor(segment_dv / segment_dh * 100);
        } catch (err) {
          ll.alt = last_ll.alt; // for division by 0
        }

        // increase the distance
        this._info.length += distance_tot;

        // increase the elevation
        if (delta_v > 0) {
          this._info.elevation.gain += delta_v;
        } else {
          this._info.elevation.loss -= delta_v;
        }

        // increase the duration (milliseconds)
        this._info.duration.total += elapsed_time;


        // compute the speed if the elapsed time is big (meter/sec)
        var speed_ms = 0;
        if (elapsed_time >= options.max_point_interval) {
          speed_ms = distance_tot * 1000.0 / elapsed_time;
        }

        // increase the moving time (milliseconds). 1ms is 3.6km/h
        if (elapsed_time < options.max_point_interval || speed_ms > 1) {
          this._info.duration.moving += elapsed_time;
        }
      } else {
        // setup the initial point
        ll.alt = 0.0;
        if (this._info.duration.start == null) {
          this._info.duration.start = ll.meta.time;
        }
      }

      last_ll = ll;
      coords.push(ll);
    }

    // check for gpx_style styling extension
    var polyline_options = this._merge_objs(_DEFAULT_POLYLINE_OPTS, {});
    var e = line.getElementsByTagNameNS(_GPX_STYLE_NS, 'line');
    if (e.length > 0) {
      var _ = e[0].getElementsByTagName('color');
      if (_.length > 0) polyline_options.color = '#' + _[0].textContent;
      var _ = e[0].getElementsByTagName('opacity');
      if (_.length > 0) polyline_options.opacity = _[0].textContent;
      var _ = e[0].getElementsByTagName('weight');
      if (_.length > 0) polyline_options.weight = _[0].textContent;
      var _ = e[0].getElementsByTagName('linecap');
      if (_.length > 0) polyline_options.lineCap = _[0].textContent;
    }

    // add track
    var l;
    if (options.polyline_options.slope) {
      if (options.polyline_options.force_renderer != null)
        l = new L.hotline_force_renderer(options.polyline_options.force_renderer, coords, this._merge_objs(polyline_options, options.polyline_options));
      else
        l = new L.hotline(coords, this._merge_objs(polyline_options, options.polyline_options));
    } else
      l = new L.Polyline(coords, this._merge_objs(polyline_options, options.polyline_options));
    this.fire('addline', { line: l, element: line });
    layers.push(l);

    if (options.marker_options.startIcon || options.marker_options.startIconUrl) {
      // add start pin
      var marker = new L.Marker(coords[0], {
        clickable: options.marker_options.clickable,
        icon: options.marker_options.startIcon || new L.GPXTrackIcon({iconUrl: options.marker_options.startIconUrl})
      });
      this.fire('addpoint', { point: marker, point_type: 'start', element: el[0] });
      layers.push(marker);
    }

    if (options.marker_options.endIcon || options.marker_options.endIconUrl) {
      // add end pin
      var marker = new L.Marker(coords[coords.length-1], {
        clickable: options.marker_options.clickable,
        icon: options.marker_options.endIcon || new L.GPXTrackIcon({iconUrl: options.marker_options.endIconUrl})
      });
      this.fire('addpoint', { point: marker, point_type: 'end', element: el[el.length-1] });
      layers.push(marker);
    }

    // add named markers
    for (var i = 0; i < markers.length; i++) {
      var marker = new L.Marker(markers[i].coords, {
        clickable: options.marker_options.clickable,
        title: markers[i].label,
        icon: markers[i].icon
      });
      this.fire('addpoint', { point: marker, point_type: 'label', element: markers[i].element });
      layers.push(marker);
    }

    return layers;
  },

  /*
   * From http://www.movable-type.co.uk/scripts/latlong.html
   * This uses the 'haversine' formula to calculate the great-circle distance between two
   * points - that is, the shortest distance over the earth's surface - giving an
   * 'as-the-crow-flies' distance between the points
   * (ignoring any hills they fly over, of course!).
   */
  _dist2d: function(a, b) {
    var R = 6371000; /* earth radius */
    var dLat = this._deg2rad(b.lat - a.lat);
    var dLon = this._deg2rad(b.lng - a.lng);
    var r = Math.sin(dLat/2) * Math.sin(dLat/2)
          + Math.cos(this._deg2rad(a.lat)) * Math.cos(this._deg2rad(b.lat)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1-r));
    var d = R * c;
    return d;
  },

  _dist3d: function(a, b) {
    var planar = this._dist2d(a, b);
    var height = Math.abs(b.meta.ele - a.meta.ele);
    return Math.sqrt(Math.pow(planar, 2) + Math.pow(height, 2));
  },

  _deg2rad: function(deg) {
    return deg * Math.PI / 180;
  }
});

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = L;
} else if (typeof define === 'function' && define.amd) {
  define(L);
}
