import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const title = "PEKANBARU";
  
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 3, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="relative overflow-hidden">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display tracking-[0.2em] text-foreground flex">
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        />
      </div>
      
      <motion.p
        className="mt-6 text-sm md:text-lg text-primary tracking-[0.4em] uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        The Capital of Opportunity
      </motion.p>
    </motion.div>
  );
}
