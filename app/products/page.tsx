// "use client";

// import { useMemo, useState, useEffect } from "react";

// import { getProducts  } from "@/lib/products";

// import { Product } from "@/types/product";

// import ProductCard from "@/components/product/ProductCard";
// import SearchBar from "@/components/product/SearchBar";
// import CategoryFilter from "@/components/product/CategoryFilter";

// export default function ProductsPage() {

//   const [search, setSearch] = useState("");

//   const [category, setCategory] = useState("All");

//   const [products, setProducts] = useState<Product[]>([]);

//   const filteredProducts = useMemo(() => {

//     return products.filter((product) => {

//       const matchesSearch =
//         product.name
//           .toLowerCase()
//           .includes(search.toLowerCase());

//       const matchesCategory =
//         category === "All" ||
//         product.category === category;

//       return matchesSearch && matchesCategory;

//     });

//   }, [search, category]);

//   return (

//     <div className="mx-auto max-w-7xl p-6">

//       <h1 className="mb-8 text-5xl font-bold">

//         Shop Collection

//       </h1>

//       <SearchBar

//         value={search}

//         onChange={setSearch}

//       />

//       <div className="my-6">

//         <CategoryFilter

//           category={category}

//           setCategory={setCategory}

//         />

//       </div>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

//         {filteredProducts.map((product) => (

//           <ProductCard

//             key={product.id}

//             product={product}

//           />

//         ))}

//       </div>

//     </div>

//   );

// }


"use client";

import { useMemo, useState, useEffect } from "react";

import { getProducts } from "@/lib/products";
import { Product } from "@/types/product";

import ProductCard from "@/components/product/ProductCard";
import SearchBar from "@/components/product/SearchBar";
import CategoryFilter from "@/components/product/CategoryFilter";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-8 text-5xl font-bold">
        Shop Collection
      </h1>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="my-6">
        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
