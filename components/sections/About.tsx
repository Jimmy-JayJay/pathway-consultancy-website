"use client";

import { Container } from "@/components/ui/container";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const values = [
    { name: "Accessibility", desc: "Equal opportunities for all." },
    { name: "Excellence", desc: "High-quality coaching and support." },
    { name: "Collaboration", desc: "Partnering for greater impact." },
    { name: "Integrity", desc: "Honesty and transparency." },
    { name: "Empowerment", desc: "Tools for positive change." },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div>
                <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">Who We Are</h2>
                <div className="h-1 w-20 bg-[var(--secondary)] rounded-full" />
             </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Pathway Consultancy is an  organization founded in 2022 by 
              Henderson Chiotcha from Malawi University of Science & Technology. 
              We are committed to providing exceptional services to individuals 
              seeking guidance in personal and professional development.
            </p>
            <div className="p-6 bg-white border-l-4 border-[var(--secondary)] shadow-sm rounded-r-lg">
                <p className="text-slate-700 italic font-medium text-lg">
                    "Every individual possesses untapped potential and has the capacity to achieve greatness."
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                 <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <span className="block text-3xl font-bold text-[var(--primary)]">2022</span>
                    <span className="text-sm text-slate-500">Established</span>
                 </div>
                 <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <span className="block text-3xl font-bold text-[var(--primary)]">10+</span>
                    <span className="text-sm text-slate-500">Team Members</span>
                 </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100 relative">
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--secondary)]/10 rounded-full blur-2xl" />
             <h3 className="text-2xl font-bold text-[var(--primary)] mb-8">Our Core Values</h3>
             <ul className="space-y-6">
                {values.map((val) => (
                    <li key={val.name} className="flex items-start gap-4 group">
                        <CheckCircle2 className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <span className="block font-bold text-[var(--primary)] text-lg">{val.name}</span>
                            <span className="text-slate-600 font-medium">{val.desc}</span>
                        </div>
                    </li>
                ))}
             </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
