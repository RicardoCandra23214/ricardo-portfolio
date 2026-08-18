import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HeroRight = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="
        z-30 w-full max-w-[280px] sm:max-w-[320px]
        flex flex-row justify-between gap-4
        md:absolute md:right-28 md:top-[350px] md:w-[180px] md:flex-col md:gap-0
        text-[#1B1A1B]/70 md:text-white/60
      "
    >
      <motion.div variants={item} className="flex flex-col items-center md:flex-row md:items-center md:justify-between py-2 md:py-4">
        <h2 className="font-mono text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#D7292C]">03</h2>
        <p className="text-[11px] sm:text-[13px] md:text-[16px] font-medium uppercase text-center md:text-left">Project</p>
      </motion.div>

      <div className="hidden md:block h-px bg-[#CFCFCF]" />

      <motion.div variants={item} className="flex flex-col items-center md:flex-row md:items-center md:justify-between py-2 md:py-4">
        <h2 className="font-mono text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#D7292C]">08+</h2>
        <p className="text-[11px] sm:text-[13px] md:text-[16px] font-medium uppercase text-center md:text-right">Tech Skills</p>
      </motion.div>

      <div className="hidden md:block h-px bg-[#CFCFCF]" />

      <motion.div variants={item} className="flex flex-col items-center md:flex-row md:items-center md:justify-between py-2 md:py-4">
        <h2 className="font-mono text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#D7292C] tracking-[-0.05em]">Fresh</h2>
        <p className="text-[11px] sm:text-[13px] md:text-[16px] font-medium uppercase text-center md:text-left">Graduate</p>
      </motion.div>
    </motion.div>
  );
};

export default HeroRight;