#!/usr/bin/env python3
"""
Servidor local para Asociación Cochabamba Basketball
Accede a http://localhost:8000 en tu navegador
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Cambia al directorio del proyecto
PROJECT_DIR = Path(__file__).parent.absolute()
os.chdir(PROJECT_DIR)

PORT = 8000
HANDLER = http.server.SimpleHTTPRequestHandler

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Agregar headers para evitar caché
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

def run_server():
    print(f"\n{'='*60}")
    print(f"🏀 Servidor Asociación Cochabamba Basketball")
    print(f"{'='*60}")
    print(f"📂 Directorio: {PROJECT_DIR}")
    print(f"🌐 URL: http://localhost:{PORT}")
    print(f"{'='*60}")
    print(f"💡 Presiona Ctrl+C para detener el servidor\n")
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            # Abre el navegador automáticamente
            webbrowser.open(f'http://localhost:{PORT}')
            print(f"✅ Servidor ejecutándose en http://localhost:{PORT}")
            print(f"🌐 Abriendo navegador...\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print(f"\n\n{'='*60}")
        print(f"⛔ Servidor detenido por el usuario")
        print(f"{'='*60}\n")
    except OSError as e:
        if e.errno == 48 or e.errno == 98:
            print(f"❌ Error: El puerto {PORT} ya está en uso")
            print(f"   Intenta cambiar el puerto en el código o ejecuta:")
            print(f"   netstat -ano | findstr :{PORT}")
        else:
            print(f"❌ Error: {e}")

if __name__ == "__main__":
    run_server()
