# This script processes a list of dictionary-like strings stored in a text
# file, where each line represents a route with attributes including a 'file'
# field pointing to a GPX file.
#
# For each line starting with '{', it checks if an 'elevation' field exists.
# If present, the line is copied unchanged.  If absent, it:
# - Loads the specified GPX file and extracts elevation data.
# - Applies a 7-point median filter to smooth the elevation data.
# - Computes the total elevation gain and loss from the filtered data.
# - Adds the sum of gain and loss as an integer 'elevation' to the line.
#
# The updated list is then written to an output file.

import gpxpy
import gpxpy.gpx

# Function to compute a 7-point median filter manually in pure Python
def manual_median_filter(data, window_size=7):
    half_window = window_size // 2
    filtered_data = []
    
    for i in range(len(data)):
        # Define the window boundaries
        start = max(0, i - half_window)
        end = min(len(data), i + half_window + 1)
        
        # Extract the window and compute the median
        window = sorted(data[start:end])
        median_idx = len(window) // 2
        if len(window) % 2 != 0:
            median = window[median_idx]
        else:
            median = (window[median_idx-1] + window[median_idx]) / 2
        
        filtered_data.append(median)
    
    return filtered_data

# Function to calculate elevation gain and loss from a list of elevations
def calculate_elevation_changes(elevations):
    gain = 0
    loss = 0
    for i in range(1, len(elevations)):
        diff = elevations[i] - elevations[i-1]
        if diff > 0:
            gain += diff
        elif diff < 0:
            loss -= diff
    return gain, loss

# Function to process a single GPX file and return gain+loss sum
def process_gpx_file(file_path):
    try:
        with open("www/gpx/" + file_path, 'r') as gpx_file:
            gpx = gpxpy.parse(gpx_file)
        
        # Extract elevation data from GPX points
        elevations = []
        for track in gpx.tracks:
            for segment in track.segments:
                for point in segment.points:
                    if point.elevation is not None:
                        elevations.append(point.elevation)
        
        if not elevations:
            return 0, 0  # Return 0 if no elevation data
        
        # Apply manual 7-point median filter
        filtered_elevations = manual_median_filter(elevations)
        
        # Calculate elevation gain and loss
        return calculate_elevation_changes(filtered_elevations)
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return 0, 0

# Function to manually parse the file field and check for elevation
def extract_file_and_check_elevation(line):
    # Remove leading '{', trailing '}', and split by commas
    content = line.strip().strip('{},').split(',')
    file_value = None
    has_elevation = False
    
    for item in content:
        item = item.strip()
        if 'file:' in item:
            # Extract the value after 'file:'
            file_value = item.split('file:')[1].strip().strip("'\"")
        if 'elevation_gain:' in item:
            has_elevation = True
    
    return file_value, has_elevation

# Main script
def process_list_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8', errors='replace') as f:
        lines = f.readlines()
    
    output_lines = []
    for line in lines:
        stripped_line = line.strip()
        if stripped_line.startswith('{'):
            try:
                # Extract the file field and check for elevation
                gpx_file, has_elevation = extract_file_and_check_elevation(stripped_line)
                if not gpx_file:
                    raise ValueError("No 'file' field found in line")
                
                if has_elevation:
                    # If elevation exists, keep the line as is
                    output_lines.append(line)
                else:
                    # If no elevation, compute it and append
                    gain, loss = process_gpx_file(gpx_file)
                    new_line = f"{stripped_line.rstrip(' },')}, elevation_gain: {int(gain)}, elevation_loss: {int(loss)} }},\n"
                    output_lines.append(new_line)
            except Exception as e:
                print(f"Error processing line {line}: {e}")
                output_lines.append(line)  # Keep original line if error occurs
        else:
            output_lines.append(line)  # Keep non-dictionary lines unchanged

    # Write the updated list to output file
    with open(output_file, 'w', encoding='utf-8') as f:
        for line in output_lines:
            f.write(line)  # Write lines as-is, preserving trailing newlines

if __name__ == "__main__":
    input_file = 'tracks.js'
    output_file = 'tracks.js'
    process_list_file(input_file, output_file)
    print(f"List written to {output_file}")
