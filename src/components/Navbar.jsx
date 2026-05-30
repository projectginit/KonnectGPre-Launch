// import { useState } from "react";
// import logo from "../assets/logo_final.png";

// const categories = [
//   "Electrician / Plumber",
//   "AC / Refrigerator / Appliance Technicians",
//   "House Cleaning & Pest Control",
//   "Gas Agencies / Water Supply Services",
//   "Bike / Car Garage",
//   "Repair & Servicing Centers",
//   "Car Wash Centers",
//   "Path Labs",
//   "Physiotherapy Centers",
//   "Pet Care / Veterinary Shops",
//   "Dairy & Poultry Farms",
//   "Electrical & Hardware Stores",
//   "Paint Shops",
//   "Furniture Stores",
//   "Tailor & Stitching Units",
//   "Shoe Store / Footwear Retailers",
//   "Beauty Parlors / Salons",
//   "Men’s Grooming Studios / Barbershops",
//   "Laundry / Dry Cleaning Services",
//   "Spare Parts Dealers",
//   "Printing / Xerox / Cyber Cafes",
//   "Internet Service Providers",
//   "CCTV / Security System Dealers",
//   "Schools / Coaching Institutes",
//   "Private Tutors",
//   "Skill Development Centers",
//   "Computer Training Institutes",
//   "Dance / Music / Art Schools",
//   "Daycare & Creches",
//   "Event Planners / Decorators",
//   "Wedding / Photography Studios",
//   "Photography / Videography Services",
//   "DJs / Sound & Light Providers",
//   "Banquet Halls / Community Centers",
//   "Catering Services",
//   "Florists / Balloon Decorators",
//   "NGOs / Charitable Trusts",
//   "Local News / Media Outlets",
//   "Courier / Parcel Services",
//   "Handicraft & Cottage Industry Producers",
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   return (
//     <nav className="relative z-50 w-full  bg-[#66023c] text-white">
//       <div className="mx-auto flex items-center justify-between px-4 py-4">

//         {/* Logo */}
//         <img
//           src={logo}
//           alt="KonnectG Logo"
//           className="h-9 w-auto cursor-pointer"
//         />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6 relative">

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setOpen(!open)}
//               className="flex items-center gap-2 font-medium hover:opacity-90"
//             >
//               Search By Categories
//               <svg
//                 className={`w-4 h-4 transition-transform ${
//                   open ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {open && (
//               <div className="absolute right-0 mt-2 w-72 max-h-64 overflow-y-auto rounded-lg bg-white text-black shadow-lg">
//                 {categories.map((item, i) => (
//                   <button
//                     key={i}
//                     className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* CTA */}
//           <button className="rounded-lg bg-white px-4 py-2 font-semibold text-[#66023c] hover:bg-gray-100">
//             List Your Business
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setMobileMenu(!mobileMenu)}
//           className="md:hidden"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="md:hidden bg-[#66023c] border-t border-white/20 px-4 pb-4">
//           <button
//             onClick={() => setOpen(!open)}
//             className="w-full py-3 text-left font-medium"
//           >
//             Search By Categories
//           </button>

//           {open && (
//             <div className="max-h-64 overflow-y-auto rounded-md bg-white text-black">
//               {categories.map((item, i) => (
//                 <button
//                   key={i}
//                   className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           )}

//           <button className="mt-4 w-full rounded-lg bg-white px-4 py-3 font-semibold text-[#66023c]">
//             List Your Business
//           </button>
//         </div>
//       )}
      

//     </nav>
//   );
// }

// import { useState } from "react";
// import logo from "../assets/logo_final.png";

// const categories = [
//   "Electrician / Plumber",
//   "AC / Refrigerator / Appliance Technicians",
//   "House Cleaning & Pest Control",
//   "Gas Agencies / Water Supply Services",
//   "Bike / Car Garage",
//   "Repair & Servicing Centers",
//   "Car Wash Centers",
//   "Path Labs",
//   "Physiotherapy Centers",
//   "Pet Care / Veterinary Shops",
//   "Dairy & Poultry Farms",
//   "Electrical & Hardware Stores",
//   "Paint Shops",
//   "Furniture Stores",
//   "Tailor & Stitching Units",
//   "Shoe Store / Footwear Retailers",
//   "Beauty Parlors / Salons",
//   "Men’s Grooming Studios / Barbershops",
//   "Laundry / Dry Cleaning Services",
//   "Spare Parts Dealers",
//   "Printing / Xerox / Cyber Cafes",
//   "Internet Service Providers",
//   "CCTV / Security System Dealers",
//   "Schools / Coaching Institutes",
//   "Private Tutors",
//   "Skill Development Centers",
//   "Computer Training Institutes",
//   "Dance / Music / Art Schools",
//   "Daycare & Creches",
//   "Event Planners / Decorators",
//   "Wedding / Photography Studios",
//   "Photography / Videography Services",
//   "DJs / Sound & Light Providers",
//   "Banquet Halls / Community Centers",
//   "Catering Services",
//   "Florists / Balloon Decorators",
//   "NGOs / Charitable Trusts",
//   "Local News / Media Outlets",
//   "Courier / Parcel Services",
//   "Handicraft & Cottage Industry Producers",
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   return (
//     <nav className="relative z-50 w-full bg-[#66023c] text-white">
//       <div className="mx-auto flex items-center justify-between px-4 py-4">

//         {/* Logo */}
//         <img
//           src={logo}
//           alt="KonnectG Logo"
//           className="h-9 w-auto cursor-pointer"
//         />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6 relative">

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setOpen(!open)}
//               className="flex items-center gap-2 font-medium hover:opacity-90"
//             >
//               Search By Categories
//               <svg
//                 className={`w-4 h-4 transition-transform ${
//                   open ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>

