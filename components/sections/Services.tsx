"use client";

import { Container } from "@/components/ui/container";
import { GraduationCap, Lightbulb, HeartPulse, Stethoscope, BookOpen } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Targeted preparation for MSCE and University entrance exams. Mobile laboratories for practical science lessons.",
    },
    {
      icon: Lightbulb,
      title: "Business Consulting",
      description: "From idea evaluation to comprehensive business plans. We coach entrepreneurs on management skills.",
    },
    {
      icon: HeartPulse,
      title: "Health Advocacy",
      description: "Sensitizing communities on contagious diseases (Covid-19, Cholera) and the importance of vaccines.",
    },
     {
      icon: BookOpen,
      title: "MSCE Coaching",
      description: "One-week intensive coaching in core subjects to boost student confidence and academic performance.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-[var(--secondary)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
                key={index} 
                className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[var(--secondary)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--muted)] flex items-center justify-center mb-6 group-hover:bg-[var(--secondary)] transition-colors">
                <service.icon className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
