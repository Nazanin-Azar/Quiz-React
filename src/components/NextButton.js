import { useQuiz } from "../context/QuizContext";

export default function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  console.log("Answer:", answer);
  console.log("Index:", index);
  console.log("numQuestions:", numQuestions);

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );

  return null;
}
