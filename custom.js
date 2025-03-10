/*
 * MTB Bergamo (c) by Andrea Mazzoleni 2022
 *
 * MTB Bergamo is licensed under a
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-sa/4.0/>.
 */

var WEB = 'https://www.mtbbergamo.it/';
var ARCHIVE = 'https://amadvance.github.io/mtbbergamo/www/';

/*
 * Allow cross-domain download
 *
 * https://stackoverflow.com/questions/49474775/chrome-65-blocks-cross-origin-a-download-client-side-workaround-to-force-down
 *
 * At present disable as it doesn't work on Android.
 * The files gets renamed to .txt in Firefox, or blob:xxxxxxxxxxxxxx in Chrome.
 *
 * Note that instead it's working correctly on PC, from Firefox/Chrome/Edge.
 */
function force_download(blob, filename) {
  var a = document.createElement('a');
  a.href = blob;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function trigger_download(url) {
  filename = url.split('\\').pop().split('/').pop();

  fetch(url, {
      headers: new Headers({
        'Origin': location.origin
      }),
      mode: 'cors'
    })
    .then(response => response.blob())
    .then(blob => {
      let blobUrl = window.URL.createObjectURL(new Blob([blob], {type: "application/gpx+xml"}));
      force_download(blobUrl, filename);
    })
    .catch(e => console.error(e));
}

function _merge_fields(a, b) {
	var _ = {};
	for (var attr in a) { _[attr] = a[attr]; }
	for (var attr in b) { _[attr] = b[attr]; }
	return _;
}

function get_track_name(index)
{
	return TRACKS[index].name;
}

function get_track_gpx(index)
{
	var url = ARCHIVE + 'gpx/' + TRACKS[index].file;

	return url;
}

function get_track_elevation(index)
{
	return TRACKS[index].elevation_loss;
}

function get_track_anchor_blob(index, text)
{
	var gpx = get_track_gpx(index);

	return "<a href=\"" + get_track_gpx(index) + "\" onclick=\"trigger_download('" + gpx + "'); return false;\">" + text + "</a>";
}

function get_track_anchor(index, text)
{
	return get_track_anchor_blob(index, text);
}

function get_shademap_anchor(index)
{
	return "<span title=\"Esposizione solare della traccia a seconda dell'ora e del giorno.\nDal sito shademap.app\"><a href=\"https://shademap.app/#gpx=" + ARCHIVE + "redux/" + TRACKS[index].file + "\"><img src=\"" + ARCHIVE + "img/shademap.png\" class=\"leaflet-slope-img\" width=24 height=24></a></span>";
}

function get_track_vote(index)
{
	if (index == -1)
		return "";

	if (TRACKS[index].vote == 0)
		return "";

	if (TRACKS[index].vote == 5)
		return "Eccellente";
	if (TRACKS[index].vote == 4)
		return "Ottimo";
	if (TRACKS[index].vote == 3)
		return "Buono";
	if (TRACKS[index].vote == 2)
		return "Discreto";
	if (TRACKS[index].vote == 1)
		return "Scarso";
	if (TRACKS[index].vote == 0)
		return "Sconsigliato";

	return "";
}

function get_track_rate(index)
{
	if (index == -1)
		return "";

	if (TRACKS[index].rate == 0 && TRACKS[index].rate_max == 0)
		return "";

	return "S" + TRACKS[index].rate.toString();
}

function get_track_rate_max(index)
{
	if (index == -1)
		return "";

	rate = "";

	if (TRACKS[index].rate_max != 0)
		rate = " (massima S" + TRACKS[index].rate_max.toString() + ")";

	return rate;
}

function get_track_cycle(index)
{
	if (index == -1)
		return "";

	if (typeof TRACKS[index].cycle === 'string')
		return TRACKS[index].cycle;

	if (TRACKS[index].cycle == 0)
		return "";

	if (TRACKS[index].cycle == 1)
		return "1 minuto";

	return TRACKS[index].cycle.toString() + " minuti";
}

function create_map(id) {
	var mymap = L.map(id, { fullscreenControl: true } );

	// Create the renderer to use for hotlines
	// To have multiple tracks clickable on the same map only one renderer for map must be used
	// To support multiple map on the same page, each map should have its renderer
	mymap.hotline_renderer = L.hotline_create_new_renderer();

	var myscale = new L.control.scale({ metric: true, imperial: false });

	myscale.addTo(mymap);

	return mymap;
}

var ZONE_TITLE = "<div class='maptitle'>Per informazioni clicca sul percorso colorato nella mappa</div>"
var TRACK_TITLE = "<div class='maptitle'>Per informazioni clicca sul percorso colorato nella mappa</div>"

function create_map_zone(id) {
	var mymap = create_map(id);

	document.getElementById(id).insertAdjacentHTML('beforebegin', ZONE_TITLE);

	return mymap;
}

function create_map_track(id) {
	var mymap = create_map(id);

	document.getElementById(id).insertAdjacentHTML('beforebegin', TRACK_TITLE);

	var myimage = L.control.custom({
		position: 'bottomleft',
		content : '<img src="' + ARCHIVE + 'img/slope.png" class="leaflet-slope-img" id="demoImage">',
		classes : '',
		style   :
		{
			margin: '0',
			padding: '0',
			background: '0',
			border: '0'
		},
	});

	myimage.addTo(mymap);

	return mymap;
}

function create_waymarkedtrails(map, control) {
	var myhiking = L.tileLayer('https://tile.waymarkedtrails.org/{id}/{z}/{x}/{y}.png', {
		id: 'hiking',
		pointable: true,
		attribution: '&copy; <a href="http://waymarkedtrails.org">Sarah Hoffmann</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
	});

	control.addOverlay(myhiking, "Sentieri CAI e Comunali");

	return myhiking;
}

function create_base(map, control) {
	// More layers at https://leaflet-extras.github.io/leaflet-providers/preview/

	var CyclOSM = new L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
	{
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://www.cyclosm.org/">CyclOSM</a> | <a href="https://www.cyclosm.org/legend.html" title="Legenda dei simboli grafici">Legenda</a>'
	});

	// CyclOSM.addTo(map);  // add it to make the default

	control.addBaseLayer(CyclOSM, "CyclOSM");

	var Tracestrack = L.tileLayer('https://tile.tracestrack.com/topo_it/{z}/{x}/{y}.png?key=8b3409d2713e8014e7ebe376a7a19a20', {
		maxZoom: 17,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | &copy; <a href="https://www.tracestrack.com/">Tracestrack</a>)'
	});

	control.addBaseLayer(Tracestrack, "Tracestrack");

	var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
		maxZoom: 17,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
	});

	control.addBaseLayer(OpenTopoMap, "OpenTopoMap");

	var Thunderforest_OpenCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
		attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		apikey: 'b9a5e78a27a644dbbb109bc904b8919c',
		maxZoom: 21
	});

	/*
	 * Thunderforest has a quota of 150.000 requests per month, but at 2023, the site requires about 20.000 per day,
	 * then it cannot be used.
	 */

	control.addBaseLayer(Thunderforest_OpenCycleMap, "OpenCycleMap");

	var Thunderforest_Outdoors = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}', {
		attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		apikey: 'b9a5e78a27a644dbbb109bc904b8919c',
		maxZoom: 21
	});

	control.addBaseLayer(Thunderforest_Outdoors, "Outdoors");

	var OpenStreetMap_Mapnik = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	{
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	OpenStreetMap_Mapnik.addTo(map);  // add it to make the default

	control.addBaseLayer(OpenStreetMap_Mapnik, "OpenStreetMap");

	var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		attribution: '&copy; Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	});

	control.addBaseLayer(Esri_WorldImagery, "Satellite");
}

