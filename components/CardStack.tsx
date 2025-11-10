"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

const Card = ({ image }: { image: string }) => (
  <div
    className="w-full h-full rounded-2xl bg-cover saturate-[.7] bg-center shadow-xl"
    style={{ backgroundImage: `url(${image})` }}
  />
);

type CardData = {
  image: string;
  title: string;
  description: string;
};

type CardStackProps = {
  items: CardData[];
} & HTMLMotionProps<"div">;

const overlayVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1, duration: 0.2 },
  },
};

const textVariants = {
  initial: { y: 10, opacity: 0 },
  hover: { y: 0, opacity: 1 },
};

export default function CardStack({ items, ...rest }: CardStackProps) {
  const generateCardVariants = (index: number) => {
    const position = items.length - 1 - index;

    if (position === 0) {
      return {
        initial: { y: 0, x: 0, rotate: 0, scale: 1 },
        hover: {
          scale: 1.03,
          transition: { type: "spring", stiffness: 300, damping: 20 } as const,
        },
      };
    }

    return {
      initial: {
        y: position * 6,
        x: 0,
        scale: 1 - position * 0.05,
        rotate: `${position * -2}deg`,
        opacity: 0.8,
      },
      hover: {
        y: position * -25,
        x: position * 25,
        rotate: `${position * 4}deg`,
        opacity: 1,

        transition: {
          type: "spring",
          stiffness: 260,
          damping: 25,
          delay: position * 0.07,
        } as const,
      },
    };
  };

  return (
    <motion.div
      className="relative w-full max-w-[450px] aspect-video cursor-pointer"
      initial="initial"
      whileHover="hover"
      {...rest}
    >
      {items.map((item, index) => {
        const isTopCard = index === items.length - 1;
        return (
          <motion.div
            key={item.image + index}
            className="absolute w-full h-full"
            style={{ zIndex: index }}
            variants={generateCardVariants(index)}
          >
            <Card image={item.image} />

            {isTopCard && (
              <motion.div
                className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent z-20"
                variants={overlayVariants}
              >
                <motion.h1
                  className="font-bold tracking-wider text-white/95 text-lg sm:text-xl md:text-2xl"
                  variants={textVariants}
                >
                  {item.title}
                </motion.h1>
                <motion.span
                  className="text-xs sm:text-sm text-white/75 mt-1"
                  variants={textVariants}
                >
                  {item.description}
                </motion.span>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
