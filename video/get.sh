#!/bin/bash
mtp-filetree | grep -v "DCIM\|100GOPRO\|Get_started" | awk '/^[[:digit:]]/{ print "sleep 5\nmtp-getfile " $1 " " $1 "." gensub(".*\\.","","g",tolower($2)) }' > download.sh




