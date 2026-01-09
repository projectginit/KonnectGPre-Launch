export default function BusinessCTA() {
  return (
    <section className="w-full bg-[#f7f2e7] overflow-x-hidden">

      {/* Marquee strip */}
      <div className="w-full bg-[#4b6f00] text-white overflow-hidden">
        <div
          className="
            whitespace-nowrap animate-marquee
            text-sm sm:text-base lg:text-lg
            font-medium px-4 py-2
          "
        >
          Are you a local business <span className="font-semibold">owner?</span>
          &nbsp;|&nbsp;
          Want to <span className="font-semibold">start</span> your own Business?
        </div>
      </div>

      {/* Main CTA content */}
      <div className="py-10 sm:py-14 lg:py-20 flex flex-col items-center text-center px-4 sm:px-6">
        
        <p
          className="
            italic text-[#66023c]
            text-xl sm:text-2xl md:text-3xl lg:text-[36px]
            leading-snug
            max-w-4xl
          "
        >
          Get discovered by people near you – exactly <br className="hidden sm:block" />
          when they need you.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-8 sm:mt-12 lg:mt-16
            flex flex-col sm:flex-row
            gap-4 sm:gap-6 lg:gap-10
            w-full sm:w-auto
          "
        >
          <button
            className="
              bg-[#4b6f00] text-white
              text-base sm:text-lg lg:text-xl
              px-6 sm:px-8 lg:px-10
              py-3 sm:py-4
              rounded-lg shadow-md
              hover:opacity-90 transition
              w-full sm:w-auto
            "
          >
            List your Business
          </button>

          <button
            className="
              bg-[#4b6f00] text-white
              text-base sm:text-lg lg:text-xl
              px-6 sm:px-8 lg:px-10
              py-3 sm:py-4
              rounded-lg shadow-md
              hover:opacity-90 transition
              w-full sm:w-auto
            "
          >
            Enter missing Category
          </button>
        </div>
      </div>
    </section>
  );
}
