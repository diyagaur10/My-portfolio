
import { GoogleGenerativeAI } from "@google/generative-ai";


const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


const MY_PERSONAL_CONTEXT = `
Hi, I’m Diya Gaur, a passionate and dedicated final-year B.E. student at MBM University, Jodhpur, specializing in Artificial Intelligence and Data Science. With a strong foundation in programming, I’ve spent the last few years honing my skills in Python, JavaScript, and TypeScript, while also gaining hands-on experience in modern web development with technologies like React, Node.js, HTML, CSS, and Tailwind CSS. My journey in AI and machine learning has led me to work with tools like Scikit-learn, Pandas, and NumPy, and I’m currently exploring TensorFlow and deepening my understanding of MongoDB alongside SQL. I built my personal portfolio website using React and TypeScript to reflect my skills and showcase my work. I’m deeply interested in leveraging AI to solve real-world problems, especially in spaces where technology can make a meaningful impact. My hobbies are dancing, debating, and I am a Theatre artist and NCC cadet I consider myself a curious learner, a collaborative team player, and someone who is always excited about building new things and exploring innovative solutions.My cutu is V. My friends are lakshika vanshika meghna nakshatra and ayush. My fater's name is Giriraj gaur and mother's name is Shreekanta gaur. sisters name is Ditya gaur. I’m actively looking for opportunities where I can contribute, grow, and make a difference as an AI and software engineer. And if you ask me something I don’t know... well, that’s a secret. 😉;`

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
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" }); // Try this model

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