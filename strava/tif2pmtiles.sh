#!/usr/bin/env bash

set -euo pipefail

# ------------------------------------------------------------------------------
# Input Validation
# ------------------------------------------------------------------------------
if [ $# -lt 1 ]; then
    echo "Usage: $0 <base_filename> [min_zoom] [max_zoom]"
    echo "Example (Auto Max Zoom): $0 BergamoRide-202607"
    echo "Example (Explicit Zoom): $0 BergamoRide-202607"
    exit 1
fi

BASE_NAME="$1"

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
for cmd in gdal_translate gdaladdo pmtiles; do
    if ! command -v "$cmd" &>/dev/null; then
        echo "Error: Required command '$cmd' is not installed or not in PATH." >&2
        exit 1
    fi
done

MBTILES_FILE="${BASE_NAME}.mbtiles"
PMTILES_FILE="${BASE_NAME}.pmtiles"

# Build gdal_translate creation options array
GDAL_OPTS=(
    -of MBTILES
    -co TILE_FORMAT=PNG
    -co RESAMPLING=BILINEAR
)

# ------------------------------------------------------------------------------
# Process Conversion
# ------------------------------------------------------------------------------
echo "==> Input file detected: ${INPUT_FILE}"

echo "==> Generating MBTiles container..."

gdal_translate \
    "${GDAL_OPTS[@]}" \
    "${INPUT_FILE}" \
    "${MBTILES_FILE}"

echo "==> Building pyramid overviews for zoom levels..."
gdaladdo -r bilinear "${MBTILES_FILE}" 2 4 8 16 

echo "==> Converting MBTiles to PMTiles container..."
pmtiles convert "${MBTILES_FILE}" "${PMTILES_FILE}"

echo "==> Cleaning up intermediate files..."
rm -f "${MBTILES_FILE}"

echo "==> Done! Created successfully: ${PMTILES_FILE}"
