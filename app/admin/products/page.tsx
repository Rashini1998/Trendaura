import Link from "next/link";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>

      <div className="mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-bold">

          Products

        </h1>

        <Link
          href="/admin/products/new"
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          Add Product
        </Link>

      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-4 text-left">Name</th>

              <th className="p-4 text-left">Price</th>

              <th className="p-4 text-left">Stock</th>

              <th className="p-4 text-left">Available</th>

            </tr>

          </thead>

          <tbody>

            {products?.map((product) => (

              <tr
                key={product.id}
                className="border-b"
              >

                <td className="p-4">

                  {product.name}

                </td>

                <td className="p-4">

                  Rs. {product.price}

                </td>

                <td className="p-4">

                  {product.stock}

                </td>

                <td className="p-4">

                  {product.available ? "Yes" : "No"}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
