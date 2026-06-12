"use client";

import { useState } from "react";

import ImageUploader from "./ImageUploader";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

import { createProduct } from "@/lib/products";

import { useRouter } from "next/navigation";

export default function ProductForm() {

    const router = useRouter();

    const [loading,setLoading]=useState(false);

    const [image,setImage]=useState("");

    const [colors,setColors]=useState<string[]>([]);

    const [sizes,setSizes]=useState<string[]>([]);

    const [form,setForm]=useState({

        name:"",

        description:"",

        category:"",

        price:0,

        stock:0,

        available:true

    });

    async function handleSubmit(e:React.FormEvent){

        e.preventDefault();

        setLoading(true);

        try{

            await createProduct({

                ...form,

                image,

                colors,

                sizes

            });

            router.push("/admin/products");

        }

        catch(err){

            alert("Unable to save product");

        }

        setLoading(false);

    }

    return(

        <form

        onSubmit={handleSubmit}

        className="bg-white rounded-2xl shadow p-8 space-y-6"

        >

            <input

            placeholder="Product Name"

            className="w-full border rounded-lg p-4"

            onChange={(e)=>

            setForm({...form,name:e.target.value})

            }

            />

            <textarea

            placeholder="Description"

            className="w-full border rounded-lg p-4 h-36"

            onChange={(e)=>

            setForm({...form,description:e.target.value})

            }

            />

            <input

            placeholder="Category"

            className="w-full border rounded-lg p-4"

            onChange={(e)=>

            setForm({...form,category:e.target.value})

            }

            />

            <div className="grid grid-cols-2 gap-6">

                <input

                type="number"

                placeholder="Price"

                className="border rounded-lg p-4"

                onChange={(e)=>

                setForm({...form,price:Number(e.target.value)})

                }

                />

                <input

                type="number"

                placeholder="Stock"

                className="border rounded-lg p-4"

                onChange={(e)=>

                setForm({...form,stock:Number(e.target.value)})

                }

                />

            </div>

            <label className="flex gap-3 items-center">

                <input

                type="checkbox"

                checked={form.available}

                onChange={(e)=>

                setForm({

                    ...form,

                    available:e.target.checked

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
