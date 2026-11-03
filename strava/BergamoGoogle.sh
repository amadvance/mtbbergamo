# Name of the maps to generate
DATE=`date +%Y%m`
NAME=BergamoGoogle-$DATE

# Coordinates of the zone
# X1,Y1 is the bottom-left corner
# X2,Y2 is the top-right corner
X1=45.65
Y1=9.4
X2=46.1
Y2=10.105

# Zoom level
Z=16

# Get Google
URL="https://mt.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
./stitch -s 256 -o ${NAME}-RAW.tif -w -f geotiff -- $X1 $Y1 $X2 $Y2 $Z "${URL}"

# Adds tiles (speed-up visualization)
gdal_translate -co TILED=YES -co COMPRESS=JPEG ${NAME}-RAW.tif $NAME.tif

# Create the JNX
qmt_map2jnx -x 782 -q 90 -s 411 -p 0 -m BirdsEye -n $NAME -c Google -z 50 $NAME.tif $NAME.jnx

# Create the VRT
gdalbuildvrt $NAME.vrt $NAME.tif

# Create the VRT overlay (images at lower zoom levels)
gdaladdo --config COMPRESS_OVERVIEW JPEG --config INTERLEAVE_OVERVIEW PIXEL $NAME.vrt

