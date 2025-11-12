# This script reads a JSON file passed as a command-line argument,
# parses it, and prints its contents in a human-readable (pretty-printed) format.
# Compatible with both Python 2 and Python 3.

from __future__ import print_function
import json
import sys
from pprint import pprint

# Check that exactly one argument (the JSON filename) is provided
if len(sys.argv) != 2:
    print("Syntax: json FILE")
    sys.exit(0)

filename = sys.argv[1]

# Open and parse the JSON file
with open(filename, "r") as f:
    data = json.load(f)

# Pretty-print the parsed JSON data to standard output
pprint(data)
