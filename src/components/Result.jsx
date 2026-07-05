import { RefreshCcw, Share2 } from "lucide-react";
import { getGrade } from "../utils/grade";

export default function Result({ score, total, onRestart }) {
  const grade = getGrade(score);

  function handleShare() {
    // 1순위 범위: 링크 복사만 우선 구현
    // 카카오톡 공유 SDK 등은 2순위에서 확장 예정
    navigator.clipboard?.writeText(window.location.href);
    alert("링크가 복사되었어요!");
  }

  return (
    <div className="flex flex-col items-center gap-3 text-center px-6 py-12">
      {/* 등급별 고양이 이미지/아이콘은 확정되면 grade.id 기준으로 분기해서 교체하세요 */}
      <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-white text-xl font-semibold">
        {grade.label[0]}
      </div>

      <p className="text-sm text-gray-500">당신의 등급은</p>
      <h2 className="text-xl font-semibold">{grade.label}</h2>
      <p className="text-sm text-gray-500">
        {score} / {total}문제 정답
      </p>
      <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
        {grade.comment}
      </p>

      <div className="flex gap-2 w-full max-w-xs mt-6">
        <button
          onClick={onRestart}
          className="flex-1 flex items-center justify-center gap-1 py-3 rounded-lg border border-gray-300 text-sm"
        >
          <RefreshCcw size={16} />
          다시 도전
        </button>
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-1 py-3 rounded-lg bg-black text-white text-sm"
        >
          <Share2 size={16} />
          공유하기
        </button>
      </div>
    </div>
  );
}
