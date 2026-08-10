all: ele css js redux

ele:
	python3 elevation.py

css:
	cat leaflet.css Control.FullScreen.css custom.css > www/all.css

js:
	cat leaflet.js leaflet.hotline.js gpx.js Control.FullScreen.js Leaflet.Control.Custom.js pmtiles.js tracks.js dict.js charging.js drinking.js custom.js > www/all.js

GPX = $(wildcard www/gpx/*.gpx)

REDUX = $(patsubst www/gpx/%.gpx,www/redux/%.gpx,$(GPX))

www/redux/%.gpx : www/gpx/%.gpx
	gpx-cmd-tools/gpxsimplify -d 2 -o $@ $<

redux: $(REDUX)

charging:
	python3 charging.py

drinking:
	python3 drinking.py

sync: charging drinking js
