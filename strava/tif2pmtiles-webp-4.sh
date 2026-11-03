#!/usr/bin/env bash

set -euo pipefail

# ------------------------------------------------------------------------------
# Input Validation
# ------------------------------------------------------------------------------
if [ $# -lt 1 ]; then
    echo "Usage: $0 <base_filename> [quality]"
    echo "Example: $0 BergamoRide-202607"
    echo "Example (Explicit Quality): $0 BergamoRide-202607 80"
    exit 1
fi

BASE_NAME="$1"
QUALITY="${2:-80}"

# Detect input file format (.vrt preferred over .tif if both exist)
if [ -f "${BASE_NAME}.vrt" ]; then
    INPUT_FILE="${BASE_NAME}.vrt"
elif [ -f "${BASE_NAME}.tif" ]; then
    INPUT_FILE="${BASE_NAME}.tif"
else
    echo "Error: Neither '${BASE_NAME}.vrt' nor '${BASE_NAME}.tif' exists." >&2
    exit 1
fi

# Ensure required commands are installed
for cmd in gdal_translate gdaladdo pmtiles python3; do
    if ! command -v "$cmd" &>/dev/null; then
        echo "Error: Required command '$cmd' is not installed or not in PATH." >&2
        exit 1
    fi
done

echo "==> Input file detected: ${INPUT_FILE}"

# Automatically calculate bounding box and midpoints using gdalinfo & python
eval $(python3 -c "
import json, subprocess
info = json.loads(subprocess.check_output(['gdalinfo', '-json', '${INPUT_FILE}']))
coords = info['cornerCoordinates']
ulx, uly = coords['upperLeft']
lrx, lry = coords['lowerRight']
midx = (ulx + lrx) / 2.0
midy = (uly + lry) / 2.0
print(f'ULX={ulx}; ULY={uly}; LRX={lrx}; LRY={lry}; MIDX={midx}; MIDY={midy}')
")

# Define 4 quadrants: NordOvest, NordEst, SudOvest, SudEst
declare -A QUADS=(
    ["NordOvest"]="${ULX} ${ULY} ${MIDX} ${MIDY}"
    ["NordEst"]="${MIDX} ${ULY} ${LRX} ${MIDY}"
    ["SudOvest"]="${ULX} ${MIDY} ${MIDX} ${LRY}"
    ["SudEst"]="${MIDX} ${MIDY} ${LRX} ${LRY}"
)

# Process each quadrant sequentially
for quad in "NordOvest" "NordEst" "SudOvest" "SudEst"; do
    bounds=(${QUADS[$quad]})
    q_ulx=${bounds[0]}
    q_uly=${bounds[1]}
    q_lrx=${bounds[2]}
    q_lry=${bounds[3]}

    out_base="${BASE_NAME}-${quad}"
    mbtiles_file="${out_base}.mbtiles"
    pmtiles_file="${out_base}.pmtiles"

    echo "==> Generating WEBP PMTiles for quadrant: ${quad} (${pmtiles_file}, Quality ${QUALITY})..."

    # Crop and translate quadrant into MBTiles
    gdal_translate \
        -of MBTILES \
        -co TILE_FORMAT=WEBP \
        -co QUALITY="${QUALITY}" \
        -co RESAMPLING=BILINEAR \
        -projwin ${q_ulx} ${q_uly} ${q_lrx} ${q_lry} \
        "${INPUT_FILE}" \
        "${mbtiles_file}"

    # Build pyramid overviews for zoom levels
    echo "==> Building overviews for ${quad}..."
    gdaladdo -r bilinear "${mbtiles_file}" 2 4 8 16 32

    # Convert MBTiles to PMTiles container
    echo "==> Converting ${quad} MBTiles to PMTiles..."
    pmtiles convert "${mbtiles_file}" "${pmtiles_file}"

    # Clean up temporary MBTiles
    rm -f "${mbtiles_file}"

    echo "==> Created: ${pmtiles_file}"
done

echo "==> Done! Created all 4 PMTiles quadrants successfully."
