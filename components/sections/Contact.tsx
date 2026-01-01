"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--primary)] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-slate-300 text-lg mb-12">
                    Have questions about our services or need to schedule a consultation? We are here to help.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                            <MapPin className="w-6 h-6 text-[var(--secondary)]" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                            <p className="text-slate-300">P.O Box 5196, Limbe<br/>Malawi University of Science and Technology</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                            <Phone className="w-6 h-6 text-[var(--secondary)]" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Phone</h3>
                            <p className="text-slate-300 hover:text-white transition-colors">
                                <a href="tel:+2650885884570">(+265) 0885 884 570</a>
                            </p>
                            <p className="text-slate-300 hover:text-white transition-colors">
                                <a href="tel:+2650992164044">(+265) 0992 164 044</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                         <div className="bg-white/10 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-[var(--secondary)]" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Email</h3>
                            <p className="text-slate-300 hover:text-white transition-colors">
                                <a href="mailto:pathwayconsultancy001@gmail.com">pathwayconsultancy001@gmail.com</a>
                            </p>
                                 {/* <p className="text-slate-300 hover:text-white transition-colors">
                                <a href="mailto:hendersonchiotcha@gmail.com">hendersonchiotcha@gmail.com</a>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Send us a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input 
                                id="name"
                                type="text" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                         <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input 
                                id="email"
                                type="email" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <input 
                                id="subject"
                                type="text" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                placeholder="Service Inquiry"
                            />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea 
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                            placeholder="How can we help you?"
                        />
                    </div>

                    <Button type="submit" className="w-full" size="lg">Send Message</Button>
                </form>
            </div>
        </div>
      </Container>
    </section>
  );
}
