"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type CardProps = {
  title: string;
  description: string;
  image: string;
  color?: "amber" | "red";
};

const COLORS: Record<
  "amber" | "red",
  { bg: string; text: string; imageBorder: string }
> = {
  amber: {
    bg: "bg-amber-900/5 border border-amber-700/5 hover:border-amber-500/60 hover:shadow-amber-500/30",
    text: "text-amber-500",
    imageBorder: "border border-amber-700/5",
  },
  red: {
    bg: "bg-red-900/5 border border-red-700/5 hover:border-red-500/60 hover:shadow-red-500/30",
    text: "text-red-800",
    imageBorder: "border border-red-700/5",
  },
};

const Card = ({ title, description, image, color = "amber" }: CardProps) => {
  const styles = COLORS[color] || COLORS.amber;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`w-80 h-auto rounded-lg shadow-lg p-6 transition-all duration-300 backdrop-blur-md ${styles.bg}`}
    >
      <h2 className={`text-2xl font-bold tracking-wide mb-3 ${styles.text}`}>
        {title}
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className={`overflow-hidden rounded ${styles.imageBorder}`}>
        <Image
          src={image}
          alt={title}
          width={320}
          height={200}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </motion.div>
  );
};

export default Card;
