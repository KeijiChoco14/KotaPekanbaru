import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

export function Contact() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;

    gsap.to(buttonRef.current, {
      x,
      y,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-tight"
        >
          READY TO EXPLORE<br />
          <span className="text-primary">PEKANBARU?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-muted-foreground font-serif mb-16"
        >
          Plan your journey to the capital of opportunity today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="interactive relative overflow-hidden rounded-full bg-primary text-black font-bold text-xl px-12 py-6 tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(234,179,8,0.3)]"
          >
            Start Your Journey
          </button>
        </motion.div>

        <div className="mt-32 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-muted-foreground font-sans">
          <p>© {new Date().getFullYear()} Pekanbaru City. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors interactive">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors interactive">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors interactive">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
}
