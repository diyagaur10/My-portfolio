import React, { useState } from "react";
import { Reveal } from "../components"; 
import contactPageImg from "../assets/contact-page.svg";


export {}; 

const KnowMeAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAskGemini = async () => {
    if (!question.trim()) {
      alert("Please type a question.");
      return;
    }
    setIsLoading(true);
    setAnswer(""); // Clear previous answer

    try {
      const response = await fetch('/api/ask-gemini', { // Adjust if your API route is different
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Failed to fetch answer:", error);
      setAnswer(`Sorry, I couldn't get an answer. ${error instanceof Error ? error.message : ''}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="know-me-ai"
      className="min-h-screen flex flex-col items-center justify-center relative bg-backgroundPrimary py-16 px-12" // Adjust styling as needed
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Reveal>
        <h2
          className="text-center text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary mb-12"
        >
          Ask About <span className="text-secondary">Me!</span>
        </h2>
      </Reveal>

      <div className="w-full max-w-3xl bg-neutral-800/50 backdrop-blur-md p-8 rounded-lg shadow-xl">
        <p className="text-center text-textSecondary text-lg mb-6">
          Curious to know more? Ask a question below!
        </p>
        <textarea
          placeholder="Type your question here..."
          className="w-full p-3 rounded bg-neutral-700 border border-neutral-600 text-textPrimary focus:outline-none focus:border-secondary h-32 mb-4"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={isLoading}
        />
        <button
          className="w-full bg-secondary text-white p-3 rounded hover:bg-opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleAskGemini}
          disabled={isLoading}
        >
          {isLoading ? "Thinking..." : "Ask Gemini"}
        </button>
        <div className="mt-6 p-4 border border-neutral-600 rounded bg-neutral-700/50 min-h-[100px] text-textSecondary">
          {isLoading && <p>Loading answer...</p>}
          {answer && !isLoading && (
            <p style={{ whiteSpace: "pre-wrap" }}>{answer}</p>
          )}
          {!answer && !isLoading && (
            <p className="text-neutral-500"> Answer will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowMeAI;