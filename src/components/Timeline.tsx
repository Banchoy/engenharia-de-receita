"use client";

import { motion } from 'framer-motion';
import { Calendar, Search, Zap, TrendingUp, BarChart3 } from 'lucide-react';

const steps = [
    {
        day: "DIA 01-03",
        title: "Diagnóstico e Setup",
        description: "Mapeamento completo da sua oferta e integração dos trackers de engenharia. Identificamos os pontos de fuga de capital.",
        icon: Search,
        side: 'left'
    },
    {
        day: "DIA 07",
        title: "Implantação dos Filtros",
        description: "Lançamento dos primeiros anúncios excludentes. O mercado entende que seu serviço não é para qualquer um.",
        icon: Zap,
        side: 'right'
    },
    {
        day: "DIA 15",
        title: "Primeira Escala",
        description: "Ajuste fino das métricas de conversão. Selecionamos os criativos que trazem o maior volume de capital.",
        icon: TrendingUp,
        side: 'left'
    },
    {
        day: "DIA 30",
        title: "Previsibilidade",
        description: "Operação rodando com custo por lead estável e ROI previsível. Vendas de alto ticket em fluxo contínuo.",
        icon: BarChart3,
        side: 'right'
    }
];

export default function Timeline() {
    return (
        <section id="timeline" className="w-full py-32 px-6 flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
                <div className="text-center mb-32 space-y-4">
                    <span className="text-neon font-black text-[10px] uppercase tracking-[0.5em] block opacity-70">Caminho da Escala</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase">
                        A JORNADA DO <span className="text-neon neon-text">RESULTADO</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
                        O que acontece nos bastidores enquanto sua máquina de vendas profissional ganha vida.
                    </p>
                </div>

                <div className="relative w-full">
                    {/* Linha Central */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/20 to-transparent hidden md:block" />

                    <div className="space-y-24 md:space-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex items-center justify-center md:justify-between w-full md:mb-32 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                {/* Conteúdo */}
                                <motion.div
                                    initial={{ opacity: 0, x: step.side === 'left' ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="w-full md:w-[42%] glass p-10 md:p-14 rounded-[3rem] border-white/5 relative group"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-neon/10 rounded-2xl flex items-center justify-center border border-neon/20 group-hover:bg-neon group-hover:text-background transition-all duration-500">
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-neon font-black text-xs uppercase tracking-widest">{step.day}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tight mb-4">{step.title}</h3>
                                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Círculo Central na Timeline */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-neon rounded-full shadow-[0_0_10px_rgba(222,255,154,0.5)] z-20 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
