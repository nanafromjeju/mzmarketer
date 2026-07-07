import { useState } from "react";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { questions } from "./data/question";
import { getRandomQuestions } from "./utils/grade";

const QUESTIONS_PER_ROUND = 10;

export default function App() {
  const [screen, setScreen] = useState("home");
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);

  function handleStart() {
    setQuizQuestions(getRandomQuestions(questions, QUESTIONS_PER_ROUND));
    setScreen("loading");
  }

  function handleLoadingComplete() {
    setScreen("quiz");
  }

  function handleQuizComplete(finalScore) {
    setScore(finalScore);
    setScreen("result");
  }

  function handleRestart() {
    setScore(0);
    setScreen("home");
  }

  return (
    <div className="min-h-screen w-full bg-[url('/images/mo-background.png')] md:bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="w-full max-w-sm px-4">
        {screen === "home" && (
          <Home onStart={handleStart} totalQuestions={QUESTIONS_PER_ROUND} />
        )}
        {screen === "loading" && <Loading onComplete={handleLoadingComplete} />}
        {screen === "quiz" && (
          <Quiz questions={quizQuestions} onComplete={handleQuizComplete} />
        )}
        {screen === "result" && (
          <Result
            score={score}
            total={quizQuestions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
