all: css js zip redux

css:
	cat leaflet.css Control.FullScreen.css custom.css > www/all.css

js:
	cat leaflet.js leaflet.hotline.js gpx.js Control.FullScreen.js Leaflet.Control.Custom.js tracks.js dict.js custom.js > www/all.js

GPX = $(wildcard www/gpx/*.gpx)

ZIP = $(patsubst www/gpx/%.gpx,www/zip/%.zip,$(GPX))

REDUX = $(patsubst www/gpx/%.gpx,www/redux/%.gpx,$(GPX))

www/zip/%.zip : www/gpx/%.gpx
	zip -j $@ $<

www/redux/%.gpx : www/gpx/%.gpx
	gpx-cmd-tools/gpxsimplify -d 2 -o $@ $<

zip: $(ZIP)

redux: $(REDUX)

up: all
	cp -u www/all.js ftp/www/all.js
	cp -u www/all.css ftp/www/all.css

rm:
	rm ftp/www/all.js

ov: rm up

xml:
	xmllint --format archive/blog.xml > blog.tmp
	mv blog.tmp archive/blog.xml

