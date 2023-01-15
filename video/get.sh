#!/bin/bash
echo set -e > download.sh
mtp-filetree | grep -E "\.MP4|\.JPG" | awk -f ../get.awk >> download.sh
echo echo Everything OK >> download.sh
