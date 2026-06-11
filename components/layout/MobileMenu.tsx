"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: Props) {
  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-100 bg-white p-8"
        >

          <div className="flex justify-end">

            <button onClick={onClose}>

              <X size={32} />

            </button>

          </div>

          <div className="mt-12 flex flex-col gap-8 text-2xl">

            <Link href="/" onClick={onClose}>
              Home
            </Link>

            <Link href="/products" onClick={onClose}>
              Shop
            </Link>

            <a href="/#about" onClick={onClose}>
              About
            </a>

            <a href="/#contact" onClick={onClose}>
              Contact
            </a>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}