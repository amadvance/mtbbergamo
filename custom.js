/* mtbbergamo JS */

var WEB = 'http://www.mtbbergamo.it/';
var ARCHIVE_BACKUP = 'http://ftp.mtbbergamo.it/';
var ARCHIVE = 'https://raw.githubusercontent.com/amadvance/mtbbergamo/master/www/';

function _merge_fields(a, b) {
	var _ = {};
	for (var attr in a) { _[attr] = a[attr]; }
	for (var attr in b) { _[attr] = b[attr]; }
	return _;
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

	if (TRACKS[index].rate == 0)
		return "";

	return "S" + TRACKS[index].rate.toString();
}

function get_track_rate_max(index)
{
	if (index == -1)
		return "";

	if (TRACKS[index].rate == 0)
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

	if ('comm' in TRACKS[index]) {
		return TRACKS[index].comm;
	}

	if (TRACKS[index].cycle == 0)
		return "";

	return TRACKS[index].cycle.toString() + "%";
}

function create_map(id) {
	var mymap = L.map(id, { fullscreenControl: true } );

	var OPENSTREETMAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var CYCLOSM = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png';

	var mytile = new L.tileLayer(
	CYCLOSM,
	{
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	mytile.addTo(mymap);

	var myscale = new L.control.scale({ metric: true, imperial: false });

	myscale.addTo(mymap);

	return mymap;
}

var ZONE_TITLE = "<div class='maptitle'>Per scaricare la traccia GPX e la descrizione cliccate sul percorso colorato nella mappa</div>"
var TRACK_TITLE = "<div class='maptitle'>Per scaricare la traccia GPX cliccate sul percorso colorato nella mappa</div>"

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

function create_control(map) {
	var control = L.control.layers(null, null).addTo(map);
	return control;
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
	if (cycle != "" && cycle != "100%") {
		desc += "<br/>";
		desc += "Ciclabilit\u00E0: <b>" + cycle + "</b>";
	}

	desc += "<br/>";
	desc += "&harr; " + (gpx.get_distance() / 1000).toFixed(1) + " km";

	if (gpx.get_elevation_gain() > 100) {
		desc += ", &uarr; "+ Math.floor(gpx.get_elevation_gain()) + "m";
	}
	if (gpx.get_elevation_loss() > 100) {
		desc += ", &darr; "+ Math.floor(gpx.get_elevation_loss()) + "m";
	}
	if (gpx.get_moving_time() > 1000 * 60) {
		desc += ", "+ Math.floor(gpx.get_moving_time() / (1000*60)) + "min";
		if (url.indexOf("Salita") != -1) {
			if (url.indexOf("_EBIKE") != -1)
				desc += " (E-Bike)";
			else
				desc += " (muscolare)";
			desc += ", VAM ";
			desc += Math.floor(gpx.get_elevation_gain() / gpx.get_moving_time() * (1000*60*60));
			desc += " m/h";
		}
	}

	var zip = url.replace(/gpx/g,"zip");

	desc += "<br/>";
	desc += "<a href=\"" + zip + "\" download>Download GPX</a>";
	gpx.bindPopup(desc);
	control.addOverlay(gpx, name);
}

// create a track for a post with full size icons
function create_track(map, control, url, index, track_options)
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
			slope: track_options.slope
		}
	}).on('loaded', function(e) {
		var gpx = e.target;
		create_gpx_info(map, control, gpx, url, index, null);
	}).addTo(map);
}

// create a track for a zone post, with link to the specific post
function create_zone_track(map, control, url, index, track_options)
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
			slope: track_options.slope
		}
	}).on('loaded', function(e) {
		var gpx = e.target;
		create_gpx_info(map, control, gpx, url, index, TRACKS[index].link);
	}).addTo(map);
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
"OliveDrab",
"Olive",
"DarkOliveGreen",
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

