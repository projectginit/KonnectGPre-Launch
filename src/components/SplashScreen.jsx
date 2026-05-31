import logo from "../assets/kong_splash_screen.jpeg";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-[#66023c] flex items-center justify-center z-[9999]">
      <img
        src={logo}
        alt="KonnectG"
        className="w-56 md:w-80 splash-logo"
      />
    </div>
  );
}