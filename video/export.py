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
	print >>cmd, "ffmpeg",
	print >>cmd, "-ss", float(a["start"]), "-t", float(a["end"]) - float(a["start"]), "-i", a["reader"]["path"],
	# Use hevc_mp4toannexb instead of h264_mp4toannexb for HVEC
	# The following is used to copy also the metadata
	# -map 0:0 -map 0:1 -map 0:2 -map 0:3
	print >>cmd, "-c copy -map 0:0 -map 0:1 -map 0:2 -map 0:3 -bsf:v h264_mp4toannexb -f mpegts " + tmp_file
	print >>lst, "file " + tmp_file
	tmp_glob += " " + tmp_file
	tmp_count = tmp_count + 1

# Now concatenate them
print >>cmd, "ffmpeg -f concat -i " + name + ".lst -c copy -map 0:0 -map 0:1 -map 0:3 -bsf:a aac_adtstoasc", output_mp4

# Remove temp files
print >>cmd, "rm" + tmp_glob

# Extract binary data
print >>cmd, "ffmpeg -i " + output_mp4 + " -c copy -map 0:2 -f rawvideo", output_bin

# Convert binary to gpx
print >>cmd, "../../go/bin/gopro2gpx -i=" + output_bin + " -o=" + output_gpx

# Convert binary to json
print >>cmd, "../../go/bin/gopro2json -i=" + output_bin + " -o=" + output_json

