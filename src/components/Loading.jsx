import { useEffect } from "react";

export default function Loading({ onComplete, duration = 1500 }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24">
      <p className="font-t text-white text-lg">
        Loading
        <span className="animate-[dot-blink_1.4s_infinite]">.</span>
        <span className="animate-[dot-blink_1.4s_infinite] [animation-delay:0.2s]">
          .
        </span>
        <span className="animate-[dot-blink_1.4s_infinite] [animation-delay:0.4s]">
          .
        </span>
      </p>
    </div>
  );
}
