/^[[:space:]]*[[:digit:]]/{
	FILE=sprintf("%03u",$1) "." gensub(".*\\.","","g",tolower($2))
	print "if [[ ! -f " FILE " ]]; then"
	print "\tsleep 5"
	print "\tmtp-getfile " $1 " " FILE
	print "\tif [[ ! -f " FILE " ]]; then"
	print "\t\techo FAILED " FILE
	print "\t\texit 1"
	print "\tfi"
	print "fi"
}
