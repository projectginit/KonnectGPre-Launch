// export default function Marquee() {
//   const places = [
//     "Matigara-1",
//     "Matigara-2",
//     "Atharokhai",
//     "Khawakhari",
//     "Champasari",
//   ];

//   return (
//     <div className="w-full overflow-hidden bg-[#4f7a00] text-white">
//       <div className="flex whitespace-nowrap animate-marquee-ltr">
        
//         {/* First copy */}
//         <div className="flex">
//           {places.map((place, index) => (
//             <span key={`a-${index}`} className="mx-6 text-lg">
//               {place}
//             </span>
//           ))}
//         </div>

//         {/* Second copy */}
//         <div className="flex">
//           {places.map((place, index) => (
//             <span key={`b-${index}`} className="mx-6 text-lg">
//               {place}
//             </span>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

export default function Marquee() {
  const places = [
    "Matigara-1",
    "Matigara-2",
    "Atharokhai",
    "Patharghata",
    "Champasari",
  ];

  return (
    <div className="relative w-screen overflow-hidden bg-[#4f7a00] text-white py-2">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#4f7a00] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#4f7a00] to-transparent z-10" />

      {/* Marquee track */}
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[...Array(1)].map((_, copyIndex) => (
          <div key={copyIndex} className="flex">
            {places.map((place, index) => (
              <span
                key={`${copyIndex}-${index}`}
                className="px-10 text-lg font-medium">
                {place}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
