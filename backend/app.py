from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_engine import analyze_with_ai

app = Flask(__name__)
CORS(app)  # allow frontend → backend communication


@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok",
        "service": "ShadowTrace Backend"
    })


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No input provided"}), 400

    try:
        result = analyze_with_ai(data)
        return jsonify(result)
    except Exception as e:
        return jsonify({
            "error": "Analysis failed",
            "details": str(e)
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)