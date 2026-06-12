// import ProductForm from "@/components/admin/ProductForm";

// export default function NewProductPage() {
//   return (
//     <div className="max-w-5xl mx-auto">

//       <div className="mb-10">

//         <h1 className="text-4xl font-bold">

//           Add Product

//         </h1>

//         <p className="text-gray-500 mt-2">

//           Create a new Trendaura product

//         </p>

//       </div>

//       <ProductForm />

//     </div>
//   );
// }


// import Link from "next/link";

// import { getProducts } from "@/lib/products";

// export default async function ProductsPage(){

//     const products=await getProducts();

//     return(

//         <div>

//             <div className="flex justify-between mb-10">

//                 <h1 className="text-4xl font-bold">

//                     Products

//                 </h1>

//                 <Link

//                 href="/admin/products/new"

//                 className="bg-black text-white px-6 py-3 rounded-lg"

//                 >

//                     Add Product

//                 </Link>

//             </div>

//             <div className="grid lg:grid-cols-3 gap-8">

//                 {

//                     products?.map((product:any)=>(

//                         <div

//                         key={product.id}

//                         className="bg-white rounded-2xl shadow overflow-hidden"

//                         >

//                             <img

//                             src={product.image}

//                             className="h-80 w-full object-cover"

//                             />

//                             <div className="p-6">

//                                 <h2 className="text-2xl font-bold">

//                                     {product.name}

//                                 </h2>

//                                 <p>

//                                     Rs.{product.price}

//                                 </p>

//                                 <p>

//                                     Stock :

//                                     {product.stock}

//                                 </p>

//                             </div>

//                         </div>

//                     ))

//                 }

//             </div>

//         </div>

//     );

// }


import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Add Product
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new Trendaura product
        </p>

      </div>

      <ProductForm />

    </div>
  );
}
