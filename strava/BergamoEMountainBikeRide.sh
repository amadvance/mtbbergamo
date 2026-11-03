# Name of the maps to generate
DATE=`date +%Y%m`
NAME=BergamoEMountainBikeRide-$DATE

# Coordinates of the zone
# X1,Y1 is the bottom-left corner
# X2,Y2 is the top-right corner
X1=45.65
Y1=9.4
X2=46.1
Y2=10.105

# Zoom level. 15 is the most detailed for StravaHeatMap
Z=15

# Get StravaHeatmap
URL="http://localhost:8080/identified/globalheat/sport_EMountainBikeRide/blue/{z}/{x}/{y}.png"
./stitch -s 512 -o ${NAME}-RAW.tif -w -f geotiff -- $X1 $Y1 $X2 $Y2 $Z "${URL}"

# Adds tiles (speed-up visualization)
gdal_translate -co TILED=YES -co COMPRESS=LZW ${NAME}-RAW.tif $NAME.tif

# Create the JNX
qmt_map2jnx -x 782 -q 90 -s 411 -p 0 -m BirdsEye -n $NAME -c StravaHeatMap -z 50 $NAME.tif $NAME.jnx

# Create the VRT
gdalbuildvrt $NAME.vrt $NAME.tif

# Create the VRT overlay (images at lower zoom levels)
gdaladdo --config COMPRESS_OVERVIEW LZW $NAME.vrt

# Remove unneded
rm ${NAME}-RAW.tif
rm ${NAME}-RAW.tfw

