// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="py-28">

//       <div className="text-center">

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold"
//         >
//           Elevate Your Style
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-8 text-lg text-gray-500 max-w-2xl mx-auto"
//         >
//           Discover Premium Fashion Crafted for Modern Lifestyles.
//         </motion.p>
//         <Link href="/products" >
//           <Button className="mt-10 px-8 py-6 text-lg">
//             Shop Collection
//           </Button>
//         </Link>


//       </div>

//     </section>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">

      <Image
        src="/images/hero_section.png"
        alt="Trendaura Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white px-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="tracking-[0.5rem] text-sm uppercase"
          >
            Premium Fashion
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-6xl font-bold md:text-8xl"
          >
            TRENDAURA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-8 max-w-xl text-lg text-gray-200"
          >
            Elevate your everyday style with timeless fashion and
            premium quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >

            <Link
              href="/products"
              className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Shop Collection
            </Link>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">

        {/* ↓ */}
        <FaArrowCircleDown size={30} />

      </div>

    </section>
  );
}