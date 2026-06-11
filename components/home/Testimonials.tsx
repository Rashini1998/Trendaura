"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Nadeesha",
    text: "Amazing quality and beautiful designs. Highly recommended!",
  },
  {
    name: "Amal",
    text: "Fast delivery and excellent customer service.",
  },
  {
    name: "Kavindi",
    text: "The oversized tees are incredibly comfortable.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.4rem] text-gray-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What Our Customers Say
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {reviews.map((review, index) => (

            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              className="rounded-3xl border bg-gray-50 p-8 shadow-sm"
            >

              <div className="text-3xl">

                ⭐⭐⭐⭐⭐

              </div>

              <p className="mt-6 text-gray-600">

                 &ldquo;{review.text}&rdquo;

              </p>

              <h3 className="mt-8 font-semibold">

                {review.name}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}