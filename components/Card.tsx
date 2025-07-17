// src/components/Card.tsx
"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export default function Card({
  image,
  className,
}: {
  image: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        clsx(
          "border-neutral-800/50 border relative w-full h-full overflow-hidden rounded-xl bg-black/20",
          className
        )
      )}
    >
      <Image
        src={image}
        alt="Project image"
        fill
        className="object-cover saturate-[.8] mix-blend-luminosity opacity-80"
      />
    </div>
  );
}
