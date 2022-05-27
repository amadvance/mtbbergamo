rm -f ENCODE.sh
ls *.osp | xargs -n1 python ../encode.py
ls *.osp | awk '{ print "sh " gensub(".osp",".sh","g") }' > ENCODE.sh

