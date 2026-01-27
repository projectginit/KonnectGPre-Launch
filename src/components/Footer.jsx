// import ProjectGlogo from '../assets/ProjectGlogo.png'

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#6a0036] text-white px-6 py-4">
      
//       {/* Top row */}
//       <div className="flex flex-wrap justify-between gap-8">

//         {/* Left: Social */}
//         <div className="space-y-2 text-sm">
//           <p className="flex items-center gap-2">
//             <span>📸</span> @konnectg.com
//           </p>
//           <p className="flex items-center gap-2">
//             <span>📘</span> konnectG
//           </p>
//           <p className="flex items-center gap-2">
//             <span>🐦</span> __________
//           </p>
//         </div>

//         {/* Middle: Contact */}
//         <div className="space-y-2 text-sm">
//           <h4 className="font-semibold text-base mb-1">Contact</h4>
//           <p className="flex items-center gap-2">
//             <span>📞</span> 738 467 4247
//           </p>
//           <p className="flex items-center gap-2">
//             <span>📧</span> info.projectintig@gmail.com
//           </p>
//         </div>

//         {/* Right: Promise */}
//         <div className="space-y-2 text-sm">
//           <h4 className="font-semibold text-base mb-1">Promise</h4>
//           <ul className="space-y-1">
//             <li>• Verified listings</li>
//             <li>• Local focus</li>
//             <li>• Simple search</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom row */}
//       <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs opacity-90">

//         {/* Legal */}
//         <p>
//           DISCLAIMER | PRIVACY POLICY | TERMS OF USE | MERCHANT LISTING
//         </p>

//         {/* Branding */}
//         <div className="flex items-center gap-2">
//           <span className="text-lg font-bold"><img src={ProjectGlogo} alt="" className='h-12 w-auto' /></span>
//           <span className="bg-teal-400 text-black px-2 py-1 rounded text-[11px] font-semibold">
//             powered by PROJECT-G INITIATIVE
//           </span>
//         </div>
//       </div>

//     </footer>
//   );
// }


import ProjectGlogo from "../assets/ProjectGlogo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#6a0036] text-white px-4 sm:px-6 lg:px-10 py-6 overflow-x-hidden">

      {/* Top row */}
      <div
        className="
          flex flex-col sm:flex-row
          justify-between
          gap-8
          text-sm
        "
      >
        {/* Social */}
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <span>📸</span> @konnectg.com
          </p>
          <p className="flex items-center gap-2">
            <span>📘</span> konnectG
          </p>
          <p className="flex items-center gap-2">
            <span>🐦</span> __________
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="font-semibold text-base">Contact</h4>
          <p className="flex items-center gap-2">
            <span>📞</span> +91 738-467-4247
          </p>
          <p className="flex items-center gap-2 break-all sm:break-normal">
            <span>📧</span> hello@konnectg.com
          </p>
        </div>

        {/* Promise */}
        <div className="space-y-2">
          <h4 className="font-semibold text-base">Promise</h4>
          <ul className="space-y-1">
            <li>• Verified listings</li>
            <li>• Local focus</li>
            <li>• Simple search</li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div
        className="
          mt-6
          flex flex-col sm:flex-row
          items-start sm:items-center
          justify-between
          gap-4
          text-xs
          opacity-90
        "
      >
        {/* Legal */}
        <p className="leading-relaxed">
          DISCLAIMER | PRIVACY POLICY | TERMS OF USE | MERCHANT LISTING
        </p>

        {/* Branding */}
        <div className="flex items-center gap-3">
          <img
            src={ProjectGlogo}
            alt="Project-G logo"
            className="h-10 sm:h-12 w-auto"
          />
          <span className="bg-teal-400 text-black px-2 py-1 rounded text-[11px] font-semibold">
            powered by PROJECT-G INITIATIVE
          </span>
        </div>
      </div>

    </footer>
  );
}