// map for tracks
function create_control(map) {
	var control = L.control.layers(null, null).addTo(map);

	create_base(map, control);

	create_waymarkedtrails(map, control).addTo(map);

	var ret = {ct: control, gr: null};

	return ret;
}

// map for climbs
function create_control_climb(map) {
	var control = L.control.layers(null, null).addTo(map);

	create_base(map, control);

	create_waymarkedtrails(map, control);

	var ret = {ct: control, gr: null};

	return ret;
}

function get_track_group(index)
{
	if (TRACKS[index].kind == "up")
		return 0;
	return TRACKS[index].vote;
}

// map for groups
function create_control_group(map) {
	var control = L.control.layers(null, null).addTo(map);

	create_base(map, control);

	create_waymarkedtrails(map, control);

	var group = [];

	group[0] = L.layerGroup([]);
	group[1] = L.layerGroup([]);
	group[2] = L.layerGroup([]);
	group[3] = L.layerGroup([]);
	group[4] = L.layerGroup([]);
	group[5] = L.layerGroup([]);

	var group_count = [];
	group_count[0] = 0;
	group_count[1] = 0;
	group_count[2] = 0;
	group_count[3] = 0;
	group_count[4] = 0;
	group_count[5] = 0;

	control.addOverlay(group[5], "Eccellenti");
	control.addOverlay(group[4], "Ottimi");
	control.addOverlay(group[3], "Buoni");
	control.addOverlay(group[2], "Discreti");
	control.addOverlay(group[1], "Sconsigliati");
	control.addOverlay(group[0], "Salite");

	var ret = {ct: control, gr: group, grc: group_count};

	return ret;
}

