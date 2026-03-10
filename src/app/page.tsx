import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pillars from "@/components/Pillars";
import CaseStudy from "@/components/CaseStudy";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <div className="relative bg-background selection:bg-neon selection:text-background">
            {/* Header Fixo Premium Contido */}
            <header className="fixed top-0 w-full z-50 px-6 pt-8 pb-4 flex justify-center pointer-events-none">
                <div className="max-w-4xl w-full flex justify-between items-center glass px-10 py-5 rounded-3xl border-neon/10 pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="text-xl font-heading font-black tracking-tighter uppercase group cursor-default">
                        Engenharia<span className="text-neon group-hover:animate-pulse">.</span>
                    </div>
                    <div className="hidden sm:block">
                        <WhatsAppButton variant="header" />
                    </div>
                    <div className="sm:hidden">
                        <WhatsAppButton variant="header" className="px-3" />
                    </div>
                </div>
            </header>

            {/* Seções em Blocos Centrados com Ritmo Visual */}
            <main className="relative w-full overflow-x-hidden flex flex-col items-center">
                <Hero />

                <div className="w-full relative z-10 flex flex-col items-center">
                    <Problem />
                    <Pillars />
                    <CaseStudy />
                </div>
            </main>

            {/* Seção Final CTA de Alto Impacto */}
            <section className="w-full py-64 px-6 bg-zinc-950/60 border-t border-neon/10 relative overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(222,255,154,0.05),transparent)] pointer-events-none" />

                <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-16 relative">
                    <div className="space-y-6 w-full flex flex-col items-center">
                        <h2 className="text-5xl md:text-8xl font-heading font-black leading-none text-white tracking-tighter">
                            DOMINE SEU <br /> <span className="text-neon neon-text">MERCADO</span>
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto font-medium">
                            A janela de oportunidade para implementar engenharia de receita
                            antes dos seus concorrentes está fechando.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-10 w-full">
                        <WhatsAppButton variant="inline" className="scale-110 md:scale-125 shadow-neon-strong" />
                        <div className="flex flex-col items-center gap-2 opacity-40">
                            <p className="text-[10px] font-black uppercase tracking-[0.5em]">Engenharia de Receita Previsível</p>
                            <p className="text-[9px] uppercase tracking-widest text-zinc-600">© 2026 • Todos os Direitos Reservados</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Botão Flutuante Diferenciado (Apenas Mobile/Discreto) */}
            <WhatsAppButton variant="fixed" className="md:bottom-10 md:right-10" />
        </div>
    );
}
