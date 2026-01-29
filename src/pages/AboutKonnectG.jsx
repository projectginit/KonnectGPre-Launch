

// import introVideo from "../assets/stickfigure1.mp4";
// import introVideo1 from "../assets/stickfigure2.mp4";

// export default function AboutKonnectG() {
//   return (
//     <section className="w-full mt-10 bg-[#f5f5dc]">

//       {/* ================= WHAT IS KONNECTG ================= */}
//       <div className="relative w-full border-t-2 border-[#66023c]">
//         <div
//           className="
//             absolute -top-6 left-0
//             bg-[#66023c] text-white
//             px-4 py-2
//             text-lg sm:text-2xl lg:text-4xl
//             font-semibold
//             rounded-r-md
//           "
//         >
//           What is konnectG?
//         </div>
//       </div>

//       {/* CONTENT + VIDEO */}
//       <div className="px-4 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* TEXT */}
//           <div className="space-y-6">
//             <p
//               className="
//                 text-base sm:text-xl lg:text-[30px]
//                 leading-relaxed
//                 text-slate-800
//                 max-w-5xl
//               "
//             >
//               <span className="font-semibold text-teal-700">konnectG</span> is a
//               hyper-local <span className="font-semibold">discovery</span>{" "}
//               platform that helps you find nearby,{" "}
//               <span className="font-semibold">verified local services</span> –
//               quickly and without confusion.
//             </p>

//             <ul
//               className="
//                 space-y-3
//                 text-base sm:text-lg lg:text-[26px]
//                 text-slate-800
//               "
//             >
//               <li className="flex gap-2">
//                 <span className="text-[#66023c]">•</span>
//                 No <span className="font-semibold">unnecessary apps</span>
//               </li>
//               <li className="flex gap-2">
//                 <span className="text-[#66023c]">•</span>
//                 No <span className="font-semibold">spam</span>
//               </li>
//               <li className="flex gap-2">
//                 <span className="text-[#66023c]">•</span>
//                 Direct <span className="font-semibold">phone numbers</span>
//               </li>
//             </ul>
//           </div>

//           {/* VIDEO */}
//           <div className="flex justify-center">
//             <div
//               className="
//                 w-full
//                 max-w-sm sm:max-w-md lg:max-w-lg
//                 aspect-square
//                 rounded-xl
//                 overflow-hidden
//               "
//             >
//               <video
//                 src={introVideo}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ================= WHY KONNECTG ================= */}
//       <div className="relative w-full border-t-2 border-[#66023c]">
//         <div
//           className="
//             absolute -top-6 right-0
//             bg-[#66023c] text-white
//             px-4 py-2
//             text-lg sm:text-2xl lg:text-4xl
//             font-semibold
//             rounded-l-md
//           "
//         >
//           Why konnectG?
//         </div>
//       </div>

//       <div className="px-4 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* TEXT */}
//           <div className="space-y-6">
//             <p
//               className="
//                 text-base sm:text-xl lg:text-[30px]
//                 leading-relaxed
//                 text-slate-800
//                 max-w-5xl
//               "
//             >
//               <span className="font-semibold">
//                 Local businesses deserve local recognition.
//               </span>
//               <br />
//               Matigara Block becomes one of the first blocks to build its own
//               online ecosystem – not controlled by big online giants.
//             </p>

//             <ul
//               className="
//                 space-y-3
//                 text-base sm:text-lg lg:text-[26px]
//                 text-slate-800
//               "
//             >
//               <li className="flex gap-2">
//                 <span className="text-[#66023c]">•</span>
//                 A <span className="font-semibold">shield</span> for local businesses.
//               </li>
//               <li className="flex gap-2">
//                 <span className="text-[#66023c]">•</span>
//                 A helping hand for{" "}
//                 <span className="font-semibold">local families</span>.
//               </li>
//             </ul>
//           </div>

