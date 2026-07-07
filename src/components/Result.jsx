import { getGrade } from "../utils/grade";
import AnimatedCat from "./common/AnimatedCat";

export default function Result({ score, total, onRestart }) {
  const grade = getGrade(score);

  return (
    <div className="flex flex-col items-center gap-2 text-center py-12">
      <AnimatedCat />

      <p className="font-p text-md text-gray-light">당신의 등급은</p>
      <h2 className="font-t text-lg text-white tracking-[0.01em]">
        {grade.label}
      </h2>
      <p className="font-p text-sm text-gray">
        {score} / {total}문제 정답
      </p>
      <p className="font-p text-md text-white max-w-xs leading-relaxed">
        {grade.comment}
      </p>

      <div className="flex gap-2 w-full mt-8">
        <button
          type="button"
          className="font-t flex-1 py-3 rounded-lg border border-primary bg-white text-primary text-sm cursor-pointer hover:bg-white/80"
        >
          오답노트
        </button>
        <button
          onClick={onRestart}
          className="font-t flex-1 py-3 rounded-lg bg-primary text-white text-sm cursor-pointer hover:bg-primary/80"
        >
          다시도전
        </button>
      </div>
    </div>
  );
}