function create_gpx_info(map, control, gpx, url, index, link)
{
	try {
		// extend the bounds to add the new track
		var bounds = map.getBounds();
		bounds.extend(gpx.getBounds());
		map.fitBounds(bounds);
	} catch (err) {
		// if the bounds are not set, it's the first track
		map.fitBounds(gpx.getBounds());
	}

	var desc;

	name = TRACKS[index].name;

	if (link)
		desc = '<b><a href="' + WEB + link + '.html">' + name + "</a></b>";
	else
		desc = "<b>" + name + "</b>";

	vote = get_track_vote(index);
	if (vote != "") {
		desc += "<br/>";
		desc += "Giudizio: <b>" + vote + "</b>";
	}

	rate = get_track_rate(index);
	if (rate != "") {
		desc += "<br/>";
		desc += "Difficolt\u00E0: <b>" + rate + "</b>" + get_track_rate_max(index);
	}

	cycle = get_track_cycle(index);
	if (cycle != "") {
		desc += "<br/>";
		desc += "Tempo a spinta: <b>" + cycle + "</b>";
	}

	desc += "<br/>";
	desc += "&harr; " + (gpx.get_distance() / 1000).toFixed(1) + " km";

	var elevation_gain = gpx.get_elevation_gain();
	if (elevation_gain > 100) {
		desc += ", &uarr; "+ Math.floor(elevation_gain) + "m";
	}
	var elevation_loss = gpx.get_elevation_loss();
	if (elevation_loss > 100) {
		desc += ", &darr; "+ Math.floor(elevation_loss) + "m";
	}
	var moving_time = gpx.get_moving_time();
	if (moving_time > 1000 * 60) {
		desc += ", "+ Math.floor(moving_time / (1000*60)) + "min";
		if (url.indexOf("Salita") != -1) {
			if (url.indexOf("_EBIKE") != -1)
				desc += " (E-Bike)";
			else
				desc += " (muscolare)";
			desc += ", VAM ";
			desc += Math.floor(elevation_gain / moving_time * (1000*60*60));
			desc += "m/h";
		}
	}

	desc += "<br/>";
	desc += get_track_anchor(index, "Download GPX");
	gpx.bindPopup(desc);

	if (control.gr === null) {
		control.ct.addOverlay(gpx, name);

		gpx.addTo(map);
	} else {
		var group_index = get_track_group(index);
		var group = control.gr[group_index];

		group.addLayer(gpx);

		++control.grc[group_index];

		// don't show sconsigliati
		if (group_index != 1 && control.grc[group_index] == 1)
			group.addTo(map);
	}
}

