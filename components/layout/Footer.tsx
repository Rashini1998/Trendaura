// import Container from "./Container";

// export default function Footer() {
//   return (
//     <footer className="border-t py-10 mt-20">

//       <Container>

//         <div className="text-center text-gray-500">

//           © 2026 Trendaura

//         </div>

//       </Container>

//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <h2 className="text-3xl font-bold tracking-[0.3rem]">

              TRENDAURA

            </h2>

            <p className="mt-2 text-gray-400">

              Premium Fashion Store

            </p>

          </div>

          <div className="text-center text-gray-400">

            © {new Date().getFullYear()} Trendaura

            <br />

            All Rights Reserved

          </div>

        </div>

      </div>

    </footer>
  );
}
