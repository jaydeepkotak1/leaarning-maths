"use client";

import { useState } from "react";
import { stepAndNotebook } from "../utils/calc";
import "../styles/globals.css";

export default function CalculatorPage() {
  const [expression, setExpression] = useState("");
  const [output, setOutput] = useState("");

  const handleCalculate = () => {
    if (!expression) return;
    const result = stepAndNotebook(expression);
    setOutput(result);
  };

  return (
    <div>
      <div className="calculator-container">
        <div className="calculator-card">
          <h1>Learning Maths</h1>

          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Enter expression e.g. 2+3*4-6/2"
          />

          <button onClick={handleCalculate}>Calculate</button>

          {output && (
            <div className="output-container">
              <div className="output-card step-card">
                <h2>Step by Step Solution</h2>
                <pre>{output.split("--- Notebook Style ---")[0]}</pre>
              </div>

              <div className="output-card notebook-card">
                <h2>Notebook Solution</h2>
                <pre>{output.split("--- Notebook Style ---")[1]}</pre>
              </div>
            </div>
          )}
          <p className="footer">Developed by Jaydeep Kotak</p>
        </div>
      </div>
    </div>
  );
}
