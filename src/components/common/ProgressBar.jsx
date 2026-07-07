export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100);

  return (
    <div>
      <div className="flex justify-between font-p text-xs text-gray-light mb-1">
        <span>문제 {current}</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="h-3 w-full rounded-full bg-progress-bg/60 overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
