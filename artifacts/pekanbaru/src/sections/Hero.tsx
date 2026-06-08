import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/images/hero.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={heroImg}
          alt="Pekanbaru Cityscape"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
      </motion.div>

      <div className="z-30 flex flex-col items-center justify-center text-center px-4 mix-blend-difference">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-[12vw] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter leading-none drop-shadow-2xl"
        >
          PEKANBARU
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-3xl text-primary tracking-[0.3em] mt-4 font-serif italic"
        >
          THE CAPITAL OF OPPORTUNITY
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs tracking-widest text-white/50 uppercase mb-4">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-full bg-primary origin-top"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
