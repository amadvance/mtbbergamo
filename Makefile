all: css js

css:
	cat leaflet.css Control.FullScreen.css custom.css > www/all.css

js:
	cat leaflet.js gpx.js Control.FullScreen.js custom.js > www/all.js


