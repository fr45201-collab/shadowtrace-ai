from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from pathlib import Path
import os

# --------------------------------------------------
# Load environment variables (LOCAL ONLY)
# --------------------------------------------------
env_path = Path(__file__).resolve().parent / ".env.local"
if env_path.exists():
    load_dotenv(env_path)

# --------------------------------------------------
# Environment variables
# --------------------------------------------------
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
PORT = int(os.getenv("PORT", 10000))  # Render provides PORT

# --------------------------------------------------
# App setup
# --------------------------------------------------
app = Flask(__name__)
CORS(app)  # Allow frontend → backend communication

# --------------------------------------------------
# Health check route
# --------------------------------------------------
@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok",
        "service": "ShadowTrace Backend"
    })

# --------------------------------------------------
# Analyze route
# --------------------------------------------------
@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No input provided"}), 400

    if not GEMINI_API_KEY:
        return jsonify({
            "error": "GEMINI_API_KEY not configured on server"
        }), 500

    try:
        # Lazy import to avoid startup issues
        from ai_engine import analyze_with_ai

        result = analyze_with_ai(data, GEMINI_API_KEY)
        return jsonify(result)

    except Exception as e:
        return jsonify({
            "error": "Analysis failed",
            "details": str(e)
        }), 500

# --------------------------------------------------
# Local development entry point
# (Gunicorn ignores this on Render)
# --------------------------------------------------
if __name__ == "__main__":
    print("🚀 ShadowTrace Backend starting...")
    print(f"🔑 GEMINI_API_KEY loaded: {'YES' if GEMINI_API_KEY else 'NO'}")
    print(f"🌐 Running on port {PORT}")

    app.run(host="0.0.0.0", port=PORT, debug=True)