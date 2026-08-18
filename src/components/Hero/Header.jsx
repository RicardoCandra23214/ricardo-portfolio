import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Header = ({ onOpenContact }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 pt-10 md:left-28 md:right-28 md:px-0 md:pt-7"
    >
      <div className="flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.08em] text-[#1B1A1B] md:text-base">
        <span className="text-[#D7292C]">WEB</span>
        <span>DEVELOPER</span>
        <span className="mx-1 text-[#1B1A1B]/40">|</span>
        <span className="text-[11px] font-normal tracking-[0.1em] text-[#1B1A1B]/70 md:text-sm">
          FULL STACK DEVELOPER
        </span>
      </div>

      <button
        type="button"
        onClick={onOpenContact}
        className="group hidden items-center gap-3 md:flex"
      >
        <span className="text-sm font-semibold tracking-[0.1em] text-[#1B1A1B] transition group-hover:text-[#D7292C]">
          LET'S WORK TOGETHER
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D7292C] transition group-hover:bg-[#D7292C]">
          <ArrowRight
            size={14}
            className="text-[#D7292C] transition group-hover:text-white"
          />
        </div>
      </button>
    </motion.header>
  );
};

export default Header;