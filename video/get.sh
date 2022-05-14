#!/bin/bash
echo set -e > download.sh
mtp-filetree | grep -E "\.MP4|\.JPG" | awk '/^[[:space:]]*[[:digit:]]/{ print "sleep 5\nmtp-getfile " $1 " " sprintf("%03u",$1) "." gensub(".*\\.","","g",tolower($2)) }' >> download.sh
echo echo Everything OK >> download.sh




