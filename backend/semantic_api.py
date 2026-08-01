import json
import os
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


CUBE_API_URL = os.getenv("CUBE_API_URL", "http://localhost:4000/cubejs-api/v1/load")
CUBE_API_TOKEN = os.getenv("CUBE_API_TOKEN", "")


def json_response(handler, status, payload):
    body = json.dumps(payload, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


class SemanticApiHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path != "/health":
            json_response(self, 404, {"ok": False, "error": "not_found"})
            return

        json_response(self, 200, {"ok": True})

    def do_POST(self):
        if self.path != "/query":
            json_response(self, 404, {"ok": False, "error": "not_found"})
            return

        content_length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_length)

        try:
            query = json.loads(raw_body.decode("utf-8"))
        except json.JSONDecodeError:
            json_response(self, 400, {"ok": False, "error": "invalid_json"})
            return

        if not isinstance(query, dict):
            json_response(self, 400, {"ok": False, "error": "query_must_be_object"})
            return

        request_body = json.dumps({"query": query}, separators=(",", ":")).encode("utf-8")
        headers = {"Content-Type": "application/json"}
        if CUBE_API_TOKEN:
            headers["Authorization"] = CUBE_API_TOKEN

        request = urllib.request.Request(
            CUBE_API_URL,
            data=request_body,
            headers=headers,
            method="POST",
        )

        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                payload = json.loads(response.read().decode("utf-8"))
        except urllib.error.HTTPError as error:
            try:
                payload = json.loads(error.read().decode("utf-8"))
            except json.JSONDecodeError:
                payload = {"error": "cube_http_error", "status": error.code}
            json_response(self, error.code, {"ok": False, "cube": payload})
            return
        except (urllib.error.URLError, TimeoutError):
            json_response(self, 502, {"ok": False, "error": "cube_unavailable"})
            return
        except json.JSONDecodeError:
            json_response(self, 502, {"ok": False, "error": "cube_returned_non_json"})
            return

        json_response(self, 200, {"ok": True, "data": payload.get("data", []), "meta": payload.get("annotation", {})})

    def log_message(self, format, *args):
        return


def main():
    host = os.getenv("SEMANTIC_API_HOST", "127.0.0.1")
    port = int(os.getenv("SEMANTIC_API_PORT", "8000"))
    server = ThreadingHTTPServer((host, port), SemanticApiHandler)
    print(f"Semantic API listening on http://{host}:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
