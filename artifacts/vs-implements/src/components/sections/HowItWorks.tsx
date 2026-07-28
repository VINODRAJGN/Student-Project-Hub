import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discuss & Finalize",
    desc: "Share your requirements, college guidelines, and deadline. We'll consult with you to select the perfect tech stack and scope.",
    color: "bg-primary text-primary-foreground"
  },
  {
    num: "02",
    title: "We Build It",
    desc: "Our senior developers write clean, original code. We build the architecture, implement features, and test thoroughly.",
    color: "bg-secondary text-secondary-foreground"
  },
  {
    num: "03",
    title: "Full Delivery",
    desc: "Receive the complete source code, project report, and PPT — all formatted to your college's requirements, on or before your deadline.",
    color: "bg-accent text-accent-foreground"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-card relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            A frictionless process designed for students. We handle the heavy lifting while keeping you in the loop.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative z-10 bg-card border-4 border-foreground p-8 rounded-3xl brutal-shadow hover:brutal-shadow-hover transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl mb-6 border-2 border-foreground brutal-shadow ${step.color}`}>
                {step.num}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">{step.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
