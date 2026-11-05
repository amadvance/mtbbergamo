# From https://stackoverflow.com/questions/5132749/diff-an-image-using-imagemagick
compare -metric AE -fuzz 10% $1 $2 -compose src $3

echo Red is where the image is different

