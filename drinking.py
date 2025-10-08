# This script queries the Overpass API to fetch drinking_water in the province of Bergamo

import requests
import hashlib
from urllib.parse import unquote

# Overpass API endpoint
OVERPASS_URL = "https://overpass-api.de/api/interpreter"

# Overpass QL query
query = """
[out:json];

(
area["name"="Bergamo"]["admin_level"=6]; // province
area["name"="Moggio"];
area["name"="Morterone"];
area["name"="Erve"];
area["name"="Carenno"];
area["name"="Lecco"]["admin_level"=8]; // city
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

def commons_filename_to_name(file_param: str) -> str:
    # Decodifico eventuali caratteri URL-encoded
    filename = unquote(file_param)

    # Rimuovo il prefisso "File:" se presente
    if filename.startswith("File:"):
        filename = filename[len("File:"):]
    
    # Wikimedia sostituisce gli spazi con underscore
    return filename.replace(" ", "_")

def commons_filename_to_hash(file_param: str) -> str:
    filename = commons_filename_to_name(file_param)

    # Calcolo l'MD5 del filename
    md5hash = hashlib.md5(filename.encode("utf-8")).hexdigest()

    # Primi caratteri per il percorso
    first_char = md5hash[0]
    first_two = md5hash[:2]

    # Costruisco l'URL diretto
    return f"{first_char}/{first_two}"


def fetch_data():
    print(f"Fetching...")
    response = requests.post(OVERPASS_URL, data={"data": query})
    response.raise_for_status()
    return response.json()

def save_direct(data, filename="drinking.js"):
    with open(filename, "w", encoding="utf-8") as f:
        f.write("var DRINKING = [\n")
        count = 0
        for element in data.get("elements", []):
            if "lat" in element and "lon" in element:
                amenity = element.get("tags", {}).get("amenity", "")
                if amenity == "drinking_water":
                        kind_str = "drinking";
                else:
                        kind_str = "spring";
                wikimedia_commons = element.get("tags", {}).get("wikimedia_commons", "")
                wikimedia_commons_str = wikimedia_commons.replace('"', '\\"')
                # avoid Category: and other kinds
                if not wikimedia_commons_str.startswith("File"):
                        wikimedia_commons_str = "";
                f.write(f'    {{ kind:"{kind_str}", lat:{element["lat"]}, lng:{element["lon"]}')
                if wikimedia_commons_str:
                        f.write(f', wiki:"{commons_filename_to_name(wikimedia_commons_str)}", hash:"{commons_filename_to_hash(wikimedia_commons_str)}"')
                f.write(f' }},\n')
                count += 1
        f.write("];\n")
    print(f"Saved {count} points to {filename}")

if __name__ == "__main__":
    data = fetch_data()
    save_direct(data)
