// Example for a Node.js based serverless function (e.g., api/ask-gemini.js)
// This file would typically go into an 'api' directory in the root of your project
// if you are deploying to a platform like Vercel or Netlify.

// You'll need to install the Gemini SDK if you haven't: npm install @google/generative-ai
import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Retrieve your API key from environment variables.
//    On your deployment platform (Vercel, Netlify, etc.), you'll set
//    GEMINI_API_KEY to the value of your REACT_APP_GEMINI_API_KEY.
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// 2. DEFINE YOUR CONTEXT HERE
const MY_PERSONAL_CONTEXT = `
Diya Gaur is a passionate and dedicated final-year B.E. student at MBM University, Jodhpur,
specializing in Artificial Intelligence and Data Science. She possesses a strong foundation
in programming languages such as Python, JavaScript, and TypeScript, and has hands-on
experience with web development technologies including React and Node.js.

Key Skills:
- Programming: Python, JavaScript, TypeScript, Java (basic)
- Web Development: React, Node.js, HTML, CSS, Tailwind CSS
- AI/ML: Scikit-learn, Pandas, NumPy, basic understanding of TensorFlow
- Databases: SQL (basic), MongoDB (learning)
- Tools: Git, VS Code

Projects:
- Portfolio Website (this site): Built with React, TypeScript, and Tailwind CSS.
- [Mention another project if you have one, e.g., "AI-powered Chatbot for X"]

Interests & Goals:
Diya is keenly interested in leveraging AI to solve real-world problems and is always
eager to learn new technologies. She is actively seeking opportunities where she can
contribute her skills and grow as an AI and software engineer. She is a proactive
problem-solver and a collaborative team player.

Instructions for the AI:
Based *only* on the context provided above about Diya Gaur, answer the user's question.
If the answer cannot be found in the context, respond with "I'm sorry, I don't have that specific information about Diya based on the context I've been given."
---
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  if (!GEMINI_API_KEY) {
    console.error("Gemini API key is not configured on the server.");
    return res.status(500).json({ error: "API key not configured server-side." });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required." });
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Or your preferred model

    const prompt = `${MY_PERSONAL_CONTEXT}User's Question: ${question}\nAnswer:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ answer: text });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to get an answer from the AI." });
  }
}