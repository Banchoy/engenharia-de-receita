import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pillars from "@/components/Pillars";
import CaseStudy from "@/components/CaseStudy";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <div className="relative">
            {/* Header Fixo Minimalista */}
            <header className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center glass border-b border-white/5">
                <div className="text-xl font-heading font-black tracking-tighter uppercase">
                    Engenharia<span className="text-neon">.</span>
                </div>
            </header>

            {/* Seções */}
            <Hero />
            <Problem />
            <Pillars />
            <CaseStudy />

            {/* Seção Final CTA */}
            <section className="py-24 text-center px-4 bg-zinc-950">
                <h2 className="text-3xl md:text-6xl font-heading font-black mb-8 max-w-4xl mx-auto">
                    PRONTO PARA TER <span className="text-neon">PREVISIBILIDADE</span>?
                </h2>
                <WhatsAppButton variant="inline" className="scale-125 my-8" />
                <p className="text-zinc-600 mt-8 text-sm">
                    © 2026 Engenharia de Receita Previsível. Todos os direitos reservados.
                </p>
            </section>

            {/* Botão Flutuante */}
            <WhatsAppButton variant="fixed" />
        </div>
    );
}
