export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100);

  return (
    <div>
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>문제 {current}</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
