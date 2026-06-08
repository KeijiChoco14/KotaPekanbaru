import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import nightImg from "@/assets/images/night-market.png";

export function NightCity() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img src={nightImg} alt="Pekanbaru Night" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500 mb-6 uppercase"
          >
            THE CITY<br/>AFTER DARK
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white/80 font-serif leading-relaxed mb-12"
          >
            When the sun sets, Pekanbaru transforms. Neon lights reflect off wet streets, the aroma of street food fills the air, and a vibrant urban energy takes over the capital.
          </motion.p>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Culinary Strip",
              "Modern Coffee Shops",
              "Night Markets",
              "Urban Nightlife"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                className="glassmorphism p-6 rounded-xl border border-secondary/20 hover:border-secondary/60 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,255,255,0.8)] mb-4" />
                <h4 className="text-lg font-bold text-white tracking-wide">{item}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
