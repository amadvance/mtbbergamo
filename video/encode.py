# Encode a openshot project

import json
import sys
import os

if len(sys.argv) != 2:
	print "Syntax: encode FILE"
	sys.exit(0)

file = sys.argv[1]

with open(file) as f:
    data = json.load(f)

# First create the segments
name = os.path.splitext(os.path.basename(file))[0]
output_mp4 = name + "-YOUTUBE.mp4"
output_lst = name + ".lst";
tmp_glob = ""
tmp_count = 0

# Sort the clips, they are in insertion order, not in position order
clips = sorted(data["clips"], key=lambda clip: clip["position"])

cmd = open(name + ".sh", "w+")

files = set()

# Stop at first error
print >>cmd, "set -e"

# Generate the list file for the concat
print >>cmd, "echo # Concat", "> " + output_lst
for a in clips:
	clip_mp4 = a["reader"]["path"].replace("./","")
	clip_mkv = clip_mp4.replace(".mp4",".tmp.mkv")
	print >>cmd, "echo file " + clip_mkv, " >> " + output_lst
	print >>cmd, "echo inpoint", float(a["start"]), ">> " + output_lst
	print >>cmd, "echo outpoint", float(a["end"]), ">> " + output_lst
	files.add(clip_mp4)

# Repack the clips to mkv
# Using the originals result in the contact to insert frozen frames at the startup
# Note that repacking in mp4 still has this problem
for a in files:
	clip_mp4 = a
	clip_mkv = clip_mp4.replace(".mp4",".tmp.mkv")
	tmp_glob += " " + clip_mkv
	print >>cmd, "ffmpeg -i", clip_mp4, "-c copy -map 0:0 -map 0:1", clip_mkv

# Concatenate the video with encoding
PLAIN='-c copy -bsf:a aac_adtstoasc'
FILTER='-vf "normalize=blackpt=black:whitept=white:smoothing=600:strength=1.0,eq=contrast=1.1:saturation=1.8,curves=blue=\'0/0 0.5/0.45 1/1\',unsharp=7:7:1.0,hflip,vflip"'
ENCODE='-preset veryfast -codec:v libx264 -crf 24 -maxrate 90M -bufsize 30M -pix_fmt yuvj420p -codec:a aac -b:a 192k'
print >>cmd, "ffmpeg -y -f concat -i " + name + ".lst", FILTER, ENCODE, output_mp4

# Remove temp files
print >>cmd, "rm" + tmp_glob
print >>cmd, "rm " + output_lst

