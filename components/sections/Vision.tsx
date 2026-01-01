"use client";

import { Container } from "@/components/ui/container";
import { GraduationCap, Briefcase, Heart, TrendingUp } from "lucide-react";

export function Vision() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Higher Education",
      vision: "Smooth access to higher education.",
      mission: "MSCE coaching, University entrance guidance.",
      color: "blue",
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship",
      vision: "Empowered entrepreneurs.",
      mission: "Business plans, ideas, and skills training.",
      color: "yellow",
    },
    {
      icon: Heart,
      title: "Healthy Nation",
      vision: "Resilience against diseases.",
      mission: "Disease prevention & vaccine advocacy.",
      color: "rose",
    },
    {
      icon: TrendingUp,
      title: "Academic Performance",
      vision: "Improved MSCE results.",
      mission: "Practical lessons & subject coaching.",
      color: "green",
    }
  ];

  return (
    <section id="vision" className="py-24 bg-white">
      <Container>
         <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Vision & Mission</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Our strategic pillars for driving development and personal growth in Malawi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
                <div key={idx} className="group relative bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <pillar.icon className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{pillar.title}</h3>
                    
                    <div className="space-y-3">
                        <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-[var(--secondary)]">Vision</span>
                            <p className="text-sm text-slate-700 font-medium">{pillar.vision}</p>
                        </div>
                        <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Mission</span>
                            <p className="text-sm text-slate-500">{pillar.mission}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
