export default function Home({ onStart, totalQuestions }) {
  return (
    <div className="flex flex-col items-center text-center py-12">
      <img
        src="/images/cat.png"
        alt="메가냥"
        className="h-20 w-20 object-contain mb-2"
      />

      <h1 className="font-title text-2xl text-white tracking-[0.01em] mb-2">
        메가마케터
      </h1>
      <p className="font-body text-sm text-white w-full leading-relaxed mb-8">
        신입 마케터의 첫 출근, <br />
        마케터냥이 될 수 있을까요?
      </p>
      <p className="font-body text-xs text-white mb-2">
        {totalQuestions}문제 · 약 2분
      </p>

      <button
        onClick={onStart}
        className="font-title w-full mt-4 py-3 rounded-lg bg-primary text-white text-sm font-medium"
      >
        시작하기
      </button>
    </div>
  );
}
