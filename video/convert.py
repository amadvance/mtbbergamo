# Encode a flat video

import json
import sys
import os

# gen2
# - 1080px60

# gen3
# - 1080px30
# - FLAT "normalize=smoothing=6000"
# - GOPRO "normalize" removed

# gen4
# - force 2K7x30

# gen5
# - add sharpness

# gen6
# - a little less saturation

# gen7
# - 60fps (do not force 30fps on youtube)

# gen8
# - different quality settings

# gen9
# - removed various unused options

# Video Encoding
# "-pix_fmt yuvj420p" is for compatibility with LG TV
# "-preset veryfast" favor speed over size
# For LG TV also disable TrueMotion from Settings/Picture/Options
ENCODE_264="-preset veryfast -codec:v libx264 -crf 24 -maxrate 90M -bufsize 30M -pix_fmt yuvj420p"
ENCODE_265="-codec:v libx265 -crf 28 -pix_fmt yuvj420p"

# Audio encoding
ENCODE_AUDIO="-codec:a copy"

#######################################################
# Filter for FLAT color mode with EV=-1, SHARPNESS=LOW

# Stabilization (NOT USED)
VF_STAB="deshake=rx=64:ry=64"

# Normalize with adaptive transformation
VF_NORMALIZE="normalize=blackpt=black:whitept=white:smoothing=60:strength=1.0"

# Normalize with fixed transformation for a typical gopro (NOT USED)
VF_FIXED="curves=r='0.1/0 1/1':g='0.1/0 1/1':b='0.1/0 1/1'"

# Color SUNNY adjust for FLAT EV=-1: Increase saturation and contrast little, and decrease blue. No bright increase.
VF_FLAT_EV1="eq=contrast=1.1:saturation=1.5,curves=blue='0/0 0.5/0.45 1/1'"

# Color DARK adjust for FLAT EV=-1: Increase saturation, contrast and bright a little, and decrease blue
VF_FLAT_EV1_DARK="eq=brightness=0.1:contrast=1.2:saturation=1.5,curves=blue='0/0 0.5/0.45 1/1'"

# Color adjust for GOPRO: Increase saturation (NOT USED)
VF_GOPRO="eq=saturation=1.5"

# Sharp to add sharpness with the gopro LOW setting
VF_SHARP="unsharp=7:7:1.0"

# Blur to remove the sharpness of the gopro default HIGH setting (NOT USED)
VF_BLUR="unsharp=7:7:-0.5"

# Flip
VF_FLIP="hflip,vflip"

# Alternative filter for FLAT (NOT USED)
VF_LEVEL="colorlevels=rimin=0.1:gimin=0.1:rimin=0.1:rimax=0.7:gimax=0.7:bimax=0.7,eq=contrast=1.3:saturation=3,eq=saturation=1.3"
VF_PP="pp=al,eq=contrast=1.3:saturation=3,eq=saturation=1.3"

# Filter for generating a PARADE color analysis
VF_PARADE="format=rgb24,waveform=c=7:d=parade,scale=1200x512"

# Test frame position
POSITION="10"

if len(sys.argv) < 2:
	print "Syntax: convert [] FILE"
	sys.exit(1)

file = '';

# Default attributes
dark = False
test = False
play = False
flip = False

for arg in sys.argv[1:]:
	if arg == '/dark':
		dark = True
	elif arg == '/flip':
		flip = True
	elif arg == '/test':
		test = True
	elif arg == '/play':
		play = True
	elif arg[0] == '/':
		print "Unknown option " + arg
		sys.exit(1)
	else:
		file = arg

if len(file) == 0:
	print "File not specified"

name, extension = os.path.splitext(file)

# Tag for the filename
tag = 'YOUTUBE'

if test:
	if len(tag) != 0:
		tag += '-'
	tag += 'TEST'

if play:
	cmdline = 'ffplay'
else:
	cmdline = 'nice ffmpeg -y'

# Test
if test:
	cmdline += ' -ss ' + POSITION + ' -t 15'

# File
cmdline += ' -i ' + file

# Filter
cmdline += ' -vf "'

cmdline += VF_NORMALIZE

if dark:
	cmdline += ',' + VF_FLAT_EV1_DARK
else:
	cmdline += ',' + VF_FLAT_EV1

cmdline += ',' + VF_SHARP

if flip:
	cmdline += ',' + VF_FLIP

cmdline += '"'

if not play:
	cmdline += ' ' + ENCODE_264

	cmdline += ' ' + ENCODE_AUDIO

	# File
	cmdline += ' ' + name + '-' + tag + extension

# Run
print '$', cmdline
os.system(cmdline)

