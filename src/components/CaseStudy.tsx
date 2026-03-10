"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function CaseStudy() {
    return (
        <section className="py-48 px-6">
            <div className="max-w-4xl mx-auto glass rounded-[3rem] border-neon/10 overflow-hidden flex flex-col md:flex-row items-stretch min-h-[600px] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                <div className="p-12 md:p-20 md:w-3/5 space-y-12 flex flex-col justify-center text-center md:text-left relative z-10">
                    <div className="space-y-6">
                        <span className="text-neon font-bold text-[10px] uppercase tracking-[0.6em] block opacity-70">Resultado Comprovado</span>
                        <h2 className="text-5xl md:6xl lg:text-7xl font-heading font-black leading-none text-white tracking-tighter uppercase font-outline-2">
                            ROAS DE <span className="text-neon neon-text">399X</span> <br /> EM 90 DIAS.
                        </h2>
                    </div>

                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                        Saímos de um faturamento estagnado para uma escala agressiva de 6 dígitos mensais sem aumentar o CAC através de engenharia pura.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-16 pt-4">
                        <div className="space-y-2">
                            <p className="text-5xl font-heading font-black text-neon neon-text font-outline-1 tracking-tighter">427%</p>
                            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em]">Conversão</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-5xl font-heading font-black text-white tracking-tighter">-65%</p>
                            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em]">Custo por Lead</p>
                        </div>
                    </div>

                    <div className="pt-10 flex justify-center md:justify-start">
                        <WhatsAppButton className="shadow-neon" />
                    </div>
                </div>

                <div className="md:w-2/5 relative min-h-[400px] md:min-h-full bg-zinc-950/40 border-l border-white/5">
                    <img
                        src="/iceberg.png"
                        alt="Análise Profunda de Receita"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale brightness-75 contrast-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-transparent to-transparent pointer-events-none" />

                    {/* Overlay Text Effect */}
                    <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-20 group">
                        <span className="text-[60px] font-heading font-black leading-none text-white font-outline-1">399X</span>
                        <span className="text-[10px] uppercase tracking-widest text-white">Engenharia Digital</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
