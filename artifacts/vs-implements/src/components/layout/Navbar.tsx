import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/40">
       <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-display font-black text-2xl tracking-tighter text-primary">
            VS IMPLEMENTS<span className="text-secondary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-muted-foreground">
             <a href="#domains" className="hover:text-primary transition-colors">Domains</a>
             <a href="#showcase" className="hover:text-primary transition-colors">Showcase</a>
             <a href="#how-it-works" className="hover:text-primary transition-colors">Process</a>
             <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          <a href="#contact" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm brutal-shadow transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
            Start Project
          </a>
       </div>
    </nav>
  )
}
