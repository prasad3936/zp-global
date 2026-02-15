"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  videoUrl?: string;
}

export default function ScreenshotSection({ images, videoUrl }: Props) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="my-32 text-center relative">
      <h2 className="text-3xl font-semibold mb-14">Product Experience</h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Mac Frame */}
        <div className="relative bg-black rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Browser Top */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Image Area */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full h-full"
              >
                <Image
                  src={images[index]}
                  alt="Product Screenshot"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        {images.length > 1 && (
          <div className="flex justify-center items-center gap-6 mt-6 relative z-10">
            <button
              onClick={prevSlide}
              className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
            >
              ◀ Prev
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    i === index ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
            >
              Next ▶
            </button>
          </div>
        )}
      </div>

      {/* Video Section */}
      {videoUrl && (
        <div className="mt-24 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Product Walkthrough</h3>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src={videoUrl}
              title="Product Video"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
