import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowRight, Zap } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/30 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 font-bold text-sm tracking-wide mb-8">
            <Zap className="w-4 h-4 text-secondary fill-secondary" />
            <span className="uppercase">Stop stressing over deadlines</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Let's Build Your <br/>
            <span className="text-secondary text-stroke-white text-transparent" style={{ WebkitTextStroke: "2px #fff" }}>Project</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">
            Drop us a message with your requirements. We reply fast, build faster, and ensure you get the top grade.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:vsimplements@gmail.com"
              className="flex items-center gap-3 bg-background text-foreground px-8 py-5 rounded-full font-black text-xl brutal-shadow transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] w-full sm:w-auto justify-center"
            >
              <Mail className="w-6 h-6" />
              Email Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            
            <a 
              href="https://www.instagram.com/vsimplements/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-transparent border-4 border-white text-white px-8 py-5 rounded-full font-black text-xl hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <Instagram className="w-6 h-6" />
              DM on Instagram
            </a>
          </div>
          
          <div className="mt-16 pt-16 border-t border-white/20 text-white/60 font-bold text-sm uppercase tracking-widest">
            <p>© {new Date().getFullYear()} VS Implements. Built for Indian students.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
