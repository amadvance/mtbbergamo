/* mtbbergamo JS */

function _merge_fields(a, b) {
	var _ = {};
	for (var attr in a) { _[attr] = a[attr]; }
	for (var attr in b) { _[attr] = b[attr]; }
	return _;
}

function create_map(id) {
	var mymap = L.map(id, { fullscreenControl: true } );

	var mytile = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	mytile.addTo(mymap);

	var myscale = new L.control.scale({ metric: true, imperial: false });

	myscale.addTo(mymap);

	return mymap;
}

function create_map_zone(id) {
	return create_map(id);
}

function create_map_track(id) {
	var mymap = create_map_zone(id);

	var myimage = L.control.custom({
		position: 'bottomleft',
		content : '<img src="http://ftp.mtbbergamo.it/img/slope.png" class="leaflet-slope-img" id="demoImage">',
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

function create_control(map) {
	var control = L.control.layers(null, null).addTo(map);
	return control;
}

function create_gpx_info(map, control, gpx, url, name, link)
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

	if (link)
		desc = "<b><a href=\"http://www.mtbbergamo.it/" + link + ".html\">" + name + "</a></b>";
	else
		desc = "<b>" + name + "</b>";

	desc += "<br/>";
	desc += "&harr; " + (gpx.get_distance() / 1000).toFixed(1) + " km";
	if (gpx.get_elevation_gain() > 100) {
		desc += ", &uarr; "+ Math.floor(gpx.get_elevation_gain()) + "m";
	}
	if (gpx.get_elevation_loss() > 100) {
		desc += ", &darr; "+ Math.floor(gpx.get_elevation_loss()) + "m";
	}
	desc += "<br/>";
	desc += "<a href=\"" + url + "\">Download GPX</a>";
	gpx.bindPopup(desc);
	control.addOverlay(gpx, name);
}

// create a track for a post with full size icons
function create_track(map, control, url, name, track_options)
{
	var _DEFAULT_TRACK_OPTS = {
		color: 'blue',
		weight: 5,
		slope: false
	};

	// set default options
	track_options = _merge_fields(_DEFAULT_TRACK_OPTS, track_options || {});

	new L.GPX(url,
	{
		async: true,
		marker_options: {
			// full icons
			startIconUrl: 'http://ftp.mtbbergamo.it/img/pin-icon-start.png',
			endIconUrl: 'http://ftp.mtbbergamo.it/img/pin-icon-end.png',
			shadowUrl: 'http://ftp.mtbbergamo.it/img/pin-shadow.png'
		},
		polyline_options: {
			color: track_options.color,
			weight: track_options.weight,
			slope: track_options.slope
		}
	}).on('loaded', function(e) {
		var gpx = e.target;
		create_gpx_info(map, control, gpx, url, name, null);
	}).addTo(map);
}

// create a track for a zone post, with half size icons and link to the specific post
function create_zone_track(map, control, url, name, link, track_options)
{
	var _DEFAULT_TRACK_OPTS = {
		color: 'blue',
		weight: 5,
		slope: false
	};

	// set default options
	track_options = _merge_fields(_DEFAULT_TRACK_OPTS, track_options || {});

	new L.GPX(url,
	{
		async: true,
		marker_options: {
			// half icons
			startIconUrl: 'http://ftp.mtbbergamo.it/img/pin-icon-start-50.png',
			endIconUrl: 'http://ftp.mtbbergamo.it/img/pin-icon-end-50.png',
			shadowUrl: 'http://ftp.mtbbergamo.it/img/pin-shadow-50.png',
			iconSize: [16, 25],
			shadowSize: [25, 25],
			iconAnchor: [8, 22],
			shadowAnchor: [8, 23]
		},
		polyline_options: {
			color: track_options.color,
			weight: track_options.weight,
			slope: track_options.slope
		}
	}).on('loaded', function(e) {
		var gpx = e.target;
		create_gpx_info(map, control, gpx, url, name, link);
	}).addTo(map);
}

// misc colors for down
// from https://en.wikipedia.org/wiki/Web_colors
var COLORS_DOWN = [
"HotPink", // pink
"Crimson", // red
"Orange", // orange
"Gold", // yellow
"Sienna", // brown
"ForestGreen", // green
"Teal", // cyan
"DodgerBlue", // blue
"Purple", // mangenta
"DeepPink", // pink
"DarkRed", // red
"Coral", // orange
"DarkGoldenrod", // brown
"MediumSeaGreen", // green
"LightSeaGreen", // cyan
"RoyalBlue", // blue
"MediumOrchid" // magenta
];

// black colors for up
var COLORS_UP = "Gray";

// create a post down track
function create_down(map, control, file)
{
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].file == file) {
			create_track(map, control,
				"http://ftp.mtbbergamo.it/gpx/" + TRACKS[i].file,
				TRACKS[i].name,
				{
					weight: 7,
					slope: true
				}
			);
			break;
		}
	}
}

// create a post up track
function create_up(map, control, file)
{
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].file == file) {
			create_zone_track(map, control,
				"http://ftp.mtbbergamo.it/gpx/" + TRACKS[i].file,
				TRACKS[i].name,
				TRACKS[i].link,
				{
					color: COLORS_UP,
					weight: 3
				}
			);
			break;
		}
	}
}

// create a zone post including all the up and down tracks
function create_zone(map, control, zone) {
	var color_d = 0;

	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		var color;
		var weight;

		// select the color from the two UP/DOWN selections
		if (TRACKS[i].kind == "up") {
			color = COLORS_UP;
			weight = 3;
		} else {
			color = COLORS_DOWN[color_d]
			weight = 7;
			++color_d;
		}

		create_zone_track(map, control,
			"http://ftp.mtbbergamo.it/gpx/" + TRACKS[i].file,
			TRACKS[i].name,
			TRACKS[i].link,
			{
				color: color,
				weight: weight
			}
		);
	}
}

// create a climp post including all the up tracks
function create_climb(map, control, zone) {
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind != "up")
			continue;

		create_zone_track(map, control,
			"http://ftp.mtbbergamo.it/gpx/" + TRACKS[i].file,
			TRACKS[i].name,
			TRACKS[i].link,
			{
				slope: true,
				weight: 7
			}
		);
	}
}

