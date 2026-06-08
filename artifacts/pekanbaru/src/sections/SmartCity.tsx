import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export function SmartCity() {
  const pillars = [
    { title: "Digital Government", desc: "Seamless online public services and e-governance." },
    { title: "Smart Transportation", desc: "Integrated intelligent traffic management systems." },
    { title: "Connected Services", desc: "City-wide IoT infrastructure for better living." },
    { title: "Tech Hub", desc: "Incubating startups and digital innovation." },
  ];

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center py-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">
            BUILDING THE FUTURE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glassmorphism-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/40 transition-colors">
                <div className="w-4 h-4 bg-secondary rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.desc}</p>
              
              <div className="mt-8 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
