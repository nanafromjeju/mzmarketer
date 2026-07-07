import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProgressBar from "./common/ProgressBar";

export default function Quiz({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(() =>
    Array(questions.length).fill(null),
  );

  const currentQuestion = questions[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;

  function handleSelect(optionIndex) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  }

  function handlePrev() {
    if (!isFirst) setCurrentIndex((prev) => prev - 1);
  }

  function handleNext() {
    if (isLast) {
      // 안 푼 문제(null)는 정답 인덱스와 절대 같을 수 없어서 자동으로 오답 처리됨
      const score = answers.reduce(
        (acc, answer, index) =>
          acc + (answer === questions[index].answerIndex ? 1 : 0),
        0,
      );
      onComplete(score);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-col gap-6 py-8">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="rounded-xl border border-gray-light bg-white p-5 text-center">
        <p className="font-t text-black text-lg">{currentQuestion.title}</p>
      </div>

      <div className="flex flex-col gap-2">
        {currentQuestion.options.map((option, index) => {
          const isSelected = answers[currentIndex] === index;
          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={[
                "font-p text-left px-4 py-3 rounded-lg border text-md transition-colors cursor-pointer hover:bg-white/80",
                isSelected
                  ? "border-primary bg-primary text-white"
                  : "border-gray-light bg-white text-black",
              ].join(" ")}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={isFirst}
          aria-label="이전 문제"
          className="w-12 h-12 rounded-full bg-progress-bg flex items-center justify-center disabled:opacity-40 cursor-pointer hover:bg-white/80"
        >
          <ChevronLeft className="text-primary" />
        </button>
        <button
          onClick={handleNext}
          aria-label="다음 문제"
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/80"
        >
          <ChevronRight className="text-primary" />
        </button>
      </div>
    </div>
  );
}
