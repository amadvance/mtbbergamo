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
	print >>lst, "file " + a["reader"]["path"]
	print >>lst, "inpoint", float(a["start"])
	print >>lst, "outpoint", float(a["end"])

# Concatenate the video (without metadata)
print >>cmd, "ffmpeg -y -f concat -i " + name + ".lst -c copy -bsf:a aac_adtstoasc", output_mp4

