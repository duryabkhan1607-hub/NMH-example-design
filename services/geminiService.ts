import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini API client
// Note: In a real production app, ensure this key is restricted or proxied via backend.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a compassionate, empathetic, and professional mental health assistant for "Nashville Mental Health". 
Your tone should be warm, soothing, and non-judgmental.
You are here to answer general questions about mental health wellness, coping strategies, and the services provided by Nashville Mental Health (Residential, Outpatient, Trauma, Anxiety, Depression).
Do not provide medical diagnoses. If someone expresses a crisis or self-harm, immediately provide crisis resources (988 Suicide & Crisis Lifeline) and advise them to call 911.
Keep responses concise (under 100 words) unless asked for more detail.
`;

export const sendWellnessMessage = async (message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Slightly creative but grounded
      },
    });

    return response.text || "I apologize, I'm having trouble finding the right words right now. Please call us directly at (629) 299‑1459.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to connect to the wellness assistant.");
  }
};