import { getProduct } from "@/lib/products";
import ProductForm from "@/components/admin/ProductForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="mb-8 text-4xl font-bold">
        Edit Product
      </h1>

      <ProductForm product={product} />

    </div>
  );
}