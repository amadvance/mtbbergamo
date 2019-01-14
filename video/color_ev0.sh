# Adjust color for video recorded in FLAT color mode

source ./settings.sh

FILE=$1
EXTENSION="${FILE##*.}"
NAME="${FILE%.*}"

ffmpeg -i $1 \
	-vf $VF_FLAT_EV0 \
	$ENCODE_264 \
	$ENCODE_AUDIO \
	$NAME-$GENERATION.$EXTENSION

