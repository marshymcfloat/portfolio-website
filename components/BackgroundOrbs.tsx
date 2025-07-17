"use client";

import { useState } from "react";
import BGCircle from "./BGCircle";
import { useHasMounted } from "@/hooks/useHasMounted";

const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;
const colors = [
  "bg-Custom_orange/20",
  "bg-purple-500/15",
  "bg-pink-500/20",
  "bg-blue-400/20",
];

const generateOrbConfig = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = getRandomValue(200, 500);
  const duration = getRandomValue(10, 50);
  return {
    id: crypto.randomUUID(),
    size,
    duration,
    className: `rounded-full ${color}`,
    initialX: `${getRandomValue(-20, 100)}vw`,
    initialY: `${getRandomValue(-20, 100)}vh`,
    animateX: `${getRandomValue(-20, 100)}vw`,
    animateY: `${getRandomValue(-20, 100)}vh`,
  };
};

export default function BackgroundOrbs() {
  const [orbConfigs] = useState(() =>
    Array.from({ length: 3 }, generateOrbConfig)
  );
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {orbConfigs.map((config) => (
        <BGCircle
          key={config.id}
          size={config.size}
          initialX={config.initialX}
          initialY={config.initialY}
          animateX={config.animateX}
          animateY={config.animateY}
          duration={config.duration}
          className={config.className}
        />
      ))}
    </>
  );
}
