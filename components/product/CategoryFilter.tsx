"use client";

interface Props {
  category: string;
  setCategory: (category: string) => void;
}

const categories = [
  "All",
  "Oversized",
  "Summer Special",
  "Polo",
];

export default function CategoryFilter({
  category,
  setCategory,
}: Props) {
  return (
    <div className="flex gap-3 flex-wrap">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-5 py-2 border transition
          ${
            category === item
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}