// create a track for a post with full size icons
function create_track(map, control, url, index, track_options)
{
	var _DEFAULT_TRACK_OPTS = {
		color: 'blue',
		weight: 5,
		slope: false,
		force_renderer: map.hotline_renderer
	};

	// set default options
	track_options = _merge_fields(_DEFAULT_TRACK_OPTS, track_options || {});

	new L.GPX(url,
	{
		async: true,
		marker_options: {
			// half icons
			startIconUrl: ARCHIVE + 'img/pin-icon-start-50.png',
			endIconUrl: ARCHIVE + 'img/pin-icon-end-50.png',
			shadowUrl: ARCHIVE + 'img/pin-shadow-50.png',
			iconSize: [16, 25],
			shadowSize: [25, 25],
			iconAnchor: [8, 22],
			shadowAnchor: [8, 23]
		},
		polyline_options: {
			color: track_options.color,
			weight: track_options.weight,
			slope: track_options.slope,
			force_renderer: map.hotline_renderer
		}
	}).on('loaded', function(e) {
		var gpx = e.target;
		create_gpx_info(map, control, gpx, url, index, null);
	});
}

// create a track for a zone post, with link to the specific post
function create_zone_track(map, control, url, index, track_options)
{
	var _DEFAULT_TRACK_OPTS = {
		color: 'blue',
		weight: 5,
		slope: false,
		force_renderer: map.hotline_renderer
	};

	// set default options
	track_options = _merge_fields(_DEFAULT_TRACK_OPTS, track_options || {});

	new L.GPX(url,
	{
		async: true,
		marker_options: {
			// half icons
			startIconUrl: ARCHIVE + 'img/pin-icon-start-50.png',
			endIconUrl: ARCHIVE + 'img/pin-icon-end-50.png',
			shadowUrl: ARCHIVE + 'img/pin-shadow-50.png',
			iconSize: [16, 25],
			shadowSize: [25, 25],
			iconAnchor: [8, 22],
			shadowAnchor: [8, 23]
		},
		polyline_options: {
			color: track_options.color,
			weight: track_options.weight,
			slope: track_options.slope,
			force_renderer: map.hotline_renderer
		}
	}).on('loaded', function(e) {
		var gpx = e.target;
		create_gpx_info(map, control, gpx, url, index, TRACKS[index].link);
	});
}

// detect if the page shown contains multiple blog pages
// with multiple pages, the "info_header" cannot be used because we have many of them
function is_multi_page()
{
	// it's a tag page
	if (window.location.href.search("/search/") >= 0)
		return true;

	// it's a single page
	if (window.location.href.search(".html") >= 0)
		return false;

	// it's a list, like month one
	return true;
}

// misc colors for down
// from https://en.wikipedia.org/wiki/Web_colors

var COLORS_5 = [
"Red",
"Firebrick",
"Crimson",
"IndianRed",
"LightCoral",
"DarkSalmon",
"Salmon",
"DarkRed", // dark
//"LightSalmon", // too light
// repeat
"Red",
"Firebrick",
"Crimson",
"IndianRed",
"LightCoral",
"DarkSalmon",
"Salmon",
"DarkRed", // dark
"Red",
"Red",
"Red",
"Red",
"Red",
"Red",
"Red",
"Red",
"Red"
];

var COLORS_4 = [
"DarkGreen",
"Green",
"ForestGreen",
"SeaGreen",
"MediumSeaGreen",
//"MediumAquamarine",  like blue
//"DarkSeaGreen", like openstreetmap background
//"PaleGreen", too ligth
//"LightGreen", too ligth
//"MediumSpringGreen", too strong
//"SpringGreen", too strong
//"GreenYellow", too strong
//"Chartreuse", too strong
//"LawnGreen", too strong
//"Lime", too strong
"LimeGreen",
"YellowGreen",
// "OliveDrab", like openstreetmap background
// "Olive", like openstreetmap background
// "DarkOliveGreen", like openstreetmap background
// repeat
"DarkGreen",
"Green",
"ForestGreen",
"SeaGreen",
"MediumSeaGreen",
"LimeGreen",
"YellowGreen",
"OliveDrab",
"Olive",
"DarkOliveGreen",
"Green",
"Green",
"Green",
"Green",
"Green",
"Green",
"Green",
"Green",
"Green"
];

