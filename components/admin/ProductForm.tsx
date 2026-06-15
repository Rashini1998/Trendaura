"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ImageUploader from "./ImageUploader";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import Image from "next/image";

import {
    createProduct,
    updateProduct,
} from "@/lib/products";

import { Product } from "@/types/product";

interface Props {
    product?: Product;
}

export default function ProductForm({ product }: Props) {

    const router = useRouter();

    const [loading, setLoading] = useState(false);


    const [image, setImage] = useState(product?.image ?? "");

    const [colors, setColors] = useState<string[]>(
        product?.colors ?? []
    );

    const [sizes, setSizes] = useState<string[]>(
        product?.sizes ?? []
    );

    const [form, setForm] = useState({

        name: product?.name ?? "",

        description: product?.description ?? "",

        category: product?.category ?? "",

        price: product?.price ?? 0,

        stock: product?.stock ?? 0,

        available: product?.available ?? true

    });

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);

        try {
            const productData = {
                ...form,
                image,
                colors,
                sizes,
            };

            if (product) {
                await updateProduct(product.id, productData);
            } else {
                await createProduct(productData);
            }

            router.push("/admin/products");
            router.refresh();
        } catch (err) {
            alert("Unable to save product");
        }

        setLoading(false);
    }
    return (

        <form

            onSubmit={handleSubmit}

            className="bg-white rounded-2xl shadow p-8 space-y-6"

        >
            <input
                value={form.name}
                placeholder="Product Name"
                className="w-full rounded-lg border p-4"
                onChange={(e) =>
                    setForm({
                        ...form,
                        name: e.target.value,
                    })
                }
            />

            <textarea
                value={form.description}
                placeholder="Description"
                className="h-36 w-full rounded-lg border p-4"
                onChange={(e) =>
                    setForm({
                        ...form,
                        description: e.target.value,
                    })
                }
            />

            <input
                value={form.category}
                placeholder="Category"
                className="w-full rounded-lg border p-4"
                onChange={(e) =>
                    setForm({
                        ...form,
                        category: e.target.value,
                    })
                }
            />

            <div className="grid grid-cols-2 gap-6">
                <input
                    type="number"
                    value={form.price}
                    placeholder="Price"
                    className="rounded-lg border p-4"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            price: Number(e.target.value),
                        })
                    }
                />

                <input
                    type="number"
                    value={form.stock}
                    placeholder="Stock"
                    className="rounded-lg border p-4"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            stock: Number(e.target.value),
                        })
                    }
                />

            </div>

            <label className="flex gap-3 items-center">

                <input
                    type="checkbox"
                    checked={form.available}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            available: e.target.checked,
                        })
                    }
                />

                Available

            </label>

            <div>

                <h3 className="font-semibold mb-3">

                    Colors

                </h3>

                <ColorSelector

                    value={colors}

                    onChange={setColors}

                />

            </div>

            <div>

                <h3 className="font-semibold mb-3">

                    Sizes

                </h3>

                <SizeSelector

                    value={sizes}

                    onChange={setSizes}

                />

            </div>

            <div>

                <h3 className="font-semibold mb-3">

                    Product Image

                </h3>

                <ImageUploader

                    onUploaded={setImage}

                />
                {image && (
                    <div className="relative mt-4 h-40 w-40 overflow-hidden rounded-lg border">

                        <Image
                            src={image}
                            alt="Product Preview"
                            fill
                            className="object-cover"
                        />

                    </div>
                )}

            </div>

            <button

                disabled={loading}

                className="w-full bg-black text-white rounded-lg p-4 hover:bg-yellow-600 transition"

            >

                {

                    loading

                        ?

                        "Saving..."

                        :

                        "Save Product"

                }

            </button>

        </form>

    );

}
