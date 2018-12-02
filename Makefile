all: css js

css:
	cat leaflet.css Control.FullScreen.css custom.css > www/all.css

js:
	cat leaflet.js leaflet.hotline.js gpx.js Control.FullScreen.js Leaflet.Control.Custom.js tracks.js custom.js > www/all.js

up: all
	cp -u www/all.js ftp/all.js
	cp -u www/all.css ftp/all.css