var COLORS_3 = [
"MidnightBlue",
"DarkBlue",
"Blue",
"RoyalBlue",
"SteelBlue",
"CornflowerBlue",
"DodgerBlue",
"DeepSkyBlue",
"MediumBlue", // dark
"Navy", // dark
//"LightSkyBlue", too light
//"SkyBlue", too light
//"LightBlue", too light
//"PowderBlue", too light
//"LightSteelBlue", too light
// repeat
"MidnightBlue",
"DarkBlue",
"Blue",
"RoyalBlue",
"SteelBlue",
"CornflowerBlue",
"DodgerBlue",
"DeepSkyBlue",
"MediumBlue", // dark
"Navy", // dark
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
];

var COLORS_2 = [
"Indigo",
"Purple",
"DarkOrchid",
"DarkViolet",
"BlueViolet",
"MediumPurple",
"MediumOrchid",
"Magenta",
"Orchid",
"Violet",
"Plum",
// repeat
"Indigo",
"Purple",
"DarkOrchid",
"DarkViolet",
"BlueViolet",
"MediumPurple",
"MediumOrchid",
"Magenta",
"Orchid",
"Violet",
"Plum",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple"
];

var COLORS_1 = [
"DarkSlateGray",
"SlateGray",
"DimGray",
"Gray",
"DarkGray",
"Silver",
"LightGray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray"
];

// Colors for up track.
// Gray for Openstreetmap
// Black for Cyclosm
var COLORS_UP = "#1F1F1F";

// multi track info
var multi_down_set = [];
var multi_up_set = [];

// setup the info header adding the info of the down, assume a single call
function setup_down(index)
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	if (is_multi_page()) {
		element.innerHTML = "";
		return;
	}

	var html = "";

	var cycle = get_track_cycle(index)
	if (cycle == "")
		cycle = "no";

	html += "<b>Giudizio: " + get_track_vote(index) + "</b><br/>";
	html += "<b>Difficolt\u00E0: " + get_track_rate(index) + "</b>" + get_track_rate_max(index) + "<br/>";
	html += "<b>Tempo a spinta:<!--DISCESA--> " + cycle + "</b><!--SALITA--><br/>";
	html += "<b>Download GPX: </b>" + get_track_anchor(index,"<b>" + get_track_name(index) + "</b>");
	html += "&nbsp;" + get_shademap_anchor(index);

	element.innerHTML = html;
}

// setup the info header adding the GPX of the up
function setup_up(index)
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	if (is_multi_page()) {
		element.innerHTML = "";
		return;
	}

	var html = element.innerHTML;

	html += ", " + get_track_anchor(index, get_track_name(index));
	html += "&nbsp;" + get_shademap_anchor(index);

	var cycle = get_track_cycle(index);
	if (cycle != "") {
		html = html.replace("<!--DISCESA-->","</b> discesa <b>");
		html = html.replace("<!--SALITA-->", ", salita <b>" + cycle + "</b>");
	}

	element.innerHTML = html;
}

function sort_by_vote(a, b)
{
	if (TRACKS[a].vote > TRACKS[b].vote)
		return -1;
	if (TRACKS[a].vote < TRACKS[b].vote)
		return 1;
	return 0;
}

function setup_multi()
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	if (is_multi_page()) {
		element.innerHTML = "";
		return;
	}

	var html = "<p>";

	multi_down_set.sort(sort_by_vote);

	for (var i = 0; i < multi_down_set.length; ++i) {
		var index = multi_down_set[i];
		html += "<b>" + get_track_name(index) + "</b><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;" + get_track_vote(index) + ", ";
		html += get_track_rate(index) + get_track_rate_max(index);
		html += ", " + get_track_anchor(index, "download GPX");
		html += "&nbsp;" + get_shademap_anchor(index);
		html += "</br>";
	}

	for (var i = 0; i < multi_up_set.length; ++i) {
		var index = multi_up_set[i];
		html += "<b>" + get_track_name(index) + "</b><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;";
		html += get_track_anchor(index, "download GPX");
		html += "&nbsp;" + get_shademap_anchor(index);
		html += "</br>";
	}

	html += "</p>";

	element.innerHTML = html;
}

