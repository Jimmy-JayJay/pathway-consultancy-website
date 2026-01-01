"use client";

import { Container } from "@/components/ui/container";
import { User } from "lucide-react";

export function Team() {
  const team = [
    { name: "Henderson Chiotcha", role: "CEO & Founder" },
    { name: "Grace Kanjedza", role: "Chief Financial Officer" },
    { name: "Anthony Nkhunguni", role: "Project Manager" },
    { name: "Robert Symon", role: "Education Officer" },
    { name: "Gift Majawa", role: "Business M&E Officer" },
    { name: "Hannah Yakobe", role: "Secretary" },
  ];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <Container>
         <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Executive Team</h2>
          <p className="text-slate-500">The dedicated leadership driving our mission forward.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-slate-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[var(--primary)] text-lg">{member.name}</h3>
                        <p className="text-[var(--secondary)] text-sm font-medium">{member.role}</p>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
