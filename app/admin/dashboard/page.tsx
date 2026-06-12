import DashboardCard from "@/components/admin/DashboardCard";
import { getProducts } from "@/lib/products";

export default async function DashboardPage() {
  const products = await getProducts();
  console.log("Products:", products);

  const available = products.filter((p) => p.available).length;

  const outOfStock = products.filter((p) => p.stock === 0).length;

  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <DashboardCard
          title="Products"
          value={products.length}
        />

        <DashboardCard
          title="Available"
          value={available}
        />

        <DashboardCard
          title="Out of Stock"
          value={outOfStock}
        />

      </div>

    </div>
  );
}