function setup_down(index)
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	var html = "";

	html += "<b>Giudizio: " + get_track_vote(index) + "</b><br/>";
	html += "<b>Difficolt\u00E0: " + get_track_rate(index) + "</b>" + get_track_rate_max(index) + "<br/>";
	html += "<b>Ciclabilit\u00E0: " + get_track_cycle(index) + "</b><br/>";

	element.outerHTML = html;
}

// track info
var multi_set = [];

function setup_multi()
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	var html = "<p>";

	for (var i = 0; i < multi_set.length; ++i) {
		var index = multi_set[i];
		html += "<b>" + TRACKS[index].name + "</b><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;" + get_track_vote(index) + ", ";
		html += get_track_rate(index) + get_track_rate_max(index);

		var url = ARCHIVE + 'gpx/' + TRACKS[index].file;
		var zip = url.replace(/gpx/g,"zip");

		html += ", <a href=\"" + zip + "\" download>download GPX</a>";
		html += "</br>";
	}

	html += "</p>";

	element.outerHTML = html;
}

// create a post down track
function create_down(map, control, file)
{
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].file == file) {
			create_track(map, control,
				ARCHIVE + 'gpx/' + TRACKS[i].file,
				i,
				{
					weight: 7,
					slope: true
				}
			);

			setup_down(i);
			break;
		}
	}
}

// create a multi down track
function create_multi(map, control, file)
{
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].file == file) {
			create_track(map, control,
				ARCHIVE + 'gpx/' + TRACKS[i].file,
				i,
				{
					weight: 7,
					slope: true
				}
			);

			// insert in the header list
			multi_set.push(i);
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
				ARCHIVE + 'gpx/' + TRACKS[i].file,
				i,
				{
					color: COLORS_UP,
					weight: 3
				}
			);
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

		if (TRACKS[i].kind == "down") {
			create_multi(map, control, TRACKS[i].file);
		}
	}

	setup_multi();

	// then up
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind == "up") {
			create_up(map, control, TRACKS[i].file);
		}
	}
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

function setup_zone()
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	var html = "<p><table>";

	html += '<tr><th style="text-align:left;">Discesa</th><th style="text-align:left;">Giudizio</th><th style="text-align:left;">Difficolt\u00E0</th></tr>';

	for (var i = 0; i < multi_set.length; ++i) {
		var index = multi_set[i];

		html += '<tr><td>';
		if (TRACKS[index].link)
			html += '<b><a href="' + WEB + TRACKS[index].link + '.html">' + TRACKS[index].name + "</a></b>&nbsp;&nbsp;";
		else
			html += TRACKS[index].name + "&nbsp;&nbsp;";
		html += '</td><td style="white-space:nowrap">';
		html += get_track_vote(index);
		html += '</td><td style="white-space:nowrap">';
		html += get_track_rate(index) + get_track_rate_max(index);
		html += "</td></tr>";
	}

	html += "</table></p>";

	element.outerHTML = html;
}

// create a zone post including all the up and down tracks
// use rank as color
function create_zone(map, control, zone) {
	var color_d = [0, 0, 0, 0, 0, 0];

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
			weight = 9;
			if (TRACKS[i].vote == 5)
				color = COLORS_5[color_d[5]++]
			else if (TRACKS[i].vote == 4)
				color = COLORS_4[color_d[4]++]
			else if (TRACKS[i].vote == 3)
				color = COLORS_3[color_d[3]++]
			else if (TRACKS[i].vote == 2)
				color = COLORS_2[color_d[2]++]
			else
				color = COLORS_1[color_d[1]++]

			// insert in the header list
			multi_set.push(i);
		}

		create_zone_track(map, control,
			ARCHIVE + 'gpx/' + TRACKS[i].file,
			i,
			{
				color: color,
				weight: weight
			}
		);
	}

	setup_zone();
}

// create a climp post including all the up tracks
function create_climb(map, control, zone) {
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind != "up")
			continue;

		create_zone_track(map, control,
			ARCHIVE + 'gpx/' + TRACKS[i].file,
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
		if (TRACKS[i].kind != "down")
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

