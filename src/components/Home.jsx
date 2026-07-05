export default function Home({ onStart, totalQuestions }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center px-6 py-12">
      <img src="/cat.png" className="h-20 w-100%" />

      <h1 className="text-2xl text-black font-semibold">메가마케터</h1>
      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
        신입 마케터의 첫 출근!
      </p>
      <p className="text-xs text-gray-400">{totalQuestions}문제 · 약 2분</p>

      <button
        onClick={onStart}
        className="w-full max-w-xs mt-4 py-3 rounded-lg bg-black text-white text-sm font-medium"
      >
        시작하기
      </button>
    </div>
  );
}
