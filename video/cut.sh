set -e
../../ffmpeg-5.0.1-amd64-static/ffmpeg -ss 6 -t 10 -i $1 -c copy output.mp4
