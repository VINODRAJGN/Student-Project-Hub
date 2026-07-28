import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-wide border border-secondary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            ACCEPTING NEW PROJECTS FOR 2024
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
            Your Degree, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Delivered.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            The most trusted project implementation service for Indian college students. 
            From hardcore engineering to management — we build it, explain it, and guarantee your grade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg brutal-shadow transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
              Get Your Project
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center bg-card text-card-foreground border-2 border-border px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-muted">
              View Past Work
            </a>
          </div>
          
          <div className="flex items-center gap-4 pt-8 text-sm font-bold text-muted-foreground">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs overflow-hidden font-bold">
                SJ
              </div>
              <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs overflow-hidden font-bold">
                RK
              </div>
              <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs overflow-hidden font-bold">
                AM
              </div>
              <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs overflow-hidden font-bold">
                PT
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground border-2 border-background flex items-center justify-center text-xs font-black">
                +1k
              </div>
            </div>
            <p>Trusted by 1000+ students across India</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Abstract visual representing a project */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-3 opacity-20 blur-2xl"></div>
            <div className="absolute inset-0 bg-card border-4 border-foreground rounded-[2rem] p-6 brutal-shadow flex flex-col -rotate-3 overflow-hidden">
              <div className="flex items-center justify-between border-b-2 border-border pb-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono font-bold">VS_IMPLEMENTS_v2.4</div>
              </div>
              <div className="flex-1 space-y-4 font-mono text-sm">
                <div className="h-4 w-3/4 bg-muted rounded"></div>
                <div className="h-4 w-1/2 bg-muted rounded"></div>
                <div className="h-4 w-5/6 bg-muted rounded"></div>
                <div className="py-4">
                  <div className="h-32 w-full bg-primary/10 border-2 border-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold">Compiling Success... 100%</span>
                  </div>
                </div>
                <div className="h-4 w-2/3 bg-muted rounded"></div>
                <div className="h-4 w-4/5 bg-muted rounded"></div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-12 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-bold brutal-shadow border-2 border-foreground rotate-6"
            >
              100% Original
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 bottom-20 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold brutal-shadow border-2 border-foreground -rotate-6"
            >
              On-Time Delivery
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
