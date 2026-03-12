"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function CaseStudy() {
    return (
        <section id="case-study" className="w-full py-16 md:py-32 px-6 flex flex-col items-center">
            <div className="w-full max-w-5xl glass rounded-[4rem] border-neon/10 overflow-hidden flex flex-col md:flex-row items-stretch min-h-auto shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                <div className="p-8 md:p-20 md:w-3/5 space-y-12 flex flex-col justify-center items-center text-center relative z-20 bg-background/40 backdrop-blur-sm">
                    <div className="space-y-6 w-full">
                        <span className="text-neon font-bold text-[10px] uppercase tracking-[0.8em] block opacity-70">Case de Sucesso Digital</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-none text-white tracking-tighter uppercase text-balance">
                            ROAS DE <span className="text-neon neon-text">399X</span> <br /> EM 90 DIAS.
                        </h2>
                    </div>

                    <p className="text-[#E5E7EB]/80 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto break-words w-full">
                        Assumimos uma operação que estava queimando caixa em campanhas genéricas e aplicamos nossa engenharia de receita.
                        Em menos de um trimestre, transformamos a estagnação em uma máquina de vendas High Ticket.
                    </p>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-16 pt-4 w-full">
                        <div className="space-y-1">
                            <p className="text-4xl md:text-5xl font-heading font-black text-neon neon-text tracking-tighter">427%</p>
                            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em]">Conversão</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter">-65%</p>
                            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em]">Custo por Lead</p>
                        </div>
                    </div>

                    <div className="pt-10 flex justify-center w-full">
                        <WhatsAppButton className="shadow-premium" />
                    </div>
                </div>

                <div className="md:w-2/5 relative min-h-[400px] md:min-h-full bg-zinc-950/40 border-l border-white/5 flex items-center justify-center overflow-hidden">
                    <img
                        src="/iceberg.png"
                        alt="Análise Profunda de Receita"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-110 contrast-125 scale-110 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-transparent to-transparent pointer-events-none z-10" />

                    {/* Overlay Labels com Ajuste Mobile */}
                    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-10 md:p-14">
                        {/* Parte Visível */}
                        <div className="text-right space-y-1 self-end">
                            <span className="text-neon font-black text-[10px] uppercase tracking-widest block">Receita Visível</span>
                            <span className="text-white/40 text-[9px] uppercase tracking-tighter block text-balance">10% do Potencial</span>
                        </div>

                        {/* Parte Profunda */}
                        <div className="text-center space-y-4 w-full">
                            <div className="space-y-0">
                                <span className="text-white font-black text-[60px] md:text-[80px] lg:text-[100px] leading-none tracking-tighter block opacity-10">399X</span>
                                <span className="text-neon neon-text font-black text-[10px] uppercase tracking-[0.5em] block -mt-4">Potencial Oculto</span>
                            </div>
                            <div className="pt-4 border-t border-white/5 max-w-[200px] mx-auto opacity-30">
                                <span className="text-zinc-500 text-[8px] uppercase tracking-widest block leading-relaxed">
                                    Profundidade • Fundação • Escala
                                </span>
                            </div>
                        </div>

                        {/* Título da Imagem */}
                        <div className="absolute top-10 left-10 opacity-20 hidden md:block">
                            <span className="text-white font-black text-xs uppercase tracking-[0.3em]">Faturamento Real</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
