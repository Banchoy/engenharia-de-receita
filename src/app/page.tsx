import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pillars from "@/components/Pillars";
import CaseStudy from "@/components/CaseStudy";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <div className="relative bg-background">
            {/* Header Fixo Contido */}
            <header className="fixed top-0 w-full z-50 px-6 py-8 flex justify-center pointer-events-none">
                <div className="max-w-4xl w-full flex justify-between items-center glass px-8 py-4 rounded-2xl border-white/5 pointer-events-auto shadow-2xl">
                    <div className="text-lg font-heading font-black tracking-tighter uppercase">
                        Engenharia<span className="text-neon">.</span>
                    </div>
                    <div className="hidden md:block">
                        <WhatsAppButton variant="inline" className="px-6 py-3 text-[10px]" />
                    </div>
                </div>
            </header>

            {/* Seções em Blocos Centrados */}
            <div className="space-y-0">
                <Hero />
                <Problem />
                <Pillars />
                <CaseStudy />
            </div>

            {/* Seção Final CTA Contida */}
            <section className="py-32 px-6 bg-zinc-950/40 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight text-white mb-8">
                        PRONTO PARA TER <br /> <span className="text-neon">PREVISIBILIDADE</span>?
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <WhatsAppButton variant="inline" className="scale-110" />
                        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
                            © 2026 Engenharia de Receita Previsível.
                        </p>
                    </div>
                </div>
            </section>

            {/* Botão Flutuante Discreto */}
            <WhatsAppButton variant="fixed" className="bottom-6 right-6 md:bottom-10 md:right-10" />
        </div>
    );
}
