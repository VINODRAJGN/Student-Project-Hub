import { motion } from 'framer-motion';
import { ShieldCheck, Code2, BookOpen, Clock } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: "100% Plagiarism Free",
    desc: "Every line of code and word in your report is written from scratch. We provide complete uniqueness guarantees.",
    color: "bg-green-400"
  },
  {
    icon: Code2,
    title: "Clean, Standard Code",
    desc: "We follow industry-standard coding practices so your project looks like it was built by a professional.",
    color: "bg-blue-400"
  },
  {
    icon: BookOpen,
    title: "Report + PPT Included",
    desc: "Every project comes with a complete project report and presentation slides — formatted to your university standards.",
    color: "bg-purple-400"
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    desc: "Missing a college deadline is not an option. We deliver exactly when we promise, with time to spare.",
    color: "bg-orange-400"
  }
];

export default function Guarantees() {
  return (
    <section className="py-24 bg-card border-y-4 border-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            The VS <span className="text-primary">Guarantee</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-background border-4 border-foreground p-6 rounded-2xl brutal-shadow flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 border-foreground brutal-shadow mb-6 ${item.color}`}>
                <item.icon className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 leading-tight">{item.title}</h3>
              <p className="text-muted-foreground font-medium text-sm flex-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
