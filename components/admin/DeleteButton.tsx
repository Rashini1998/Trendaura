"use client";

import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { deleteProduct } from "@/lib/products";

interface Props {
    id: number;
}

export default function DeleteButton({ id }: Props) {

    const router = useRouter();

    async function handleDelete() {

        const confirmed = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmed) return;

        try {

            await deleteProduct(id);

            router.refresh();

        } catch (err) {

            console.error(err);

        }

    }

    return (

        <button

            onClick={handleDelete}

            className="rounded-lg px-4 py-2 hover:bg-red-200"

        >

            <FaTrashAlt className="text-black size-5 hover:text-red-500" />

        </button>

    );

}