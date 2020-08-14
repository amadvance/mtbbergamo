# Export a openshot project without encoding
#
# This has the limitation of being able to seek only to I-frames
# and then you cannot have precise cut positions

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
tmp_glob = ""
tmp_count = 0

# Sort the clips, they are in insertion order, not in position order
clips = sorted(data["clips"], key=lambda clip: clip["position"])

cmd = open(name + ".sh", "w+")
lst = open(name + ".lst", "w+")

# Generate the list file for the concat
for a in clips:
	print >>lst, "file " + a["reader"]["path"].replace("./","")
	print >>lst, "inpoint", float(a["start"])
	print >>lst, "outpoint", float(a["end"])

# Concatenate the video without encoding
PLAIN='-c copy -bsf:a aac_adtstoasc'
print >>cmd, "ffmpeg -y -f concat -i " + name + ".lst", PLAIN, output_mp4

