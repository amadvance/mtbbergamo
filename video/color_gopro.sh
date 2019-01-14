# Adjust color for video recorded in GOPRO color mode

source ./settings.sh

FILE=$1
EXTENSION="${FILE##*.}"
NAME="${FILE%.*}"

ffmpeg -y -i $1 \
	-vf $VF_GOPRO \
	$ENCODE_264 \
	$ENCODE_AUDIO \
	$NAME-$GENERATION.$EXTENSION

