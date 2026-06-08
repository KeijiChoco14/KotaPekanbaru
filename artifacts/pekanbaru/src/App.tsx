import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useLenis } from "@/hooks/useLenis";
import { LoadingScreen } from "@/sections/LoadingScreen";
import { Hero } from "@/sections/Hero";
import { CityStats } from "@/sections/CityStats";
import { Landmarks } from "@/sections/Landmarks";
import { Culture } from "@/sections/Culture";
import { NightCity } from "@/sections/NightCity";
import { SmartCity } from "@/sections/SmartCity";
import { Explore } from "@/sections/Explore";
import { Contact } from "@/sections/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

function App() {
  useLenis();
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="dark bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-black">
        <CustomCursor />
        <ScrollProgress />
        
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <main>
            <Hero />
            <CityStats />
            <Landmarks />
            <Culture />
            <NightCity />
            <SmartCity />
            <Explore />
            <Contact />
          </main>
        )}
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
