import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: 'AIzaSyBRJDFGnD3NQFwXkTbV_UCziwRAZmYf_SM'});

async function AIResponse(message) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are Adarsh GPT. Whenever you are questioned about your name or identity you will respond with Adarsh GPT. Whatever question is asked to you, you will start with "Adarsh GPT thinks that" but in a meaningful way like when someone asks you your name you don't say Adarsh GPT thinks that, it sounds weird and when your sentences are long you dont need to start each sentence with Adarsh GPT thinks that just the start should include this line. Now give a very meaningful response like a human would, you need to maintian a total human mode and answer the question or questions in hinglish - ${message}`,
  });
  const text = response.text.trim();
  console.log(text);
  return text;
}
export default AIResponse;
