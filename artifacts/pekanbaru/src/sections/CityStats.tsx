import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const stats = [
  { label: "Population", value: 1100000, suffix: "+" },
  { label: "Districts", value: 12, suffix: "" },
  { label: "Universities", value: 17, suffix: "" },
  { label: "Tourist Destinations", value: 50, suffix: "+" },
  { label: "Economic Growth", value: 6.2, suffix: "%" },
];

export function CityStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = document.getElementById(`counter-${i}`);
        if (el) {
          gsap.to(el, {
            innerHTML: stat.value,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerHTML: stat.value % 1 !== 0 ? 0.1 : 1 },
            onUpdate: function () {
              // Add commas for thousands
              const val = Number(this.targets()[0].innerHTML);
              if (stat.value > 1000) {
                 this.targets()[0].innerHTML = Math.floor(val).toLocaleString('en-US');
              } else if (stat.value % 1 !== 0) {
                 this.targets()[0].innerHTML = val.toFixed(1);
              }
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-background overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
        <h2 className="text-[20vw] font-display font-bold leading-none text-white whitespace-nowrap">
          GROWTH
        </h2>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            A CITY THAT NEVER STOPS GROWING
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-2 flex items-baseline justify-center">
                <span id={`counter-${i}`}>0</span>
                <span className="text-2xl md:text-3xl lg:text-4xl ml-1 text-secondary">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
