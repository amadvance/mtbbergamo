#!/bin/bash
mtp-filetree | grep -v "DCIM\|100GOPRO\|Get_started" | awk '/^[[:digit:]]/{ print "mtp-getfile " $1 " " $1 "." gensub(".*\\.","","g",tolower($2)) "\nsleep 5"}' > download.sh




