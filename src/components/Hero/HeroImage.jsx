import { motion } from "framer-motion";
import ProfileDesktop from "../../assets/images/profile.webp";
import ProfileMobile from "../../assets/images/profileMobile.webp";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="
        h-full w-full
        md:absolute md:bottom-0 md:left-1/2
        md:h-auto md:w-auto md:-translate-x-1/2
      "
    >
      {/* Foto Mobile */}
      <img
        src={ProfileMobile}
        alt="Ricardo Candra"
        draggable={false}
        className="
          absolute bottom-0 right-0
          h-full w-full
          select-none
          object-contain object-bottom
          md:hidden
        "
      />

      {/* Foto Desktop */}
      <img
        src={ProfileDesktop}
        alt="Ricardo Candra"
        draggable={false}
        className="
          hidden
          h-auto w-[450px]
          select-none
          object-contain object-bottom
          md:block
        "
      />
    </motion.div>
  );
};

export default HeroImage;