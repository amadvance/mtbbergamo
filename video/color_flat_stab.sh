# Adjust color for video recorded in FLAT color mode

source ./settings.sh

FILE=$1
EXTENSION="${FILE##*.}"
NAME="${FILE%.*}"

ffmpeg -y -i $1 \
	-vf "$VF_STAB,$VF_NORMALIZE,$VF_FLAT,$VF_CURVE" \
	$ENCODE_264_NATIVE \
	$ENCODE_AUDIO \
	$NAME-$GENERATION.$EXTENSION