//             {open && (
//               <div className="absolute right-0 mt-2 w-72 max-h-64 overflow-y-auto rounded-lg bg-white text-black shadow-lg">
//                 {categories.map((item, i) => (
//                   <button
//                     key={i}
//                     className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Language Switch (Coming Soon) */}
//           <div className="hidden lg:flex items-center rounded-full bg-white/20 p-1 text-xs font-semibold select-none">
//             <div className="px-3 py-1 text-white/60 cursor-not-allowed">
//               हिंदी
//             </div>

//             <div className="px-4 py-1 mx-1 rounded-full bg-white text-[#66023c]">
//               Coming Soon
//             </div>

//             <div className="px-3 py-1 text-white/60 cursor-not-allowed">
//               বাংলা
//             </div>
//           </div>

//           {/* CTA */}
//           <button className="rounded-lg bg-white px-4 py-2 font-semibold text-[#66023c] hover:bg-gray-100 transition">
//             List Your Business
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setMobileMenu(!mobileMenu)}
//           className="md:hidden"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="md:hidden bg-[#66023c] border-t border-white/20 px-4 pb-4">
//           <button
//             onClick={() => setOpen(!open)}
//             className="w-full py-3 text-left font-medium"
//           >
//             Search By Categories
//           </button>

//           {open && (
//             <div className="max-h-64 overflow-y-auto rounded-md bg-white text-black">
//               {categories.map((item, i) => (
//                 <button
//                   key={i}
//                   className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           )}

//           <button className="mt-4 w-full rounded-lg bg-white px-4 py-3 font-semibold text-[#66023c]">
//             List Your Business
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import logo from "../assets/logo_final.png";

const categories = [
  "Electrician / Plumber",
  "AC / Refrigerator / Appliance Technicians",
  "House Cleaning & Pest Control",
  "Gas Agencies / Water Supply Services",
  "Bike / Car Garage",
  "Repair & Servicing Centers",
  "Car Wash Centers",
  "Path Labs",
  "Physiotherapy Centers",
  "Pet Care / Veterinary Shops",
  "Dairy & Poultry Farms",
  "Electrical & Hardware Stores",
  "Paint Shops",
  "Furniture Stores",
  "Tailor & Stitching Units",
  "Shoe Store / Footwear Retailers",
  "Beauty Parlors / Salons",
  "Men’s Grooming Studios / Barbershops",
  "Laundry / Dry Cleaning Services",
  "Spare Parts Dealers",
  "Printing / Xerox / Cyber Cafes",
  "Internet Service Providers",
  "CCTV / Security System Dealers",
  "Schools / Coaching Institutes",
  "Private Tutors",
  "Skill Development Centers",
  "Computer Training Institutes",
  "Dance / Music / Art Schools",
  "Daycare & Creches",
  "Event Planners / Decorators",
  "Wedding / Photography Studios",
  "Photography / Videography Services",
  "DJs / Sound & Light Providers",
  "Banquet Halls / Community Centers",
  "Catering Services",
  "Florists / Balloon Decorators",
  "NGOs / Charitable Trusts",
  "Local News / Media Outlets",
  "Courier / Parcel Services",
  "Handicraft & Cottage Industry Producers",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const LanguagePill = ({ mobile = false }) => (
    <div
      className={`flex items-center rounded-full bg-white/20 p-1 text-xs font-semibold select-none ${
        mobile ? "w-full justify-center mt-4" : ""
      }`}
    >
      <div className="px-3 py-1 text-white/60 cursor-not-allowed">
        हिंदी
      </div>

      <div className="px-4 py-1 mx-1 rounded-full bg-white text-[#66023c]">
        Coming Soon
      </div>

      <div className="px-3 py-1 text-white/60 cursor-not-allowed">
        বাংলা
      </div>
    </div>
  );

  return (
    <nav className="relative z-50 w-full bg-[#66023c] text-white">
      <div className="mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <img
          src={logo}
          alt="KonnectG Logo"
          className="h-9 w-auto cursor-pointer"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 relative">

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 font-medium hover:opacity-90"
            >
              Search By Categories
              <svg
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-72 max-h-64 overflow-y-auto rounded-lg bg-white text-black shadow-lg">
                {categories.map((item, i) => (
                  <button
                    key={i}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Switch (Desktop) */}
          <LanguagePill />

          {/* CTA */}
          <a
            href="#list-business-open"
            className="rounded-lg bg-white px-4 py-2 font-semibold text-[#66023c] hover:bg-gray-100 transition"
          >
            List Your Business
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#66023c] border-t border-white/20 px-4 pb-6">

          {/* Language Switch (Mobile) */}
          <LanguagePill mobile />

          <button
            onClick={() => setOpen(!open)}
            className="w-full py-3 text-left font-medium mt-4"
          >
            Search By Categories
          </button>

          {open && (
            <div className="max-h-64 overflow-y-auto rounded-md bg-white text-black">
              {categories.map((item, i) => (
                <button
                  key={i}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          )}

            <a
              href="#list-business-open"
              className="mt-4 block w-full rounded-lg bg-white px-4 py-3 font-semibold text-[#66023c] text-center"
            >
              List Your Business
            </a>
        </div>
      )}
    </nav>
  );
}
