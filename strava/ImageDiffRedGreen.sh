# From https://stackoverflow.com/questions/5132749/diff-an-image-using-imagemagick

export MAGICK_TEMPORARY_PATH=/usr/local/var/tmp

FIRST=$1-$2
SECOND=$1-$3
OUTPUT=$1-Diff-$2-$3

convert '(' $SECOND.tif -flatten -grayscale Rec709Luminance ')' \
	'(' $FIRST.tif -flatten -grayscale Rec709Luminance ')' \
	'(' -clone 0-1 -compose darken -composite ')' \
	-channel RGB -combine $OUTPUT-TMP-1.tif


# Convert white background to transparent
convert $OUTPUT-TMP-1.tif -fuzz 10% -transparent white $OUTPUT.tif

# Create the VRT
sed s/$FIRST/$OUTPUT/g < $FIRST.vrt > $OUTPUT.vrt

# Create the VRT overlay (images at lower zoom levels)
gdaladdo --config COMPRESS_OVERVIEW LZW $OUTPUT.vrt

rm -f $OUTPUT-TMP-1.tif

echo Green is where the second image adds and Red where the second images removes
