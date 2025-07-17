import React from "react";
import { clsx } from "clsx";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";

  className?: string;
};

export default function Spinner({ size = "md", className }: SpinnerProps) {
  const sizeClasses: Record<"sm" | "md" | "lg", string> = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4",
  };

  const spinnerClasses = clsx(
    "animate-spin rounded-full",
    "border-solid",
    "border-neutral-300/30",
    "border-t-Custom_orange",
    sizeClasses[size],
    className
  );

  return <div className={spinnerClasses} role="status" aria-label="loading" />;
}
