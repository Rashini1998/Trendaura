"use client";

import { supabase } from "@/lib/supabase";

interface Props {

    onUploaded: (url: string) => void;

}

export default function ImageUploader({

    onUploaded,

}: Props) {

    async function uploadImage(
        e: React.ChangeEvent<HTMLInputElement>
    ) {

        const file = e.target.files?.[0];

        if (!file) return;

        const fileName = `${Date.now()}-${file.name}`;

        const { error } = await supabase.storage
            .from("products")
            .upload(fileName, file);

        if (error) {

            console.log(error);

            // alert(error.message);
            console.log(error);
            console.log(JSON.stringify(error));

            alert(error.message);

            return;

        }

        const {

            data,

        } = supabase.storage
            .from("products")
            .getPublicUrl(fileName);

        onUploaded(data.publicUrl);

    }

    return (

        <input

            type="file"

            onChange={uploadImage}

            className="w-full rounded border p-3"

        />

    );

}
