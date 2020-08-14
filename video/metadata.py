# Export a openshot project without encoding and with ancillary information

import json
import sys
import os

if len(sys.argv) != 2:
	print "Syntax: export FILE"
	sys.exit(0)

file = sys.argv[1]

with open(file) as f:
    data = json.load(f)

# First create the segments
name = os.path.splitext(os.path.basename(file))[0]
output_mp4 = name + ".mp4"
output_bin = name + ".bin"
output_gpx = name + ".gpx"
output_json = name + ".json"
tmp_glob = ""
tmp_count = 0

# Sort the clips, they are in insertion order, not in position order
clips = sorted(data["clips"], key=lambda clip: clip["position"])

cmd = open(name + ".sh", "w+")
lst = open(name + ".lst", "w+")

for a in clips:
	tmp_file = "tmp" + str(tmp_count) + ".ts"
	print >>cmd, "ffmpeg -y",
	print >>cmd, "-ss", float(a["start"]), "-t", float(a["end"]) - float(a["start"]), "-i", a["reader"]["path"],
	# Use hevc_mp4toannexb instead of h264_mp4toannexb for HVEC
	# The following is used to copy also the metadata
	# -map 0:0 -map 0:1 -map 0:2 -map 0:3
	print >>cmd, "-c copy -map 0:0 -map 0:1 -map 0:2 -map 0:3 -bsf:v h264_mp4toannexb -f mpegts " + tmp_file
	print >>lst, "file " + tmp_file
	# The "duration" is requested to avoid frozen frames, caused by a wrong estimation of the segment length
	# https://stackoverflow.com/questions/32716643/strange-pause-in-video-after-concatenation-of-two-mp4-videos
	# There is also "inpoint" and "outpoint" but they don't fix the frozen frames issue
	# https://ffmpeg.org/ffmpeg-formats.html#concat
	# Using the "concat demuxer" also work without the "duration" needs, but it also doesn't support metadata
	print >>lst, "duration", float(a["end"]) - float(a["start"])
	tmp_glob += " " + tmp_file
	tmp_count = tmp_count + 1

# Concatenate the video without metadata
# Metadata can be added with "-map 0:0 -map 0:1 -map 0:3" but then you cannot use "duration" and you get frozen frames
print >>cmd, "ffmpeg -y -f concat -i " + name + ".lst -c copy -bsf:a aac_adtstoasc", output_mp4

# Concatenate the metadata
# With metadata you cannot use "duration", otherwise you get errors like:
# "Application provided invalid, non monotonically increasing dts to muxer in stream 0: 31303272 >= 31273932"
print >>cmd, "grep -v duration " + name + ".lst > " + name + ".meta"
print >>cmd, "ffmpeg -y -f concat -i " + name + ".meta -c copy -map 0:3 -f rawvideo", output_bin
tmp_glob += " " + name + ".meta"

# Convert binary to gpx
print >>cmd, "../../go/bin/gopro2gpx -i=" + output_bin + " -o=" + output_gpx

# Convert binary to json
print >>cmd, "../../go/bin/gopro2json -i=" + output_bin + " -o=" + output_json

# Remove temp files
print >>cmd, "rm" + tmp_glob

