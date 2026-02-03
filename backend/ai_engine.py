import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY missing")

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-1.5-flash")


def analyze_with_ai(data: dict) -> dict:
    prompt = f"""
You are a cybersecurity awareness assistant.

This is an EDUCATIONAL project.
Do NOT mention hacking, breaches, or illegal activity.

Input data:
{data}

Return:
- risk_level (Low / Medium / High)
- short_summary
- 4 security recommendations

Respond clearly.
"""

    response = model.generate_content(prompt)

    return {
        "risk_level": "Medium",
        "summary": "Simulated digital exposure analysis completed.",
        "ai_output": response.text,
        "note": "Educational use only. No real data accessed."
    }