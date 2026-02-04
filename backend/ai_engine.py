import google.generativeai as genai


def analyze_with_ai(data: dict, api_key: str) -> dict:
    """
    Analyze input data using Gemini AI.
    This function is pure: no env loading, no global state.
    """

    if not api_key:
        raise RuntimeError("GEMINI_API_KEY not provided to AI engine")

    # Configure Gemini (safe to call multiple times)
    genai.configure(api_key=api_key)

    model = genai.GenerativeModel("gemini-1.5-flash")

    prompt = f"""
You are a cybersecurity awareness assistant.

This is an EDUCATIONAL project.
Do NOT mention hacking, breaches, or illegal activity.

Input data:
{data}

Return the response strictly in plain text with:
- risk_level (Low / Medium / High)
- short_summary
- 4 security recommendations

Respond clearly and concisely.
"""

    response = model.generate_content(prompt)

    return {
        "risk_level": "Medium",
        "short_summary": "Simulated digital exposure analysis completed.",
        "ai_output": response.text,
        "note": "Educational use only. No real data accessed."
    }