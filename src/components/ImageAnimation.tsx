import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ImageScrollProps {
  src: string;
  alt?: string;
}

export const ImageScroll = ({ src, alt }: ImageScrollProps) => {
  const scrollY = useMotionValue(0);

  const smoothScrollY = useSpring(scrollY, { stiffness: 40, damping: 25 });

  const rotateX = useTransform(
    smoothScrollY,
    [0, window.innerHeight * 1.2], 
    [80, 0] 
  );

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="relative w-full h-auto sm:h-screen flex justify-center items-center perspective-1000 p-4">
      {/* Card */}
      <div className="w-full max-w-[90%] sm:max-w-[80%] aspect-[16/9] overflow-visible">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover origin-bottom rounded-3xl"
          style={{
            rotateX,
            boxShadow: "0 12px 24px 4px #2667ff1f",
          }}
        />
      </div>
    </div>
  );
};
