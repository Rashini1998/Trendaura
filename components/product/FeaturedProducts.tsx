// import ProductCard from "./ProductCard";
// import SectionTitle from "./SectionTitle";
// import { products } from "@/lib/products";
// import Container from "./Container";

// export default function FeaturedProducts() {
//     return (

//         <section className="py-20">

//             <Container>

//                 <SectionTitle

//                     title="Featured Collection"

//                     subtitle="Discover our latest arrivals"

//                 />

//                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

//                     {products.map((product) => (

//                         <ProductCard

//                             key={product.id}

//                             product={product}

//                         />

//                     ))}

//                 </div>

//             </Container>

//         </section>

//     );
// }

import { getProducts  } from "@/lib/products";
import ProductCard from "./ProductCard";

export default async function FeaturedProducts() {
   const products = await getProducts();
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="tracking-[0.4rem] text-gray-500 uppercase">
            Featured Collection
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            New Arrivals
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
