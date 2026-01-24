// import Hero from "../components/Hero";
// import Marquee from "../components/Marquee";

// export default function LaunchingSoon() {
//   return (
//     <div className="h-auto w-screen bg-[#f5f5dc]">
//       <Hero />
//       <Marquee/>
//     </div>
//   );
// }

// import Hero from "../components/Hero";
// import Marquee from "../components/Marquee";
// import matigaraMap from "../assets/matigara-map.png";

// export default function LaunchingSoon() {
//   return (
//     <div
//       className="relative w-screen min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${matigaraMap})` }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         <Hero />
//         <Marquee />
//       </div>
//     </div>
//   );
// }

import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import matigaraMap from "../assets/matigara-map.png";

export default function LaunchingSoon() {
  return (
    <div className="w-screen bg-[#f5f5dc]">
      
      {/* HERO SECTION WITH BACKGROUND */}
      <div
        className="
          relative w-full
          bg-cover bg-center
          min-h-[22.5vh]
        "
        style={{ backgroundImage: `url(${matigaraMap})` }}
      >
        {/* Overlay + mobile blur */}
        <div
          className="
            absolute inset-0
            bg-black/40
            backdrop-blur-sm
            md:backdrop-blur-0
          "
        ></div>

        {/* Hero content */}
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      {/* MARQUEE (NO BACKGROUND) */}
      <Marquee />

    </div>
  );
}
