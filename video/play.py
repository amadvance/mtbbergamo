# Play a file with filtering

import sys
import os

if len(sys.argv) != 2:
	print "Syntax: play FILE.mp4"
	sys.exit(0)

file = sys.argv[1]

FILTER='normalize=blackpt=black:whitept=white:smoothing=60:strength=1.0,eq=contrast=1.1:saturation=1.5,curves=blue=\'0/0 0.5/0.45 1/1\',unsharp=7:7:1.2'

cmdline = "ffplay -i " + file + " -vf \"scale=-1:720," + FILTER + "\""

# Run
print '$', cmdline
os.system(cmdline)

