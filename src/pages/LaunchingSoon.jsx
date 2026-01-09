import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import NotifyForm from "../components/NotifyForm";

export default function LaunchingSoon() {
  return (
    <div className="h-auto w-screen bg-[#f5f5dc]">
      <Hero />
        <Marquee/>
      <p className="text-center mt-6 text-[#66023c] text-lg">
        We’re verifying businesses and preparing the platform for you.
      </p>
      <NotifyForm />
    </div>
  );
}
