import { motion } from "framer-motion";
import zapinImg from "@/assets/images/zapin.png";

export function Culture() {
  return (
    <section className="relative min-h-screen bg-background py-32 overflow-hidden flex items-center">
      {/* Abstract Malay geometric pattern background hint */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #ccc 10px, #ccc 11px)`
        }}
      />

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[60vh] w-full rounded-2xl overflow-hidden group">
          <motion.div
            className="absolute inset-0 bg-primary z-20 origin-left"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          />
          <img src={zapinImg} alt="Zapin Dance" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <h3 className="text-3xl font-display text-white tracking-widest">ZAPIN DANCE</h3>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display text-primary mb-6"
          >
            LIVING CULTURE,<br />
            <span className="text-white">BREATHING HISTORY</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 bg-secondary mb-8" 
          />

          <div className="space-y-8">
            {[
              { title: "Zapin Dance", desc: "A traditional Malay dance reflecting the grace and elegance of Riau's heritage." },
              { title: "Rumah Adat", desc: "Traditional stilt houses featuring intricate wood carvings and steeply pitched roofs." },
              { title: "Tenun Siak", desc: "Exquisite hand-woven textiles threaded with gold, representing status and artistry." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                className="group border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300 cursor-default"
              >
                <h4 className="text-xl font-serif text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
