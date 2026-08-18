import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroImage from "./HeroImage";
import SecondPage from "./SecondPage";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen min-h-[100dvh] max-h-[780px] overflow-hidden bg-gradient-to-b from-[#C5C5C5] via-[#8B8B8B] to-[#1A1A1A] md:h-screen md:min-h-screen md:max-h-none md:from-white md:via-[#E9E9E9]/100 md:to-[#0F1115]">
        
        {/* Background text PORTFOLIO - diperbesar sedikit */}
        <h1
          className="
            absolute left-1/2 -translate-x-1/2 select-none pointer-events-none z-0
            font-['Bebas_Neue'] leading-none tracking-[-0.05em]
            bg-gradient-to-b from-white/25 to-transparent
            bg-clip-text text-transparent

            /* Mobile */
            top-[28%] text-[145px]

            /* Desktop (original) */
            md:top-24 md:text-[280px] lg:text-[360px] xl:text-[410px]
            md:from-[#0F1115]/30 md:to-white/0
          "
        >
          PORTFOLIO
        </h1>

        <Header onOpenContact={() => setIsContactOpen(true)} />

        {/* ===== DESKTOP (ORIGINAL) ===== */}
        <div className="hidden md:block relative z-20 h-full">
          <HeroLeft />
          <HeroRight />
          <HeroImage />
        </div>

        {/* ===== MOBILE ===== */}
          <div className="md:hidden relative z-20 h-full">

            {/* Teks kiri */}
            <div className="absolute left-0 bottom-[130px] z-50 w-[58%] pl-5">
              <HeroLeft />
            </div>

            {/* Foto */}
            <div className="absolute right-[-70px] bottom-0 z-40 h-[100%] w-[90%]">
              <HeroImage />
            </div>

            {/* Tombol */}
            <div className="absolute bottom-0 left-0 right-0 z-50 px-5 pb-10">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="flex w-full items-center justify-center rounded-full bg-[#D7292C] py-5 text-[14px] font-bold uppercase tracking-[0.15em] text-white active:scale-[0.98] transition shadow-lg"
              >
                Let’s work together
              </button>
            </div>
          </div>
      </section>

      <SecondPage />

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;