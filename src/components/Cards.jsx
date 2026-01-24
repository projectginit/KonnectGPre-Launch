// export default function Cards({ cardName, second, para }) {
//   return (
//     <section className="w-full bg-[#f5f5dc] px-4 sm:px-6 lg:px-12 flex justify-center">
      
//       {/* Card */}
//       <div
//         className="bg-teal-900 text-white
//           flex flex-col justify-center items-center text-center
//           p-4 sm:p-5 lg:p-6
//           w-full sm:max-w-sm md:max-w-md lg:w-[500px]
//           min-h-[200px]
//           rounded-md
//           shadow-inner drop-shadow-md
//           my-4">
//         {/* Top label */}
//         <div className="text-gray-400 text-sm sm:text-base">
//           {cardName}
//         </div>

//         {/* Title */}
//         <div className="mt-1 text-lg sm:text-xl lg:text-2xl font-semibold">
//           {second}
//         </div>

//         {/* Description */}
//         <p className="mt-3 px-2 sm:px-4 text-sm sm:text-base leading-relaxed">
//           {para}
//         </p>
//       </div>

//     </section>
//   );
// }

// export default function Cards({ cardName, second, para }) {
//   return (
//     <div
//       className="
//         bg-teal-900 text-white
//         flex flex-col items-center text-center
//         p-4 sm:p-5 lg:p-6
//         rounded-md
//         shadow-inner drop-shadow-md
//         h-full
//       "
//     >
//       {/* Top label */}
//       <div className="text-gray-400 text-sm sm:text-base">
//         {cardName}
//       </div>

//       {/* Title (fixed height for alignment) */}
//       <div
//         className="
//           mt-2
//           flex items-center justify-center
//           min-h-[3rem] sm:min-h-[3.5rem]
//           text-lg sm:text-xl lg:text-2xl
//           font-semibold
//         "
//       >
//         {second}
//       </div>

//       {/* Description */}
//       <p className="mt-3 px-2 sm:px-4 text-sm sm:text-base leading-relaxed">
//         {para}
//       </p>
//     </div>
//   );
// }

export default function Cards({ cardName, second, para, bgImage }) {
  return (
    <section className="w-full bg-[#f5f5dc] px-4 sm:px-6 lg:px-12 flex justify-center">
      <div
        className="
          relative overflow-hidden
          w-full sm:max-w-sm md:max-w-md lg:w-[500px]
          min-h-[220px]
          rounded-md
          shadow-inner drop-shadow-md
          my-4
        "
      >
        {/* Blurred background image */}
        <div
          className="
            absolute inset-0
            bg-cover bg-center
            scale-110
            blur-sm
          "
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div
          className="
            relative z-10
            flex flex-col justify-center items-center text-center
            h-full
            p-4 sm:p-5 lg:p-6
            text-white
          "
        >
          <div className="text-gray-300 text-sm sm:text-base">
            {cardName}
          </div>

          <div className="mt-1 text-lg sm:text-xl lg:text-2xl font-semibold">
            {second}
          </div>

          <p className="mt-3 px-2 sm:px-4 text-sm sm:text-base leading-relaxed">
            {para}
          </p>
        </div>
      </div>
    </section>
  );
}
