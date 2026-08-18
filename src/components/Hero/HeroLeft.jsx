import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import CvImage from "../../assets/images/cv.webp";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const HeroLeft = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full md:absolute md:left-28 md:top-[250px] md:max-w-[350px]"
    >
      <motion.p
        variants={item}
        className="font-['Caveat'] text-[24px] text-white/90 md:text-[26px] md:text-white"
      >
        Hello, i'm
      </motion.p>

      <motion.h1
        variants={item}
        className="mt-5 text-[34px] font-bold leading-[0.95] tracking-[-0.04em] text-[#1B1A1B] md:text-[48px]"
      >
        RICARDO
      </motion.h1>

      <motion.h1
        variants={item}
        className="text-[34px] font-bold leading-[0.95] tracking-[-0.04em] text-[#D7292C] md:text-[48px]"
      >
        CANDRA
      </motion.h1>

      {/* Desktop - teks biasa */}
      <motion.p
        variants={item}
        className="mt-2 hidden max-w-none text-[12px] leading-[1.4] text-[#1B1A1B] md:block"
      >
        Fresh Graduate in Informatics Engineering, passionate about building scalable web
        applications, solving real-world problems, and continuously learning new technologies.
      </motion.p>

      {/* Mobile - line break sesuai Figma */}
      <motion.p
        variants={item}
        className="mt-2 block max-w-[210px] text-[11px] leading-[1.45] text-[#1B1A1B]/90 md:hidden"
      >
        Fresh Graduate Informatics Engineering
        <br />
        passionate about building scalable web
        <br />
        applications, solving real-world 
        <br />
        problems, and continuously 
        <br />
        learning new technologies.
      </motion.p>

      <motion.a
        variants={item}
        href={CvImage}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-2.5 inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[#D7292C]"
      >
        Preview CV
        <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
      </motion.a>

      <motion.div
        variants={item}
        className="mt-24 flex items-center gap-1.5 md:mt-14"
      >
        <MapPin size={12} className="text-white/75 md:text-white" />
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/65 md:text-[10px] md:text-white/60">
          Kota Pontianak, Indonesia
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HeroLeft;