//           {/* VIDEO */}
//           <div className="flex justify-center">
//             <div
//               className="
//                 w-full
//                 max-w-sm sm:max-w-md lg:max-w-lg
//                 aspect-square
//                 rounded-xl
//                 overflow-hidden
//               "
//             >
//               <video
//                 src={introVideo1}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }

import introVideo from "../assets/stickfigure1.mp4";
import introVideo1 from "../assets/stickfigure2.mp4";

export default function AboutKonnectG() {
  return (
    <section className="w-full mt-10 bg-[#f5f5dc]">

      {/* ================= WHAT IS KONNECTG ================= */}
      <div className="relative w-full border-t-2 border-[#66023c]">
        <div
          className="
            absolute -top-6 left-0
            bg-[#66023c] text-white
            px-4 py-2
            text-lg sm:text-2xl lg:text-4xl
            font-semibold
            rounded-r-md
          "
        >
          What is konnectG?
        </div>
      </div>

      {/* CONTENT + VIDEO */}
      <div className="px-4 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div
          className="
            grid grid-cols-[1fr_auto]
            md:grid-cols-2
            gap-6 md:gap-12
            items-center
          "
        >
          {/* TEXT */}
          <div className="space-y-5">
            <p
              className="
                text-base sm:text-xl lg:text-[30px]
                leading-relaxed
                text-slate-800
                max-w-5xl
              "
            >
              <span className="font-semibold text-teal-700">konnectG</span> is a
              hyper-local <span className="font-semibold">discovery</span>{" "}
              platform that helps you find nearby,{" "}
              <span className="font-semibold">verified local services</span> –
              quickly and without confusion.
            </p>

            <ul
              className="
                space-y-3
                text-base sm:text-lg lg:text-[26px]
                text-slate-800
              "
            >
              <li className="flex gap-2">
                <span className="text-[#66023c]">•</span>
                No <span className="font-semibold">unnecessary apps</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#66023c]">•</span>
                No <span className="font-semibold">spam</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#66023c]">•</span>
                Direct <span className="font-semibold">phone numbers</span>
              </li>
            </ul>
          </div>

          {/* VIDEO */}
          <div className="flex justify-end md:justify-center">
            <div
              className="
                aspect-square
                w-20 sm:w-28
                md:w-56
                lg:w-72
                rounded-xl
                overflow-hidden
              "
            >
              <video
                src={introVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= WHY KONNECTG ================= */}
      <div className="relative w-full border-t-2 border-[#66023c]">
        <div
          className="
            absolute -top-6 right-0
            bg-[#66023c] text-white
            px-4 py-2
            text-lg sm:text-2xl lg:text-4xl
            font-semibold
            rounded-l-md
          "
        >
          Why konnectG?
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div
          className="
            grid grid-cols-[1fr_auto]
            md:grid-cols-2
            gap-6 md:gap-12
            items-center
          "
        >
          {/* TEXT */}
          <div className="space-y-5">
            <p
              className="
                text-base sm:text-xl lg:text-[30px]
                leading-relaxed
                text-slate-800
                max-w-5xl
              "
            >
              <span className="font-semibold">
                Local businesses deserve local recognition.
              </span>
              <br />
              Matigara Block becomes one of the first blocks to build its own
              online ecosystem – not controlled by big online giants.
            </p>

            <ul
              className="
                space-y-3
                text-base sm:text-lg lg:text-[26px]
                text-slate-800
              "
            >
              <li className="flex gap-2">
                <span className="text-[#66023c]">•</span>
                A <span className="font-semibold">shield</span> for local businesses.
              </li>
              <li className="flex gap-2">
                <span className="text-[#66023c]">•</span>
                A helping hand for{" "}
                <span className="font-semibold">local families</span>.
              </li>
            </ul>
          </div>

          {/* VIDEO */}
          <div className="flex justify-end md:justify-center">
            <div
              className="
                aspect-square
                w-20 sm:w-28
                md:w-56
                lg:w-72
                rounded-xl
                overflow-hidden
              "
            >
              <video
                src={introVideo1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
