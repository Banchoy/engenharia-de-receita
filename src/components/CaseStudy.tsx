"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function CaseStudy() {
    return (
        <section className="py-40 px-6">
            <div className="max-w-4xl mx-auto glass rounded-[2.5rem] border-neon/20 overflow-hidden flex flex-col md:flex-row items-stretch min-h-[550px] shadow-neon/5">
                <div className="p-12 md:p-16 md:w-3/5 space-y-10 flex flex-col justify-center text-center md:text-left">
                    <div className="space-y-4">
                        <span className="text-neon font-bold text-[10px] uppercase tracking-[0.4em] block">Estudo de Caso Real</span>
                        <h2 className="text-4xl md:6xl font-heading font-black leading-none">
                            ROAS DE <span className="text-neon neon-text">399X</span> <br /> EM 90 DIAS.
                        </h2>
                    </div>

                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                        Saímos de um faturamento estagnado para uma escala agressiva de 6 dígitos mensais sem aumentar o CAC.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-12 pt-4">
                        <div className="text-center md:text-left">
                            <p className="text-4xl font-heading font-black text-neon neon-text">427%</p>
                            <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mt-1">Alta em Conversão</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-4xl font-heading font-black text-neon neon-text font-outline-2">-65%</p>
                            <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest mt-1">Redução em CPL</p>
                        </div>
                    </div>

                    <div className="pt-8 flex justify-center md:justify-start">
                        <WhatsAppButton variant="inline" className="scale-110" />
                    </div>
                </div>

                <div className="md:w-2/5 relative min-h-[350px] md:min-h-full bg-zinc-900/40 border-l border-neon/10">
                    <img
                        src="/iceberg.png"
                        alt="Análise Profunda de Receita"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-transparent to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
