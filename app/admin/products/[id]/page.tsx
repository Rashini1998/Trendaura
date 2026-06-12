import { getProduct } from "@/lib/products";

interface Props {

    params:{

        id:string;

    }

}

export default async function ProductDetails({

    params

}:Props){

    const product=await getProduct(

        Number(params.id)

    );

    return(

        <div className="max-w-7xl mx-auto py-20 px-6">

            <div className="grid lg:grid-cols-2 gap-16">

                <img

                src={product.image}

                className="rounded-3xl"

                />

                <div>

                    <h1 className="text-5xl font-bold">

                        {product.name}

                    </h1>

                    <p className="mt-6">

                        {product.description}

                    </p>

                    <p className="mt-8 text-4xl font-bold">

                        Rs.{product.price}

                    </p>

                </div>

            </div>

        </div>

    );

}