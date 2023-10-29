#!/bin/bash
echo set -e > GET.sh
mtp-filetree | grep -E "\.MP4|\.JPG" | awk -f ../get.awk >> GET.sh
echo echo Everything OK >> GET.sh
