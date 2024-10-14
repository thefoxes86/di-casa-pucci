import CssFilterConverter from "css-filter-converter";
import {
  AnimatePresence,
  useTransform,
  motion,
  useScroll,
  useSpring,
  cubicBezier,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ScrollParallaxComponent = ({
  className,
  color,
  src,
  offset,
  ...props
}) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, offset);
  const colorFilter = CssFilterConverter.hexToFilter(color);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className={`scroll_component ${className}`}
        style={{ y, fill: color }}
      >
        <Image
          style={{ filter: colorFilter.color }}
          priority
          src={src}
          alt="virgolette"
          loading="lazy"
        />
      </motion.div>
    </AnimatePresence>
  );
};

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [distance, -distance], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    useSpring: true,
  });
}

export default ScrollParallaxComponent;
