"use client";

import { motion } from "framer-motion";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  tagline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function ProductHero({
  title,
  subtitle,
  tagline,
  ctaText,
  onCtaClick,
}: ProductHeroProps) {
  return (
    <section className="text-center py-20 relative">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 blur-2xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {tagline && (
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">
            {tagline}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl">
          {subtitle}
        </p>

        {ctaText && (
          <button
            onClick={onCtaClick}
            className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-xl shadow-lg"
          >
            {ctaText}
          </button>
        )}
      </motion.div>
    </section>
  );
}
