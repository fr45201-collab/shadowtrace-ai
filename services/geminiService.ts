
import { GoogleGenAI, Type } from "@google/genai";
import { ScanResult, RiskLevel } from "../types";

export async function getPersonalizedRecommendations(result: ScanResult): Promise<string[]> {
  // Always use the required initialization pattern with process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Using gemini-3-pro-preview for tasks requiring professional cybersecurity reasoning.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `User Target: ${result.target}
Exposure Score: ${result.score}/100
Risk Level: ${result.riskLevel}
Findings: ${result.findings.map(f => f.category + ': ' + f.description).join(', ')}

Provide exactly 4 professional, concise, and actionable cybersecurity recommendations for this specific profile.
Format as a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        },
        systemInstruction: "You are a professional cybersecurity consultant at ShadowTrace. Your tone is serious, expert, and helpful. You provide specific, non-obvious advice to improve digital safety based on exposure scores."
      }
    });

    // Access the .text property directly as it is a getter, not a method. Use .trim() for safer parsing.
    const jsonStr = (response.text || '[]').trim();
    const recommendations = JSON.parse(jsonStr);
    return Array.isArray(recommendations) ? recommendations : [];
  } catch (error) {
    console.error("Gemini Error:", error);
    return [
      "Enable hardware-based 2FA (like Yubikey) for your primary email.",
      "Audit third-party application permissions in your Google/Social accounts.",
      "Use a reputable password manager with unique 20+ character passwords.",
      "Consider using a data removal service to scrub public record sites."
    ];
  }
}
