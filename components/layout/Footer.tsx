
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-[#082840] text-slate-400 py-12 border-t border-white/10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <span className="text-xl font-bold text-white tracking-tight">Pathway Consultancy</span>
                <p className="mt-2 text-sm">Empowering Futures. Building Resilience.</p>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center">
                 {/* Socials or quick links could go here */}
            </div>

            <div className="text-sm text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} Pathway Consultancy. All Rights Reserved.</p>
                <p className="mt-1 text-xs text-slate-500">Demo Version</p>
            </div>
        </div>
      </Container>
    </footer>
  );
}
