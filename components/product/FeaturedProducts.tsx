import { getNewArrivals } from "@/lib/products";
import ProductCard from "./ProductCard";

export default async function FeaturedProducts() {
  const products = await getNewArrivals(30);

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

        {products.length === 0 ? (
          <p className="text-center text-gray-500">
            No new arrivals available.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

