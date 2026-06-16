// import Image from "next/image";
// import { Product } from "@/types/product";

// interface Props {
//     product: Product;
// }

// export default function ProductCard({ product }: Props) {
//     return (
//         <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

//             <div className="relative h-80 w-full">

//                 <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover"
//                 />

//             </div>

//             <div className="p-5">

//                 <h3 className="text-xl font-semibold">

//                     {product.name}

//                 </h3>

//                 <p className="mt-2 text-lg font-bold">

//                     Rs. {product.price}

//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">

//                     {product.sizes.map((size) => (

//                         <span
//                             key={size}
//                             className="rounded border px-2 py-1 text-xs"
//                         >
//                             {size}
//                         </span>

//                     ))}

//                 </div>

//                 {/* <button className="mt-6 w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800">

//                     View Product

//                 </button> */}
//                 <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={`https://wa.me/94710337335?text=${encodeURIComponent(
//                         `Hello Trendaura! I would like to order ${product.name} for Rs.${product.price}`
//                     )}`}
//                     className="mt-6 block w-full rounded-lg bg-black py-3 text-center text-white transition hover:bg-gray-800"
//                 >
//                     Order via WhatsApp
//                 </a>

//             </div>

//         </div>
//     );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-2xl"
    >
      <div className="relative h-96  overflow-hidden">
        <Image
          src={
            product.image && product.image.trim() !== ""
              ? product.image
              : "/images/placeholder.jpg"
          }
          alt={product.name}
          fill
          className="object-cover"
        />

        <div className="absolute right-4 top-4">

          {product.stock > 0 ? (

            <span className="rounded-full bg-green-600 px-4 py-2 text-sm text-white  border-2">
              In Stock
            </span>

          ) : (

            <span className="rounded-full bg-red-600 px-4 py-2 text-sm text-white border-2">
              Out of Stock
            </span>

          )}

        </div>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {product.name}
        </h3>

        <p className="mt-1 text-gray-500">
          {product.description}
        </p>

        <p className="mt-4 text-xl font-bold">
          Rs. {product.price.toLocaleString()}
        </p>

        <div className="mt-4 flex gap-2">

          {product.colors.map((color) => (
            <span
              key={color}
              className="rounded-full border px-4 py-1 text-sm"
            >
              {color}
            </span>
          ))}

        </div>

        <div className="mt-3 flex gap-2">

          {product.sizes.map((size) => (
            <span
              key={size}
              className="rounded border px-3 py-1 text-sm"
            >
              {size}
            </span>
          ))}

        </div>

        <a
          href={`https://wa.me/94710337335?text=Hello Trendaura! I would like to order ${product.name}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-black py-4 text-white transition  hover:bg-white hover:text-black hover:border border-black"
        >
          <MessageCircle size={20} />

          Order via WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
