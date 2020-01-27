all: css js zip

css:
	cat leaflet.css Control.FullScreen.css custom.css > www/all.css

js:
	cat leaflet.js leaflet.hotline.js gpx.js Control.FullScreen.js Leaflet.Control.Custom.js tracks.js custom.js > www/all.js

GPX = $(wildcard www/gpx/*.gpx)

ZIP = $(patsubst www/gpx/%.gpx,www/zip/%.zip,$(GPX))

www/zip/%.zip : www/gpx/%.gpx
	zip -j $@ $<

zip: $(ZIP)

up: all
	cp -u www/all.js ftp/all.js
	cp -u www/all.css ftp/all.css
	cp -urv www/gpx ftp/
	cp -urv www/zip ftp/

rm:
	rm ftp/all.js

ov: rm up

xml:
	xmllint --format archive/blog.xml > blog.tmp
	mv blog.tmp archive/blog.xml

