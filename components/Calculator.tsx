"use client";

import { useState } from "react";
import { stepAndNotebook } from "../utils/calc";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [output, setOutput] = useState("");

  const handleCalculate = () => {
    if (!expression) return;
    const result = stepAndNotebook(expression);
    setOutput(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
          Learning
        </h1>

        {/* Input */}
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Enter expression e.g. 2+3*4-6/2"
          className="w-full p-4 text-xl border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent mb-6"
        />

        {/* Button */}
        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transform transition-all shadow-lg mb-8"
        >
          Calculate
        </button>

        {/* Output */}
        {output && (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 shadow-inner font-mono text-gray-800 whitespace-pre-wrap overflow-auto max-h-96">
            {output}
          </div>
        )}

        {/* Footer */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Step-by-step + Notebook-style calculator
        </p>
      </div>
    </div>
  );
}
