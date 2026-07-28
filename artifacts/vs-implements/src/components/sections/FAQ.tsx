import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: "Will my project be 100% original?",
    a: "Absolutely. We write every project from scratch based on your specific college guidelines. No reused code, no copy-pasting from GitHub without understanding."
  },
  {
    q: "Do you provide project reports and synopsis?",
    a: "Yes! Along with the source code, we provide full project reports, synopsis, PPTs, and IEEE base papers if required by your university."
  },
  {
    q: "What exactly do I receive with my project?",
    a: "You receive the complete source code, a full project report (as per your university format), and a PPT presentation. Everything is ready to submit directly to your college."
  },
  {
    q: "Can you make last-minute changes if my guide asks for them?",
    a: "Yes. We offer free minor modifications and revisions based on your project guide's feedback to ensure your project gets approved."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            Got <span className="text-primary">Questions?</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border-4 border-foreground rounded-2xl overflow-hidden brutal-shadow transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between font-black text-xl md:text-2xl hover:bg-muted/50 transition-colors"
              >
                {faq.q}
                <div className={`w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45 bg-primary text-primary-foreground' : 'bg-background'}`}>
                  <Plus className="w-6 h-6" strokeWidth={3} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 border-t-4 border-foreground' : 'max-h-0'}`}
              >
                <div className="p-6 md:p-8 text-muted-foreground font-medium text-lg bg-background">
                  {faq.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
