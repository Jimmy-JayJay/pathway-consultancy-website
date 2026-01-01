"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {

  const scrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/90 to-[var(--primary)]/80 z-10" />

      <Container className="relative z-20 text-center text-white">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Empowering Futures.<br />Building Resilience.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap in higher education, foster entrepreneurship, and advocate for a healthier nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => scrollTo("#services")}>
                Our Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--primary)]" onClick={() => scrollTo("#about")}>
                Learn More
            </Button>
            </div>
        </motion.div>
      </Container>
    </section>
  );
}
