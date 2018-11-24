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

function create_control(map) {
	var control = L.control.layers(null, null).addTo(map);
	return control;
}

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
		try {
			var bounds = map.getBounds();
			bounds.extend(gpx.getBounds());
			map.fitBounds(bounds); 
		} catch (err) {
			map.fitBounds(gpx.getBounds());
		}

		var desc = name;
		desc += "<br/>";
		var space = "";
		if (gpx.get_elevation_gain() > 100) {
			 desc += "Salita "+ Math.floor(gpx.get_elevation_gain()) + "m";
			 space = ", ";
		}
		if (gpx.get_elevation_loss() > 100) {
				 desc += space + "Discesa "+ Math.floor(gpx.get_elevation_loss()) + "m";
		}
		desc += "<br/>";
		desc += "Download <a href=" + url + ">GPX</a>";
		gpx.bindPopup(desc);
		control.addOverlay(gpx, name);
	}).addTo(map);
}

// misc colors for down
// from https://en.wikipedia.org/wiki/Web_colors
var COLORS_DOWN = [
"Crimson",
"HotPink",
"Orange",
"Gold",
"Sienna",
"ForestGreen",
"Turquoise",
"RoyalBlue",
"Purple",
"GreenYellow",
"MediumAquamarine",
"DarkRed"
];

// black colors for up
var COLORS_UP = [
"DimGray",
"DimGray",
"DimGray",
"DimGray",
"DimGray"
//"DarkSlateGray",
//"Black",
//"SlateGray",
//"Gray"
];

function create_zone(map, control, zone) {
	var color_d = 0;
	var color_u = 0;

	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		var color;

		// select the color from the two UP/DOWN selections
		if (TRACKS[i].kind == "up") {
			color = COLORS_UP[color_u]
			++color_u;
		} else {
			color = COLORS_DOWN[color_d]
			++color_d;
		}

		create_track(map, control,
			"http://ftp.mtbbergamo.it/gpx/" + TRACKS[i].file,
			TRACKS[i].name,
			{
				color: color
			}
		);
	}
}


