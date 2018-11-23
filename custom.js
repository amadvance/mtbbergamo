/* mtbbergamo JS */

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

function create_track(map, control, url)
{
	new L.GPX(url,
	{
		async: true,
		marker_options: {
			startIconUrl: 'http://ftp.mtbbergamo.it/img/pin-icon-start.png',
			endIconUrl: 'http://ftp.mtbbergamo.it/img/pin-icon-end.png',
			shadowUrl: 'http://ftp.mtbbergamo.it/img/pin-shadow.png'
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

		var desc = gpx.get_name();
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
		control.addOverlay(gpx, gpx.get_name());
	}).addTo(map);
}
