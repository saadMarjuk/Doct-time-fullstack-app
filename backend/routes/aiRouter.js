const express = require("express");
const router = express.Router();
const path = require("path");

// Load environment variables from .env.ai
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env.ai") });

console.log("GROQ_API_KEY loaded:", process.env.GROQ_API_KEY ? "YES" : "NO");

const { OpenAI } = require("openai");

// Configure Groq client (OpenAI-compatible API)
const groqClient = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// ✅ Match your frontend: /api/ai/suggest-doctor
router.post("/suggest-doctor", async (req, res) => {
  console.log("Incoming request:", req.body);
  try {
    const { symptom } = req.body;
    if (!symptom) {
      return res.status(400).json({ error: "No symptom provided" });
    }

    // Use a supported Groq model
    const response = await groqClient.chat.completions.create({
      model: "llama-3.1-8b-instant", // ✅ supported model
      messages: [
        {
          role: "user",
          content: `Suggest a doctor for these symptoms: ${symptom}. Respond concisely with only the type of specialist.`,
        },
      ],
      max_tokens: 100,
      temperature: 0.1,
    });

    // Extract suggestion
    const suggestion =
      response.choices?.[0]?.message?.content?.trim() ||
      "General Practitioner (fallback: no AI response)";

    console.log("Groq AI response:", suggestion);
    res.json({ suggestion });
  } catch (err) {
    console.error("Groq AI request failed:", err);
    res.json({ suggestion: "General Practitioner (fallback due to error)" });
  }
});

module.exports = router;
