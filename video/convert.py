import json
import sys
import os

# Generation to mark difference in settings
GENERATION=5

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

# Video Encoding
# "-pix_fmt yuvj420p" is for compatibility with LG TV
# For LG TV also disable TrueMotion from Settings/Picture/Options
ENCODE_264="-preset slow -codec:v libx264 -crf 26 -pix_fmt yuvj420p"
ENCODE_265="-codec:v libx265 -crf 28 -pix_fmt yuvj420p"

# Audio encoding
ENCODE_AUDIO="-codec:a copy"

#######################################################
# Filter for FLAT color mode with EV=-1, SHARPNESS=LOW

# Stabilization
VF_STAB="deshake=rx=64:ry=64"

# Normalize with adaptive transformation
VF_NORMALIZE="normalize=blackpt=black:whitept=white:smoothing=6000"

# Normalize with fixed transformation for a typical gopro
VF_FIXED="curves=r='0.1/0 1/1':g='0.1/0 1/1':b='0.1/0 1/1'"

# Color adjust for FLAT EV=-1: Increase saturation, contrast and bright a little, and decrease blue
VF_FLAT_EV1="eq=brightness=0.1:contrast=1.2:saturation=2.0,curves=blue='0/0 0.5/0.45 1/1'"

# Color adjust for FLAT EV=0: Normalize and increase saturation and contrast, a little more contranst than EV=-1
VF_FLAT_EV0="eq=contrast=1.3:saturation=2.0"

# Color adjust for GOPRO: Increase saturation
VF_GOPRO="eq=saturation=1.8"

# Bright a little
VF_BRIGHT="eq=brightness=0.1:contrast=1.3"

# Blur to remove the sharpness of the gopro default HIGH setting
VF_BLUR="unsharp=7:7:-0.5"

# Sharp to add sharpness with the gopro LOW setting
VF_SHARP="unsharp=7:7:1.0"

# Flip
VF_FLIP="hflip,vflip"

# Alternative filter for FLAT
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
color = 'flat'
sharpness = 'low'
resolution = '2k7'
ev = -1
shaky = False
panning = False
dark = False
test = False
play = False
flip = False
youtube = True

for arg in sys.argv[1:]:
	if arg == '/gopro':
		color = 'gopro'
	elif arg == '/ev0':
		ev = 0
	elif arg == '/sharphigh':
		sharpness = 'high'
	elif arg == '/sharpmed':
		sharpness = 'med'
	elif arg == '/4k':
		resolution = '4k'
	elif arg == '/shaky':
		shaky = True
	elif arg == '/panning':
		panning = True
	elif arg == '/dark':
		dark = True
	elif arg == '/flip':
		flip = True
	elif arg == '/test':
		test = True
	elif arg == '/play':
		play = True
	elif arg == '/best':
		youtube = False
	elif arg[0] == '/':
		print "Unknown option " + arg
		sys.exit(1)
	else:
		file = arg

if len(file) == 0:
	print "File not specified"

name, extension = os.path.splitext(file)

# Tag for the filename
tag = ''
if youtube:
	tag += 'YOUTUBE'
if test:
	if len(tag) != 0:
		tag += '-'
	tag += 'TEST'

if play:
	cmdline = 'ffplay'
else:
	cmdline = 'ffmpeg -y'

# Test
if test:
	cmdline += ' -ss ' + POSITION + ' -t 15'

# File
cmdline += ' -i ' + file

# On YOUTUBE force 30 FPS
if not play and youtube:
	cmdline += ' -r 30'

# Filter
cmdline += ' -vf "'

if color == 'flat':
	if panning:
		cmdline += VF_FIXED
	else:
		cmdline += VF_NORMALIZE
	if ev == 0:
		cmdline += ',' + VF_FLAT_EV0
	else:
		cmdline += ',' + VF_FLAT_EV1
	if dark:
		cmdline += ',' + VF_BRIGHT
else:
	cmdline += VF_GOPRO

if shaky:
	cmdline += ',' + VF_STAB

if sharpness == 'high':
	cmdline += ',' + VF_BLUR
elif sharpness == 'low':
	cmdline += ',' + VF_SHARP

if flip:
	cmdline += ',' + VF_FLIP

cmdline += '"'

if not play:
	# On YOUTUBE increase the resolution to get more bandwidth allocation and for VP9 conversion
	# Scaler (automatically added at the end of the filters list)
	# "-s hd1080"
	# "-s 2704x1520" - Scale 2K7
	# "-s 3840x2160" - Scale 4K
	if youtube:
		if resolution == '4k':
			cmdline += ' -s 3840x2160'
		else:
			cmdline += ' -s 2704x1520'

	cmdline += ' ' + ENCODE_264

	cmdline += ' ' + ENCODE_AUDIO

	# File
	cmdline += ' ' + name + '-' + tag + extension

# Run
print '$', cmdline
os.system(cmdline)

