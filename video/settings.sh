# Generation to mark difference in settings
GENERATION=gen4

# gen2
# - 1080px60

# gen3
# - 1080px30
# - FLAT "normalize=smoothing=6000"
# - GOPRO "normalize" removed

# gen4
# - 2K7x30

# Video Encoding
# "-r 30" - Frame rate at 30
# "-s hd1080"
# "-s 2704x1520" - Scale 2K7
# "-s 3840x2160" - Scale 4K (scaler added at the end of the filters list)
# "-pix_fmt yuvj420p" is for compatibility with LG TV
# For LG TV also disable TrueMotion from Settings/Picture/Options
ENCODE_264="-r 30 -s 2704x1520 -preset slow -codec:v libx264 -crf 26 -pix_fmt yuvj420p"
ENCODE_264_NATIVE="-r 30 -preset slow -codec:v libx264 -crf 26 -pix_fmt yuvj420p"
ENCODE_265_NATIVE="-codec:v libx265 -crf 28 -pix_fmt yuvj420p"

# Audio encoding
ENCODE_AUDIO="-codec:a copy"

#######################################################
# Filter for FLAT color mode with EV=-1, SHARPNESS=LOW

# Stabilization
VF_STAB=deshake=rx=64:ry=64

# Normalize
VF_NORMALIZE=normalize=blackpt=black:whitept=white:smoothing=6000

# Reduce blue
VF_CURVE=curves=blue='0/0 0.5/0.45 1/1':red='0/0 0.5/0.55 1/1'

# Increase saturation, contrast and bright a little
VF_FLAT=eq=brightness=0.1:contrast=1.3:saturation=3

#######################################################
# Filter for FLAT color mode with EV=0, SHARPNESS=HIGH

# Normalize and increase saturation and contrast
VF_EV0=normalize=blackpt=black:whitept=white:smoothing=6000,eq=contrast=1.3:saturation=3

#######################################################
# Filter for GOPRO color mode

# Increase saturation
VF_GOPRO=eq=saturation=1.4

# Alternative filter for FLAT
VF_LEVEL=colorlevels=rimin=0.1:gimin=0.1:rimin=0.1:rimax=0.7:gimax=0.7:bimax=0.7,eq=contrast=1.3:saturation=3,eq=saturation=1.3
VF_PP=pp=al,eq=contrast=1.3:saturation=3,eq=saturation=1.3

# Filter for generating a PARADE color analysis
VF_PARADE=format=rgb24,waveform=c=7:d=parade,scale=1200x512

# Test frame position
POSITION=60

