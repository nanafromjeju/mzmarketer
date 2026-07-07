export default function Home({ onStart }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center py-12">
      <img
        src="/images/cat.png"
        alt="메가냥"
        className="h-20 w-20 object-contain"
      />

      <h1 className="font-t text-lg text-white tracking-[0.01em] font-semibold">
        메가마케터
      </h1>
      <p className="font-p text-sm text-white w-full leading-relaxed">
        신입 마케터의 첫 출근, <br /> 마케터냥이 될 수 있을까요?
      </p>

      <button
        onClick={onStart}
        className="font-t w-full mt-4 py-3 rounded-lg bg-primary text-white text-md cursor-pointer hover:bg-primary/80"
      >
        시작하기
      </button>
    </div>
  );
}
