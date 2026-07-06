import { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { getGrade, getRandomQuestions } from "./utils/grade";

// 한 판에 출제할 문제 개수 (전체 풀은 30개, 그중 이만큼만 랜덤 출제)
const QUESTIONS_PER_ROUND = 10;

// screen: "home" | "quiz" | "result"
export default function App() {
  const [screen, setScreen] = useState("home");
  const [score, setScore] = useState(0);
  // 실제 이번 판에 출제되는 문제 세트 (매 시작마다 새로 랜덤 추출)
  const [quizQuestions, setQuizQuestions] = useState([]);

  function handleStart() {
    setQuizQuestions(getRandomQuestions(getGrade, QUESTIONS_PER_ROUND));
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
