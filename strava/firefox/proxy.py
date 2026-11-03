import http.server
import socketserver
import http.client
import urllib.parse
import ssl
import re

# Estrae i cookie da una riga in stile Firefox log
def extract_cookies_from_log_line(filepath):
    with open(filepath, "r") as f:
        line = f.read().strip()
        # Modern nsHttp format: header="Cookie" value="..."
        match = re.search(r'header="Cookie"\s*value="([^"]+)"', line)
        if match:
            return match.group(1).strip()
        # cookie module format: D/cookie cookie string: ...
        match = re.search(r'cookie string:\s*(.*)', line, re.IGNORECASE)
        if match:
            return match.group(1).strip()
        # Standard HTTP log format: Cookie: ...
        match = re.search(r'Cookie:\s*(.*)', line)
        if match:
            return match.group(1).strip()
        # Raw cookie string fallback
        if "CloudFront-Key-Pair-Id" in line:
            return line.strip()
    return ""

# Carica i cookie da file
COOKIE_HEADER = extract_cookies_from_log_line("cookies.txt")

class ProxyHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        target_host = "content-a.strava.com"
        target_path = self.path

        parsed_url = urllib.parse.urlparse(target_path)
        conn = http.client.HTTPSConnection(target_host, context=ssl._create_unverified_context())

        headers = {
            "Host": target_host,
            "User-Agent": "QMapShack",
            "Cookie": COOKIE_HEADER
        }

        try:
            conn.request("GET", parsed_url.path + ("?" + parsed_url.query if parsed_url.query else ""), headers=headers)
            response = conn.getresponse()

            self.send_response(response.status)
            for key, value in response.getheaders():
                if key.lower() not in ["transfer-encoding", "content-encoding", "connection"]:
                    self.send_header(key, value)
            self.end_headers()
            self.wfile.write(response.read())
            conn.close()
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(str(e).encode())

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

def run_server():
    PORT = 8080
    with ReusableTCPServer(("", PORT), ProxyHandler) as httpd:
        print(f"Proxy in ascolto su http://localhost:{PORT}")
        httpd.serve_forever()

if __name__ == "__main__":
    run_server()
