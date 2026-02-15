"use client";
import { motion } from "framer-motion";

export default function FeatureGrid({ features }: { features: string[] }) {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Core Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl"
          >
            {feature}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