// adjust the file name to the new standard
function adjust_file(file)
{
	if (RENAME[file] === undefined)
		return file;
	else
		return RENAME[file];
}

// create a post down track
function create_down(map, control, file)
{
	file = adjust_file(file);

	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].file == file) {
			create_track(map, control,
				ARCHIVE + 'gpx/' + TRACKS[i].file,
				i,
				{
					weight: 7,
					slope: true,
					force_renderer: map.hotline_renderer
				}
			);

			// setup info directly
			setup_down(i);
			break;
		}
	}
}

// create a post up track
function create_up(map, control, file)
{
	file = adjust_file(file);

	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].file == file) {
			create_zone_track(map, control,
				ARCHIVE + 'gpx/' + TRACKS[i].file,
				i,
				{
					color: COLORS_UP,
					weight: 3
				}
			);

			// setup info directly
			setup_up(i);
			break;
		}
	}
}

// create a post including all the up and down tracks matching a specific locality
// use slope as color
function create_post(map, control, zone)
{
	// first down
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind != "down" && TRACKS[i].kind != "trek")
			continue;

		create_track(map, control,
			ARCHIVE + 'gpx/' + TRACKS[i].file,
			i,
			{
				weight: 7,
				slope: true,
				force_renderer: map.hotline_renderer
			}
		);

		// insert in the header list
		multi_down_set.push(i);
	}

	// then up
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind != "up")
			continue;

		create_zone_track(map, control,
			ARCHIVE + 'gpx/' + TRACKS[i].file,
			i,
			{
				color: COLORS_UP,
				weight: 3
			}
		);

		// insert in the header list
		multi_up_set.push(i);
	}

	setup_multi();
}

// create a dog marker
function create_dog(map, control, pos_x, pos_y, msg)
{
	var DogIcon = L.Icon.extend({
		options: {
		iconSize:     [32, 26],
		iconAnchor:   [16, 13],
		popupAnchor:  [-3, -20]
	}
	});

	var dogIcon = new DogIcon({iconUrl: ARCHIVE + 'img/dog-icon.png'});

	L.marker([pos_x, pos_y], {icon: dogIcon}).addTo(map).bindPopup(msg);
}

// create a tree marker
function create_tree(map, control, pos_x, pos_y, msg)
{
	var TreeIcon = L.Icon.extend({
		options: {
		iconSize:     [32, 32],
		iconAnchor:   [16, 16],
		popupAnchor:  [-3, -20]
	}
	});

	var treeIcon = new TreeIcon({iconUrl: ARCHIVE + 'img/tree-icon.png'});

	L.marker([pos_x, pos_y], {icon: treeIcon}).addTo(map).bindPopup(msg);
}

function table_track(index)
{
	var html = "";

	html += '<tr><td>';
	if (TRACKS[index].link)
		html += '<b><a href="' + WEB + TRACKS[index].link + '.html">' + TRACKS[index].name + "</a></b>&nbsp;&nbsp;";
	else
		html += TRACKS[index].name + "&nbsp;&nbsp;";
	html += '</td><td style="white-space:nowrap;padding-left:5px;padding-right:5px">';
	html += get_track_vote(index);
	html += '</td><td style="white-space:nowrap;padding-left:5px;padding-right:5px">';
	html += get_track_rate(index) + get_track_rate_max(index);
	html += '</td><td style="white-space:nowrap;padding-left:5px;padding-right:5px">';
	html += "" + get_track_elevation(index);
	html += "</td></tr>";

	return html;
}

