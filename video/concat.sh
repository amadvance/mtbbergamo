set -e
echo file $1 > concat.lst
echo file $2 >> concat.lst
ffmpeg -f concat -safe 0 -i concat.lst -c copy output.mp4
rm -f concat.lst
