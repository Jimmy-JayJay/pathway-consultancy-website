"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-100 py-2"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-white/20">
                <img 
                    src="/icon.png" 
                    alt="Pathway Consultancy Logo" 
                    className="object-cover w-full h-full"
                />
            </div>
            <span className={cn("text-xl font-bold tracking-tight", isScrolled ? "text-[var(--primary)]" : "text-white")}>
                Pathway Consultancy
            </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--secondary)]",
                isScrolled ? "text-slate-600" : "text-slate-200"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant={isScrolled ? "primary" : "secondary"}
            size="sm"
            onClick={(e) => handleScrollTo(e as any, "#contact")}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
             <X className={cn("h-6 w-6", isScrolled ? "text-slate-800" : "text-white")} />
          ) : (
             <Menu className={cn("h-6 w-6", isScrolled ? "text-slate-800" : "text-white")} />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden p-4 flex flex-col gap-4 border-t border-slate-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-base font-medium text-slate-700 hover:text-[var(--primary)]"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full" onClick={(e) => handleScrollTo(e as any, "#contact")}>Contact Us</Button>
        </div>
      )}
    </nav>
  );
}
