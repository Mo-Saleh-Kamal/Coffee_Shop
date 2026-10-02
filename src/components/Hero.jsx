import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Hero = ({ onNavigate }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const title = "استمتع بأفضل قهوة في المدينة";
  const words = title.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const child = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ scale }} />
      <div className="hero-overlay" />

      <motion.div className="hero-content" style={{ y, opacity }}>
        <motion.h1 variants={container} initial="hidden" animate="visible">
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={child}
              className={word.includes("قهوة") ? "highlight" : ""}
              style={{ display: "inline-block", marginLeft: "0.25rem" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          حبوب مختارة بعناية، تحميص طازج يومياً، ومذاق لا يُنسى
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <MagneticButton
            className="btn primary"
            onClick={() => onNavigate("menu")}
          >
            <span>اطلب الآن</span>
          </MagneticButton>
          <MagneticButton
            className="btn secondary"
            onClick={() => onNavigate("about")}
          >
            <span>اكتشف المزيد</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span></span>
      </motion.div>
    </section>
  );
};

export default Hero;
