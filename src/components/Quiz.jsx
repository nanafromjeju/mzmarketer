import { useState } from "react";
import ProgressBar from "./common/ProgressBar";

export default function Quiz({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  function handleSelect(optionIndex) {
    if (selected !== null) return; // 정답 확인 중 중복 클릭 방지

    setSelected(optionIndex);

    const isCorrect = optionIndex === currentQuestion.answerIndex;
    const nextScore = isCorrect ? score + 1 : score;
    setScore(nextScore);

    // 선택한 보기가 잠깐 표시된 뒤 다음 문제로 이동
    setTimeout(() => {
      if (isLast) {
        onComplete(nextScore);
      } else {
        setCurrentIndex((prev) => prev + 1);
        setSelected(null);
      }
    }, 500);
  }

  return (
    <div className="flex flex-col gap-6 px-6 py-8">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="rounded-xl border border-gray-200 p-5 text-center">
        <p className="font-medium">{currentQuestion.title}</p>
      </div>

      <div className="flex flex-col gap-2">
        {currentQuestion.options.map((option, index) => {
          const showResult = selected !== null;
          const isAnswer = index === currentQuestion.answerIndex;
          const isSelectedWrong = selected === index && !isAnswer;

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={[
                "text-left px-4 py-3 rounded-lg border text-sm transition-colors",
                showResult && isAnswer
                  ? "border-black bg-black text-white"
                  : isSelectedWrong
                    ? "border-gray-300 bg-gray-100 text-gray-400"
                    : "border-gray-200",
              ].join(" ")}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
