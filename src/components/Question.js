import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

export default function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  if (!question) return <p>No question available</p>;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
