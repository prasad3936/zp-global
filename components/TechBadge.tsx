"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TechBadgeProps {
  name: string;
  logo: string;
  color?: string;
}

export default function TechBadge({ name, logo, color }: TechBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-white/30 transition"
    >
      <Image
        src={logo}
        alt={name}
        width={60}
        height={60}
        className="object-contain"
      />
      <p className="text-sm text-gray-300">{name}</p>
    </motion.div>
  );
}