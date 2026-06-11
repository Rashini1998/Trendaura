"use client";

import { useMemo, useState } from "react";

import { products } from "@/lib/products";

import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

export default function ProductsPage() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;

    });

  }, [search, category]);

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