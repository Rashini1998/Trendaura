// export interface Product {

//     id:number;

//     name:string;

//     price:number;

//     image:string;

//     colors:string[];

//     sizes:string[];

//     available:boolean;

// }
// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   category: string;
//   price: number;
//   image: string;
//   colors: string[];
//   sizes: string[];
//   available: boolean;
// }

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  stock: number;
  available: boolean;
}