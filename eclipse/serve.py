"""
Eclipse Space Yerel Önizleme Sunucusu
Bu betik, indirilmiş www.eclipse.space sitesini yerel olarak çalıştırmak ve tarayıcıda açmak için kullanılır.

Kullanım:
    python serve.py [port]
    (Varsayılan port: 8082)
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8082
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def run():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print(f" Eclipse Space Yerel Sunucusu Baslatildi!")
        print(f" Adres: {url}")
        print(f" Dizin: {DIRECTORY}")
        print(" Sunucuyu durdurmak icin: Ctrl + C")
        print("=" * 60)
        try:
            webbrowser.open(url)
        except Exception:
            pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nSunucu kapatildi.")

if __name__ == "__main__":
    run()
