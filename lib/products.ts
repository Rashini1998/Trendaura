// import { Product } from "@/types/product";

// export const products: Product[] = [

// {
// id:1,

// name:"New summer special",

// description:"Premium 100% cotton oversized t-shirt.",

// category:"Summer Special",

// price:3500,

// image:"/images/New_Summer_Special.jpg",

// colors:["Black","White"],

// sizes:["S","M","L","XL"],

// stock: 18,

// available:true

// },

// {
// id:2,

// name:"Balmain Paris",

// description:"Premium 100% cotton oversized t-shirt.",

// category:"Oversized",

// price:4200,

// image:"/images/Balmain_paris.jpg",

// colors:["Blue","White"],

// sizes:["S","M","L","XL"],

// stock: 12,

// available:true

// },

// {
// id:3,

// name:"Stop thinking, start drinking",

// description:"Premium 100% cotton oversized t-shirt.",

// category:"Oversized",

// price:2800,

// image:"/images/stop_thinking_start_drinking.jpg",

// colors:["White"],

// sizes:["S","M","L","XL"],

// stock: 15,

// available:true

// },
// {
// id:4,

// name:"Heaven hits different",

// description:"Premium 100% cotton oversized t-shirt.",

// category:"Summer Special",

// price:2800,

// image:"/images/Heaven_hits_different.jpg",

// colors:["White"],

// sizes:["S","M","L","XL"],

// stock: 20,

// available:true

// },
// {
// id:5,

// name:"A graphic that speaks before you do",

// description:"Premium 100% cotton oversized t-shirt.",

// category:"Summer Special",

// price:2800,

// image:"/images/demons.jpg",

// colors:["White"],

// sizes:["S","M","L","XL"],

// stock: 10,

// available:true

// },
// // {
// // id:6,

// // name:"𝙽𝚘𝚝 𝚓𝚞𝚜𝚝 𝚊 𝚝𝚎𝚎 — 𝚒𝚝’𝚜 𝚊 𝚠𝚑𝚘𝚕𝚎 𝚖𝚘𝚘𝚍. ",

// // description:"Premium 100% cotton oversized t-shirt.",

// // category:"Polo",

// // price:3000,

// // image:"/images/not_just_a_tee.jpg",

// // colors:["Black"],

// // sizes:["S","M","L","XL"],

// // available:true

// // }

// ];


// import { supabase } from "./supabase";
// import { Product } from "@/types/product";

// export async function getProducts() {

//     const { data, error } = await supabase
//         .from("products")
//         .select("*")
//         .order("created_at", { ascending: false });

//     if (error) throw error;

//     return data;
// }

// export async function createProduct(product: Product) {

//     const { error } = await supabase
//         .from("products")
//         .insert(product);

//     if (error) throw error;

// }

// export async function deleteProduct(id: number) {

//     await supabase
//         .from("products")
//         .delete()
//         .eq("id", id);

// }


import { supabase } from "./supabase";
import { CreateProduct, Product } from "@/types/product";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) throw error;

  return data as Product[];
}

export async function getProduct(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data as Product;
}

export async function createProduct(product: CreateProduct) {
  const { error } = await supabase
    .from("products")
    .insert(product);

  if (error) throw error;
}

export async function updateProduct(
  id: number,
  product: Partial<Product>
) {
  const { error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteProduct(id: number) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