function table_zone(title, desc, header)
{
	var element = document.getElementById(header);
	if (element == null)
		return;

	if (is_multi_page()) {
		element.innerHTML = "";
		return;
	}

	var html = desc;

	if (multi_down_set.length != 0) {
		html += "<p><table>";
		html += '<tr><th style="text-align:left;">';
		html += title;
		html += '</th><th style="text-align:left;">Giudizio</th><th style="text-align:left;">Difficolt\u00E0</th><th style="text-align:left;">Dislivello</th></tr>';

		for (var i = 0; i < multi_down_set.length; ++i) {
			var index = multi_down_set[i];

			html += table_track(index);
		}

		html += "</table></p>";
	}

	element.innerHTML = html;
}

// create a post including all the filtered tracks, use rank as color
function create_generic(map, control, zone, title, desc, header, filter)
{
	var color_d = [0, 0, 0, 0, 0, 0];

	multi_down_set = [];
	multi_up_set = [];

	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (filter.search(TRACKS[i].kind) < 0)
			continue;

		// insert in the proper multi list
		if (TRACKS[i].kind == "up") {
			multi_up_set.push(i);
		} else {
			multi_down_set.push(i);
		}
	}

	multi_down_set.sort(sort_by_vote);

	// first down
	for (var i = 0; i < multi_down_set.length; ++i) {
		var index = multi_down_set[i];
		var color;
		var weight;

		// select weight and color for DOWN track
		weight = 9;
		if (TRACKS[index].vote == 5)
			color = COLORS_5[color_d[5]++]
		else if (TRACKS[index].vote == 4)
			color = COLORS_4[color_d[4]++]
		else if (TRACKS[index].vote == 3)
			color = COLORS_3[color_d[3]++]
		else if (TRACKS[index].vote == 2)
			color = COLORS_2[color_d[2]++]
		else
			color = COLORS_1[color_d[1]++]

		create_zone_track(map, control,
			ARCHIVE + 'redux/' + TRACKS[index].file,
			index,
			{
				color: color,
				weight: weight
			}
		);
	}

	// then up
	for (var i = 0; i < multi_up_set.length; ++i) {
		var index = multi_up_set[i];
		var color;
		var weight;

		// select weight and color for UP track
		color = COLORS_UP;
		weight = 3;

		create_zone_track(map, control,
			ARCHIVE + 'redux/' + TRACKS[index].file,
			index,
			{
				color: color,
				weight: weight
			}
		);
	}

	table_zone(title, desc, header);
}

// create a zone post including all the up and down tracks
function create_zone(map, control, zone)
{
	desc = "";

	desc += "<p>";
	desc += "Elenco dei percorsi orientati alla discesa. Sono generalmente fattibili sia con una MTB muscolare che E-Bike. ";
	desc += "</p>";

	create_generic(map, control, zone, "Discese", desc, "info_header", "up,down");
}

// create a zone post including all the trek tracks
function create_trek(map, control, zone)
{

	desc = "";

	desc += "<p>"
	desc += "Elenco dei percorsi escursionistici, meno orientati alla discesa e di più all'escursionismo. ";
	desc += "</p>"

	create_generic(map, control, zone, "Escursioni", desc, "trek_header", "trek");
}

// create a climp post including all the up tracks
function create_climb(map, control, zone) {
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind != "up")
			continue;

		create_zone_track(map, control,
			ARCHIVE + 'redux/' + TRACKS[i].file,
			i,
			{
				slope: true,
				weight: 7
			}
		);
	}
}

function count_tracks()
{
	var count = 0;
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].kind != "down" && TRACKS[i].kind != "trek")
			continue;
		if (TRACKS[i].zone == "hidden")
			continue;
		++count;
	}

	return count.toString();
}

function count_ups()
{
	var count = 0;
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].kind != "up")
			continue;
		if (TRACKS[i].zone == "hidden")
			continue;
		++count;
	}

	return count.toString();
}

function count_pages()
{
	var pages = new Set()
	for (i = 0; i < TRACKS.length; i++) {
		pages.add(TRACKS[i].link);
	}

	return pages.size.toString();
}
