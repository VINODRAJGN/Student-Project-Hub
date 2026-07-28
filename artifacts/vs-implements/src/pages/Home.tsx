import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import HowItWorks from '@/components/sections/HowItWorks';
import Showcase from '@/components/sections/Showcase';
import Guarantees from '@/components/sections/Guarantees';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative selection:bg-primary selection:text-primary-foreground">
      <div className="bg-noise"></div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Guarantees />
        <Showcase />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
