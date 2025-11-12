# -*- coding: utf-8 -*-
# This script processes a text file containing JavaScript-like dictionary entries, 
# each describing a route with attributes (including a GPX filename).  
# 
# For each line that starts with '{', it checks whether the line already includes 
# elevation information (elevation_gain, elevation_loss).  
# 
# If elevation data is missing:
#   - It loads the corresponding GPX file (found in 'www/gpx/').
#   - Extracts elevation data from all track points.
#   - Applies a 7-point median filter to smooth the elevation profile.
#   - Calculates the total elevation gain and loss.
#   - Updates the line by appending 'elevation_gain' and 'elevation_loss' fields.
# 
# Finally, it writes the updated lines back to the same file (or a new output file).
# 
# This script is compatible with both Python 2 and Python 3.

from __future__ import print_function  # ensures print() works in Python 2
import gpxpy
import gpxpy.gpx

# ----------------------------
# Helper functions
# ----------------------------

def manual_median_filter(data, window_size=7):
    """
    Apply a simple median filter to a list of numbers.
    It smooths out short-term fluctuations in elevation data.
    """
    half_window = window_size // 2
    filtered_data = []
    for i in range(len(data)):
        # Define window boundaries
        start = max(0, i - half_window)
        end = min(len(data), i + half_window + 1)
        window = sorted(data[start:end])
        median_idx = len(window) // 2
        # Compute the median manually
        if len(window) % 2 != 0:
            median = window[median_idx]
        else:
            median = (window[median_idx - 1] + window[median_idx]) / 2.0
        filtered_data.append(median)
    return filtered_data


def calculate_elevation_changes(elevations):
    """
    Compute total elevation gain and loss (in meters) from a sequence of elevations.
    Gain = sum of all positive ascents, Loss = sum of all descents.
    """
    gain = 0.0
    loss = 0.0
    for i in range(1, len(elevations)):
        diff = elevations[i] - elevations[i - 1]
        if diff > 0:
            gain += diff
        elif diff < 0:
            loss -= diff
    return gain, loss


def process_gpx_file(file_path):
    """
    Parse a GPX file, extract elevation data, filter it, and calculate gain/loss.
    Returns a tuple (gain, loss).
    """
    import io
    try:
        with io.open("www/gpx/" + file_path, 'r', encoding='utf-8') as gpx_file:
            gpx = gpxpy.parse(gpx_file)

        # Collect all elevation points from the GPX
        elevations = []
        for track in gpx.tracks:
            for segment in track.segments:
                for point in segment.points:
                    if point.elevation is not None:
                        elevations.append(point.elevation)

        if not elevations:
            return 0, 0  # No elevation data found

        # Smooth the elevation data and compute gain/loss
        filtered = manual_median_filter(elevations)
        return calculate_elevation_changes(filtered)

    except Exception as e:
        print("Error processing {}: {}".format(file_path, e))
        return 0, 0


def extract_file_and_check_elevation(line):
    """
    Extract the 'file' value from a line and check if elevation data is already present.
    Returns a tuple: (filename, has_elevation_data).
    """
    content = line.strip().strip('{},').split(',')
    file_value = None
    has_elevation = False

    for item in content:
        item = item.strip()
        if 'file:' in item:
            file_value = item.split('file:')[1].strip().strip("'\"")
        if 'elevation_gain:' in item:
            has_elevation = True

    return file_value, has_elevation


# ----------------------------
# Main processing function
# ----------------------------

def process_list_file(input_file, output_file):
    """
    Read an input file line by line, compute missing elevation data,
    and write the updated content to the output file.
    """
    import io

    with io.open(input_file, 'r', encoding='utf-8', errors='replace') as f:
        lines = f.readlines()

    output_lines = []
    for line in lines:
        stripped_line = line.strip()
        if stripped_line.startswith('{'):
            try:
                gpx_file, has_elevation = extract_file_and_check_elevation(stripped_line)

                if not gpx_file:
                    raise ValueError("Missing 'file' field in line")

                if has_elevation:
                    # Keep the original line if elevation data already exists
                    output_lines.append(line)
                else:
                    # Compute gain/loss and append the new data
                    gain, loss = process_gpx_file(gpx_file)
                    new_line = "{}{}, elevation_gain: {}, elevation_loss: {} }},\n".format(
                        stripped_line.rstrip(' },'), "", int(gain), int(loss)
                    )
                    output_lines.append(new_line)
            except Exception as e:
                print("Error processing line {}: {}".format(line, e))
                output_lines.append(line)
        else:
            output_lines.append(line)

    # Write updated lines back to file
    with io.open(output_file, 'w', encoding='utf-8') as f:
        for line in output_lines:
            f.write(line)

    print("List written to {}".format(output_file))


# ----------------------------
# Entry point
# ----------------------------
if __name__ == "__main__":
    input_file = 'tracks.js'
    output_file = 'tracks.js'
    process_list_file(input_file, output_file)
