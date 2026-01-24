// import React, { useState } from "react";
// import logo from "../assets/logo_final.png"

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-screen bg-[#66023c] text-white">
//       <div className="max-w-screen mx-auto px-4 py-4 flex items-center justify-between">
        
//         {/* LEFT: Logo */}
//         <div className="text-xl font-medium tracking-wide cursor-pointer">
//           <img src={logo} alt="KonnectG Logo" className="h-10 w-auto object-contain" />
//         </div>

//         {/* RIGHT: Menu */}
//         <div className="flex items-center gap-6 relative">
          
//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setOpen(!open)}
//               className="flex items-center gap-2 hover:opacity-90 focus:outline-none"
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

//             {/* Dropdown Items */}
//             {open && (
//               <div className="absolute h-52 right-0 mt-2 w-70 bg-white text-black rounded-lg shadow-lg overflow-scroll">
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Electrician/Plumber
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   AC / Refrigerator / Appliance Technicians
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   House Cleaning & Pest Control
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Gas Agencies / Water Supply Services
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Bike / Car Garage
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Repair & Servicing Centers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Car Wash Centers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Path Labs
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Physiotherapy Centers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Pet Care / Veterinary Shops
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Dairy & Poultry Farms
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Electrical & Hardware Stores
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Paint Shops
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Furniture Stores
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Tailor & Stitching Units
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Shoe Store / Footwear Retailers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Beauty Parlors / Salons
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Men’s Grooming Studios / Barbershops
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Laundry / Dry Cleaning Services
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Spare Parts Dealers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Printing / Xerox / Cyber Cafes
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Internet Service Providers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   CCTV / Security System Dealers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Schools / Coaching Institutes
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Private Tutors
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Skill Development Centers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Computer Training Institutes
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Dance / Music / Art Schools
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Daycare & Creches
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Event Planners / Decorators
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Wedding / Photography Studios
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Photography / Videography Services
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   DJs / Sound & Light Providers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Banquet Halls / Community Centers
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Catering Services
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Florists / Balloon Decorators
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   NGOs / Charitable Trusts
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Local News / Media Outlets
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Courier / Parcel Services
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Handicraft & Cottage Industry Producers
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* CTA Button */}
//           <button className="bg-white text-[#66023c] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
//             List Your Business
//           </button>
//         </div>
//       </div>
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

  return (
    <nav className="relative z-50 w-full  bg-[#66023c] text-white">
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

          {/* CTA */}
          <button className="rounded-lg bg-white px-4 py-2 font-semibold text-[#66023c] hover:bg-gray-100">
            List Your Business
          </button>
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
        <div className="md:hidden bg-[#66023c] border-t border-white/20 px-4 pb-4">
          <button
            onClick={() => setOpen(!open)}
            className="w-full py-3 text-left font-medium"
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

          <button className="mt-4 w-full rounded-lg bg-white px-4 py-3 font-semibold text-[#66023c]">
            List Your Business
          </button>
        </div>
      )}
    </nav>
  );
}
