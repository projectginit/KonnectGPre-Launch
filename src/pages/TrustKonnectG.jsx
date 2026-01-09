// export default function TrustKonnectG() {
//   return (
//     <section className="w-full bg-[#f7f2e7] py-20 overflow-x-hidden">

//       {/* Top divider + badge */}
//       <div className="relative w-full border-t-2 border-[#66023c]">
//         <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#66023c] text-white px-6 py-3 text-2xl font-semibold rounded-sm">
//           Why people will trust konnectG?
//         </div>
//       </div>

//       {/* Content */}
//       <div className="mt-24 grid grid-cols-12 items-center px-16">

//         {/* Left brand */}
//         <div className="col-span-4 flex justify-center">
//           <h2 className="text-[42px] font-bold text-[#66023c]">
//             konnect<span className="font-normal">G</span>
//           </h2>
//         </div>

//         {/* Connector + points */}
//         <div className="col-span-8 relative">

//           {/* Center dot */}
//           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#66023c] rounded-full" />

//           {/* SVG curved lines */}
//           <svg
//             className="absolute left-0 top-0 h-full w-full"
//             viewBox="0 0 600 400"
//             fill="none"
//           >
//             <path d="M10 200 C150 120, 250 120, 380 120" stroke="#66023c" />
//             <path d="M10 200 C150 160, 250 160, 380 160" stroke="#66023c" />
//             <path d="M10 200 C150 200, 250 200, 380 200" stroke="#66023c" />
//             <path d="M10 200 C150 240, 250 240, 380 240" stroke="#66023c" />
//             <path d="M10 200 C150 280, 250 280, 380 280" stroke="#66023c" />
//           </svg>

//           {/* Points */}
//           <ul className="relative ml-64 space-y-6 text-[22px] text-slate-800">
//             <li className="flex items-center gap-3">
//               <span className="w-2 h-2 bg-[#66023c] rounded-full" />
//               <em>No spam calls, No middlemen</em>
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-2 h-2 bg-[#66023c] rounded-full" />
//               <em>Local businesses only</em>
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-2 h-2 bg-[#66023c] rounded-full" />
//               <em>Verified phone numbers</em>
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-2 h-2 bg-[#66023c] rounded-full" />
//               <em>Instant Solutions</em>
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-2 h-2 bg-[#66023c] rounded-full" />
//               <em>Save time, save money</em>
//             </li>
//           </ul>

//         </div>
//       </div>

//     </section>
//   );
// }

export default function TrustKonnectG() {
  return (
    <section className="w-full bg-[#f7f2e7] py-24 overflow-x-hidden">

      {/* Divider + badge */}
      <div className="relative w-full border-t-2 border-[#66023c]">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#66023c] text-white px-8 py-3 text-2xl font-semibold rounded-sm">
          Why people will trust konnectG?
        </div>
      </div>

      {/* Main layout */}
      <div className="mt-32 grid grid-cols-12 px-24 items-start">

        {/* Left brand */}
        <div className="col-span-4 flex justify-end pr-12">
          <h2 className="text-[48px] font-bold text-[#66023c]">
            konnect<span className="font-normal">G</span>
          </h2>
        </div>

        {/* Middle dot */}
        <div className="col-span-1 flex justify-center mt-6">
          <span className="w-3 h-3 bg-[#66023c] rounded-full"></span>
        </div>

        {/* Right list + curves */}
        <div className="col-span-7 relative pl-12">

          {/* SVG curves (anchored to 3rd bullet) */}
          <svg
            className="absolute left-0 top-[96px]"
            width="260"
            height="200"
            viewBox="0 0 260 200"
            fill="none"
          >
            <path d="M0 100 C80 40, 160 40, 260 40" stroke="#66023c" />
            <path d="M0 100 C80 80, 160 80, 260 80" stroke="#66023c" />
            <path d="M0 100 C80 120, 160 120, 260 120" stroke="#66023c" />
            <path d="M0 100 C80 160, 160 160, 260 160" stroke="#66023c" />
          </svg>

          {/* Bullet list */}
          <ul className="space-y-8 text-[24px] text-slate-800 italic">
            <li className="flex gap-4">
              <span className="text-[#66023c] text-3xl">•</span>
              No spam calls, No middlemen
            </li>
            <li className="flex gap-4">
              <span className="text-[#66023c] text-3xl">•</span>
              Local businesses only
            </li>
            <li className="flex gap-4 relative">
              <span className="text-[#66023c] text-3xl">•</span>
              Verified phone numbers
            </li>
            <li className="flex gap-4">
              <span className="text-[#66023c] text-3xl">•</span>
              Instant Solutions
            </li>
            <li className="flex gap-4">
              <span className="text-[#66023c] text-3xl">•</span>
              Save time, save money
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}
