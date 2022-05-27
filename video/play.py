# Play a file with filtering

import sys
import os

if len(sys.argv) != 2:
	print "Syntax: play FILE.mp4"
	sys.exit(0)

file = sys.argv[1]

FILTER='-vf "scale=-1:720,normalize=blackpt=black:whitept=white:smoothing=60:strength=1.0,eq=contrast=1.1:saturation=1.5,curves=blue=\'0/0 0.5/0.45 1/1\',unsharp=7:7:1.2"'
FILTER_DARK='-vf "scale=-1:720,curves=all=\'0/0 0.4/0.47 1/1\',normalize=blackpt=black:whitept=white:smoothing=60:strength=1.0,eq=saturation=1.5,unsharp=7:7:1.2"'

cmdline = "ffplay -i " + file + " " + FILTER_DARK

# Run
print '$', cmdline
os.system(cmdline)

