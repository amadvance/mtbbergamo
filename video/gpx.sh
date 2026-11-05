#!/usr/bin/env bash

set -euo pipefail
shopt -s nullglob

# Collect GPX files in the current directory
gpx_files=( *.gpx )
if (( ${#gpx_files[@]} == 0 )); then
  echo "No .gpx files found in the current directory." >&2
  exit 1
fi

# Pick the last in alphabetical order
latest="${gpx_files[-1]}"
base="${latest%.gpx}"

dest_full="${base}-full.gpx"
dest_simp="${base}-simply.gpx"

echo "Latest (alphabetical) GPX: $latest"
echo "Merging all *.gpx into: $dest_full"
../../gpx-cmd-tools/gpxmerge -o "$dest_full" "${gpx_files[@]}"

echo "Simplifying $dest_full into: $dest_simp"
../../gpx-cmd-tools/gpxsimplify -o "$dest_simp" "$dest_full"

echo "Done."

echo "Full merged file:     $dest_full"
echo "Simplified output:    $dest_simp"
