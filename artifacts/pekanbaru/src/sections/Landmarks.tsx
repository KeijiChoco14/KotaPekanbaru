import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

import masjidImg from "@/assets/images/masjid-annur.png";
import libraryImg from "@/assets/images/library.png";
import pasarImg from "@/assets/images/pasar-bawah.png";
import alamImg from "@/assets/images/alam-mayang.png";
import lembahImg from "@/assets/images/lembah-sari.png";

gsap.registerPlugin(ScrollTrigger);

const landmarks = [
  {
    title: "Masjid Raya An-Nur",
    desc: "The Grand Mosque, architectural icon blending Malay, Turkish, Arabic, and Indian styles.",
    img: masjidImg,
  },
  {
    title: "Soeman HS Library",
    desc: "A modern knowledge hub with a roof inspired by the traditional Malay reading desk.",
    img: libraryImg,
  },
  {
    title: "Pasar Bawah",
    desc: "The historic marketplace where trade and culture intersect.",
    img: pasarImg,
  },
  {
    title: "Alam Mayang",
    desc: "A lush nature recreation park perfect for escaping the urban bustle.",
    img: alamImg,
  },
  {
    title: "Lembah Sari",
    desc: "A green valley providing a scenic natural landscape within the city limits.",
    img: lembahImg,
  },
];

export function Landmarks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current!.scrollWidth;
      const windowWidth = window.innerWidth;

      gsap.to(scrollRef.current, {
        x: -(scrollWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-background overflow-hidden relative pt-20">
      <div className="absolute top-10 left-10 z-10 mix-blend-difference text-white">
        <h2 className="text-5xl font-display uppercase tracking-widest text-primary">Icons of the City</h2>
      </div>

      <div ref={scrollRef} className="h-full flex items-center px-10 gap-16 w-max">
        {landmarks.map((item, i) => (
          <motion.div
            key={i}
            className="relative w-[80vw] max-w-[600px] h-[60vh] rounded-xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
            
            <div className="absolute bottom-0 left-0 p-8 z-30 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-serif text-white mb-2">{item.title}</h3>
              <p className="text-white/80 mb-6 max-w-md line-clamp-2">{item.desc}</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black interactive">
                Discover More
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
