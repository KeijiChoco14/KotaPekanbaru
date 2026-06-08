import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = [
  { id: "culinary", title: "Culinary" },
  { id: "culture", title: "Culture" },
  { id: "nature", title: "Nature" },
  { id: "shopping", title: "Shopping" },
  { id: "hotels", title: "Hotels" },
];

export function Explore() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section className="min-h-screen bg-card py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display text-white mb-4">EXPLORE<br/>THE CITY</h2>
            <div className="w-20 h-1 bg-primary" />
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-serif text-sm transition-all interactive ${
                  activeCategory === cat.id 
                    ? "bg-primary text-black" 
                    : "border border-white/20 text-white hover:border-primary/50"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={`${activeCategory}-${item}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer bg-muted"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                
                <div className="absolute bottom-0 left-0 p-6 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">{activeCategory}</span>
                  <h3 className="text-2xl font-serif text-white mb-2">Destination {item}</h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Discover the hidden gems of Pekanbaru city in this stunning location.
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
