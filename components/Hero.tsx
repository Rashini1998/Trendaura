"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-28">

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold"
        >
          Elevate Your Style
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-lg text-gray-500 max-w-2xl mx-auto"
        >
          Discover Premium Fashion Crafted for Modern Lifestyles. 
        </motion.p>

        <Button className="mt-10 px-8 py-6 text-lg">
          Shop Collection
        </Button>

      </div>

    </section>
  );
}