# -*- coding: utf-8 -*-
# This script queries the Overpass API (from OpenStreetMap) to fetch locations of drinking water
# sources in the province of Bergamo, Italy (including nearby towns such as Lecco, Erve, Carenno, etc.).
# The data is then written to a JavaScript file ("drinking.js") in a structured array format
# that can be directly used by web maps or visualization tools.
# Compatible with both Python 2 and Python 3.

from __future__ import print_function  # Ensures print() works in Python 2
import requests
import hashlib
import io

# For compatibility between Python 2 and 3 (urllib.parse differs)
try:
    from urllib.parse import unquote
except ImportError:  # Python 2 fallback
    from urllib import unquote

# Overpass API endpoint (used to query OpenStreetMap data)
OVERPASS_URL = "https://overpass-api.de/api/interpreter"

# Overpass QL query definition:
# - Searches for nodes (points) within the province of Bergamo and nearby towns
# - Includes:
#   * Drinking water sources (amenity=drinking_water)
#   * Animal watering places that provide drinkable water
#   * Natural springs marked as drinkable
query = u"""
[out:json];

(
// Bergamo
area["name"="Bergamo"]["admin_level"=6]; // Province
// Lecco
area["name"="Moggio"];
area["name"="Morterone"];
area["name"="Erve"];
area["name"="Carenno"];
area["name"="Lecco"]["admin_level"=8]; // City
// Brescia
area["name"="Angolo Terme"];
)->.bergamo;

(
    // Drinking Water
    node["amenity"="drinking_water"]["drinking_water:legal"!="no"]["drinking_water"!="no"](area.bergamo);
    // Animal Watering Place
    node["amenity"="watering_place"]["drinking_water"="yes"](area.bergamo);
    // Spring
    node["natural"="spring"]["drinking_water"]["drinking_water"!="no"](area.bergamo);
);
out center;
"""

def commons_filename_to_name(file_param):
    """
    Convert a Wikimedia Commons file reference to a normalized filename.
    Handles URL-encoded characters, removes 'File:' prefix, and replaces spaces with underscores.
    Example: 'File:Mountain spring.jpg' → 'Mountain_spring.jpg'
    """
    filename = unquote(file_param)
    if filename.startswith("File:"):
        filename = filename[len("File:"):]
    return filename.replace(" ", "_")

def commons_filename_to_hash(file_param):
    """
    Compute the path structure used by Wikimedia Commons for file storage.
    Uses MD5 hash of the filename to generate a path such as 'a/ab'.
    Example: 'Mountain_spring.jpg' → 'a/ab'
    """
    filename = commons_filename_to_name(file_param)
    md5hash = hashlib.md5(filename.encode("utf-8")).hexdigest()
    first_char = md5hash[0]
    first_two = md5hash[:2]
    return "{}/{}".format(first_char, first_two)

def fetch_data():
    """Send the Overpass QL query and return the JSON response."""
    print("Fetching data from Overpass API...")
    response = requests.post(OVERPASS_URL, data={"data": query})
    response.raise_for_status()
    return response.json()

def save_direct(data, filename="drinking.js"):
    """
    Save the retrieved data into a JavaScript file.
    Each entry includes:
      - kind: 'drinking' or 'spring'
      - coordinates (lat, lng)
      - optional Wikimedia Commons image reference (filename + hash path)
    """
    with io.open(filename, "w", encoding="utf-8") as f:
        f.write(u"var DRINKING = [\n")
        count = 0
        for element in data.get("elements", []):
            if "lat" in element and "lon" in element:
                amenity = element.get("tags", {}).get("amenity", u"")
                kind_str = "drinking" if amenity == "drinking_water" else "spring"

                wikimedia_commons = element.get("tags", {}).get("wikimedia_commons", u"")
                wikimedia_commons_str = wikimedia_commons.replace('"', '\\"')

                # Ignore categories or invalid references
                if not wikimedia_commons_str.startswith("File"):
                    wikimedia_commons_str = u""

                # Write base entry (kind, lat, lng)
                f.write(u'    {{ kind:"{}", lat:{}, lng:{}'.format(
                    kind_str, element["lat"], element["lon"]))

                # If Wikimedia file is present, include extra info
                if wikimedia_commons_str:
                    f.write(u', wiki:"{}", hash:"{}"'.format(
                        commons_filename_to_name(wikimedia_commons_str),
                        commons_filename_to_hash(wikimedia_commons_str)
                    ))
                f.write(u" },\n")
                count += 1

        f.write(u"];\n")
    print("Saved {} points to {}".format(count, filename))

if __name__ == "__main__":
    data = fetch_data()
    save_direct(data)
