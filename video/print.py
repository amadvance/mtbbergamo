import json
import sys

from pprint import pprint

if len(sys.argv) != 2:
	print "Syntax: json FILE"
	sys.exit(0)

file = sys.argv[1]

with open(file) as f:
    data = json.load(f)

pprint(data)

