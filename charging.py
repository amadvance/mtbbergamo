# This script queries the Overpass API to fetch charging stations in the province of Bergamo

import requests

# Overpass API endpoint
OVERPASS_URL = "https://overpass-api.de/api/interpreter"

# Overpass QL query
query = """
[out:json];
area["boundary"="administrative"]["name"="Bergamo"]["admin_level"="6"]->.bergamo;
(
  node["amenity"="charging_station"]["brand"~"Pradella",i](area.bergamo);
  node["amenity"="charging_station"]["bicycle"="yes"](area.bergamo);
);
out center;
"""

def fetch_data():
    print(f"Fetching...")
    response = requests.post(OVERPASS_URL, data={"data": query})
    response.raise_for_status()
    return response.json()

def save_direct(data, filename="charging.js"):
    with open(filename, "w", encoding="utf-8") as f:
        f.write("var CHARGING = [\n")
        count = 0
        for element in data.get("elements", []):
            if "lat" in element and "lon" in element:
                brand = element.get("tags", {}).get("brand", "")
                brand_str = brand.replace('"', '\\"')
                f.write(f'    {{ lat:{element["lat"]}, lng:{element["lon"]}, brand:"{brand_str}" }},\n')
                count += 1
        f.write("];\n")
    print(f"Saved {count} points to {filename}")

if __name__ == "__main__":
    data = fetch_data()
    save_direct(data)
