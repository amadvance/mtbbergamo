# Encode an OpenShot project (Python 2/3 compatible)

from __future__ import print_function
import json
import sys
import os

if len(sys.argv) != 2:
    print("Syntax: encode FILE")
    sys.exit(0)

filename = sys.argv[1]

with open(filename, "r") as f:
    data = json.load(f)

# First create the segments
name = os.path.splitext(os.path.basename(filename))[0]
output_mp4 = name + "-YOUTUBE.mp4"
output_lst = name + ".lst"
ffmpeg = "nice ffmpeg5"

# Sort the clips (they are in insertion order, not position order)
clips = sorted(data["clips"], key=lambda clip: clip["position"])

cmd = open(name + ".sh", "w+")
files = set()

# Stop at first error
print("set -e", file=cmd)

# Generate the list file for concat
input_list = ""
filter_list = ""
i = 0

for a in clips:
    clip_mp4 = a["reader"]["path"]
    if clip_mp4.startswith("./"):
        clip_mp4 = clip_mp4[2:]

    input_list += "-ss " + str(float(a["start"])) + " -to " + str(float(a["end"])) + " -i " + clip_mp4 + " "
    filter_list += "[{}:v] [{}:a] ".format(i, i)
    i += 1

filter_list += "concat=n={}:v=1:a=1 [v] [a]".format(i)

# Filters and encoding options
PLAIN = "-c copy -bsf:a aac_adtstoasc"
FILTER_SUMMER = "normalize=blackpt=black:whitept=white:smoothing=60:strength=1.0,eq=contrast=1.1:saturation=1.5,curves=green='0/0 0.5/0.45 1/1',unsharp=7:7:1.2"
FILTER_WINTER = "normalize=blackpt=black:whitept=white:smoothing=60:strength=1.0,eq=contrast=1.1:saturation=1.5,curves=blue='0/0 0.5/0.45 1/1',unsharp=7:7:1.2"
FILTER_CONTRAST = "normalize=blackpt=black:whitept=white:smoothing=60:strength=1.0,eq=contrast=1.2:saturation=1.5,curves=blue='0/0 0.5/0.45 1/1',unsharp=7:7:1.2"
FILTER_DARK = "curves=all='0/0 0.5/0.65 1/1',normalize=blackpt=black:whitept=white:smoothing=60:strength=1.0,eq=contrast=1.1:saturation=1.5,unsharp=7:7:1.2"
ENCODE = "-preset veryfast -codec:v libx264 -crf 24 -maxrate 90M -bufsize 30M -pix_fmt yuv420p -codec:a aac -b:a 192k"

FILTER = FILTER_WINTER

print(ffmpeg, "-y", input_list, "-filter_complex \"{};[v]{}[v]\" -map \"[v]\" -map \"[a]\"".format(filter_list, FILTER), ENCODE, output_mp4, file=cmd)

cmd.close()
