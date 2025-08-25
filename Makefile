all: ele css js redux

ele:
	python3 elevation.py

css:
	cat leaflet.css Control.FullScreen.css custom.css > www/all.css

js:
	cat leaflet.js leaflet.hotline.js gpx.js Control.FullScreen.js Leaflet.Control.Custom.js tracks.js dict.js charging.js custom.js > www/all.js

GPX = $(wildcard www/gpx/*.gpx)

REDUX = $(patsubst www/gpx/%.gpx,www/redux/%.gpx,$(GPX))

www/redux/%.gpx : www/gpx/%.gpx
	gpx-cmd-tools/gpxsimplify -d 2 -o $@ $<

redux: $(REDUX)

xml:
	xmllint --format archive/blog.xml > blog.tmp
	mv blog.tmp archive/blog.xml
