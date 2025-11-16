# -*- coding: utf-8 -*-
# This script queries the Overpass API to fetch electric vehicle charging stations
# in specific areas of the province of Bergamo, Italy.
# It saves the results to a JavaScript file ("charging.js") in a format usable by web maps.
# Compatible with both Python 2 and Python 3.

from __future__ import print_function  # Enables print() function in Python 2
import requests
import io

# Overpass API endpoint (used to query OpenStreetMap data)
OVERPASS_URL = "https://overpass-api.de/api/interpreter"

# Overpass QL query defining the target geographic areas and data filters
# This query retrieves charging stations (especially for bicycles and "Pradella" brand)
# within the province of Bergamo and nearby municipalities.
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
  node["amenity"="charging_station"]["brand"~"Pradella",i](area.bergamo);
  node["amenity"="charging_station"]["bicycle"="yes"](area.bergamo);
);
out center;
"""

def fetch_data():
    """Send the Overpass QL query and return the parsed JSON response."""
    print("Fetching data from Overpass API...")
    response = requests.post(OVERPASS_URL, data={"data": query})
    response.raise_for_status()
    return response.json()

def save_direct(data, filename="charging.js"):
    """
    Save the fetched data into a JavaScript file.
    Each charging station is written as an object containing:
    - latitude (lat)
    - longitude (lng)
    - brand name
    """
    # Use io.open for Python 2/3 compatibility with UTF-8
    with io.open(filename, "w", encoding="utf-8") as f:
        f.write(u"var CHARGING = [\n")
        count = 0
        for element in data.get("elements", []):
            if "lat" in element and "lon" in element:
                brand = element.get("tags", {}).get("brand", u"")
                brand_str = brand.replace('"', '\\"')  # Escape quotes for JS
                f.write(u'    {{ lat:{}, lng:{}, brand:"{}" }},\n'.format(
                    element["lat"], element["lon"], brand_str))
                count += 1
        f.write(u"];\n")
    print("Saved {} points to {}".format(count, filename))

if __name__ == "__main__":
    data = fetch_data()
    save_direct(data)
