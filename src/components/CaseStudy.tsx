"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function CaseStudy() {
    return (
        <section className="py-48 px-6">
            <div className="max-w-5xl mx-auto glass rounded-[4rem] border-neon/10 overflow-hidden flex flex-col md:flex-row items-stretch min-h-[700px] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                <div className="p-14 md:p-24 md:w-3/5 space-y-14 flex flex-col justify-center items-center text-center relative z-10 w-full">
                    <div className="space-y-8 w-full">
                        <span className="text-neon font-bold text-[10px] uppercase tracking-[0.8em] block opacity-70">Case de Sucesso Digital</span>
                        <h2 className="text-5xl md:7xl lg:text-8xl font-heading font-black leading-none text-white tracking-tighter uppercase font-outline-2">
                            ROAS DE <span className="text-neon neon-text">399X</span> <br /> EM 90 DIAS.
                        </h2>
                    </div>

                    <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                        Assumimos uma operação que estava queimando caixa em campanhas genéricas e aplicamos nossa engenharia de receita.
                        Em menos de um trimestre, transformamos a estagnação em uma máquina de vendas High Ticket, atingindo 6 dígitos de lucro líquido sem comprometer o CAC.
                    </p>

                    <div className="flex flex-wrap justify-center gap-16 pt-4 w-full">
                        <div className="space-y-2">
                            <p className="text-5xl font-heading font-black text-neon neon-text font-outline-1 tracking-tighter">427%</p>
                            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em]">Conversão</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-5xl font-heading font-black text-white tracking-tighter">-65%</p>
                            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em]">Custo por Lead</p>
                        </div>
                    </div>

                    <div className="pt-10 flex justify-center w-full">
                        <WhatsAppButton className="shadow-neon" />
                    </div>
                </div>

                <div className="md:w-2/5 relative min-h-[400px] md:min-h-full bg-zinc-950/40 border-l border-white/5 flex items-center justify-center">
                    <img
                        src="/iceberg.png"
                        alt="Análise Profunda de Receita"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale brightness-75 contrast-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-transparent to-transparent pointer-events-none" />

                    {/* Overlay Text Effect Centered for balance */}
                    <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-20 group md:right-1/2 md:translate-x-1/2 md:items-center">
                        <span className="text-[60px] font-heading font-black leading-none text-white font-outline-1">399X</span>
                        <span className="text-[10px] uppercase tracking-widest text-white">Engenharia Digital</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
