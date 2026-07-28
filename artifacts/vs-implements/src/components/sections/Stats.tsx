import { motion } from 'framer-motion';

const stats = [
  { value: "1000+", label: "Projects Completed" },
  { value: "100%", label: "Original Work" },
  { value: "Every", label: "Specialization Covered" },
  { value: "Zero", label: "Missed Deadlines" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-background/20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center px-4 ${i === 0 ? 'pl-0' : ''} ${i === 3 ? 'pr-0' : ''}`}
            >
              <div className="font-display font-black text-5xl md:text-6xl text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold tracking-wide uppercase text-background/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
