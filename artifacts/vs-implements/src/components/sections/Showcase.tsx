import { motion } from 'framer-motion';
import project1 from '@assets/generated_images/project-1.jpg';
import project2 from '@assets/generated_images/project-2.jpg';
import project3 from '@assets/generated_images/project-3.jpg';
import project4 from '@assets/generated_images/project-4.jpg';
import project5 from '@assets/generated_images/project-5.jpg';
import project6 from '@assets/generated_images/project-6.jpg';

const categories = [
  "Engineering",
  "MBA/Management",
  "MCA/BCA",
  "Science"
];

const projects = [
  {
    title: "Smart Attendance System",
    category: "Computer Science",
    tags: ["Python", "OpenCV", "React"],
    image: project1,
    color: "bg-[#e0f2fe]"
  },
  {
    title: "IoT Home Automation",
    category: "Electronics",
    tags: ["Arduino", "ESP8266", "C++"],
    image: project2,
    color: "bg-[#dcfce7]"
  },
  {
    title: "HR Analytics Dashboard",
    category: "MBA / Management",
    tags: ["PowerBI", "Excel", "Tableau"],
    image: project3,
    color: "bg-[#fef08a]"
  },
  {
    title: "Online Exam Portal",
    category: "MCA / BCA",
    tags: ["Java", "Spring Boot", "MySQL"],
    image: project4,
    color: "bg-[#ffedd5]"
  },
  {
    title: "Crop Yield Prediction",
    category: "BSc / MSc",
    tags: ["Machine Learning", "Pandas", "Scikit"],
    image: project5,
    color: "bg-[#f3e8ff]"
  },
  {
    title: "Solar Grid Simulation",
    category: "Electrical Eng.",
    tags: ["MATLAB", "Simulink", "C"],
    image: project6,
    color: "bg-[#ffe4e6]"
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
              Featured <span className="text-primary text-stroke text-transparent">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl font-medium">
              We've delivered 1000+ projects across every major domain. Here is a small glimpse of what we can build.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span key={i} className="px-4 py-2 rounded-full border-2 border-foreground font-bold text-sm bg-card">
                {cat}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-foreground brutal-shadow mb-6 transition-transform group-hover:-translate-y-2 group-hover:brutal-shadow-hover bg-muted">
                {/* Fallback pattern if image is missing/loading */}
                <div className={`absolute inset-0 opacity-20 ${p.color} bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]`}></div>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-background px-3 py-1 rounded-full font-bold text-xs border-2 border-foreground brutal-shadow">
                  {p.category}
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase mb-3">{p.title}</h3>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-muted rounded-md text-xs font-bold text-muted-foreground uppercase tracking-wider border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a href="#contact" className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg brutal-shadow transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
            Don't see your domain? Ask us
          </a>
        </div>
      </div>
    </section>
  )
}
