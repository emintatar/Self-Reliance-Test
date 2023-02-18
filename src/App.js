import React, { useState } from "react";
import "./App.css";
import questions from "./Data";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = (e) => {
    if (e.target.innerText === "often") {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setShowResult(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Self Reliance Test</h1>
        <h2>Current Score: {score}</h2>

        {showResult ? (
          <div className="result">
            <h1>Result</h1>
            <h2>
              {score} out of {questions.length} you are -{" "}
              {(score / questions.length) * 100}% - self-confident
            </h2>
            <button onClick={restartTest}>Restart</button>
          </div>
        ) : (
          <div className="questionCard">
            <h2>
              Question {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3>{questions[currentQuestion].text}</h3>
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li onClick={handleClick} key={option.id}>
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
