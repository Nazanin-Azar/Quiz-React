import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div>
      <h1>Welcome to The React Quiz!</h1>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
