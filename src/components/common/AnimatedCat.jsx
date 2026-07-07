import { useEffect, useState } from "react";

const frames = ["/images/smile-cat1.png", "/images/smile-cat2.png"];

export default function AnimatedCat({
  interval = 400,
  className = "h-16 w-16 object-contain",
}) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return <img src={frames[frameIndex]} alt="메가냥" className={className} />;
}
