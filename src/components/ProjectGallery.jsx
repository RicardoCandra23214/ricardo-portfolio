import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectGallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const slides = images.length > 1 ? [...images, images[0]] : images;

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (index === slides.length - 1) {
      const timeout = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, 600);
      return () => clearTimeout(timeout);
    } else {
      setWithTransition(true);
    }
  }, [index, slides.length]);

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-video w-full overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${index * 100}%` }}
          transition={withTransition ? { duration: 0.6, ease: "easeInOut" } : { duration: 0 }}
        >
          {slides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Preview ${i + 1}`}
              loading="lazy"
              className="h-full w-full shrink-0 object-contain p-5"
            />
          ))}
        </motion.div>
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 pb-4">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index % images.length === i ? "w-6 bg-[#D7292C]" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;