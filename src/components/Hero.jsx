// export default function Hero() {
//   return (
//     <div className="min-h-[20vh] w-screen flex items-start justify-center pt-8">
//   <div className="grid justify-items-start">

//     {/* Launching */}
//     <span
//       className="
//         italic font-light text-[#003f3f]
//         text-5xl
//         sm:text-6xl
//         md:text-7xl
//         lg:text-8xl
//         xl:text-9xl">
//       Launching
//     </span>

//     {/* Shortly */}
//     <span
//       className="
//         font-extrabold text-[#003f3f]
//         -mt-4
//         pl-[3.6ch]
//         text-6xl
//         sm:text-7xl
//         md:text-8xl
//         lg:text-9xl
//         xl:text-[10rem]">
//       Shortly!
//     </span>

//   </div>
// </div>

//   );
// }

export default function Hero() {
  return (
    <section className="w-full min-h-[20vh] flex justify-center pt-8 px-4">
      <div className="grid justify-items-start leading-none">

        {/* Launching */}
        <span
          className="
            italic font-light text-[#003f3f]
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          Launching
        </span>

        {/* Shortly */}
        <span
          className="
            font-extrabold text-[#003f3f]
            -mt-2 sm:-mt-3 md:-mt-4
            pl-[2.5ch] sm:pl-[3ch] md:pl-[3.6ch]
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            xl:text-[9rem]
          "
        >
          Shortly!
        </span>

      </div>
    </section>
  );
}
