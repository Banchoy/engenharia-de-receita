"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function CaseStudy() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto glass rounded-3xl border-white/5 overflow-hidden flex flex-col md:flex-row items-stretch min-h-[500px]">
                <div className="p-10 md:p-14 md:w-3/5 space-y-8 flex flex-col justify-center">
                    <div className="space-y-2">
                        <span className="text-neon font-bold text-[10px] uppercase tracking-[0.3em]">Estudo de Caso Real</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight">
                            ROAS DE <span className="text-neon">399X</span> EM 90 DIAS.
                        </h2>
                    </div>

                    <p className="text-zinc-500 text-base leading-relaxed">
                        Saímos de um faturamento estagnado para uma escala agressiva de 6 dígitos mensais sem aumentar o CAC (Custo de Aquisição de Cliente).
                    </p>

                    <div className="flex gap-10 pt-2">
                        <div>
                            <p className="text-3xl font-heading font-black text-white">427%</p>
                            <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Aumento em Conversão</p>
                        </div>
                        <div>
                            <p className="text-3xl font-heading font-black text-white">-65%</p>
                            <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Redução em CPL</p>
                        </div>
                    </div>

                    <div className="pt-6">
                        <WhatsAppButton variant="inline" />
                    </div>
                </div>

                <div className="md:w-2/5 relative min-h-[300px] md:min-h-full bg-zinc-900/50">
                    <img
                        src="/iceberg.png"
                        alt="Análise Profunda de Receita"
                        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-transparent to-transparent" />
                </div>
            </div>
        </section>
    );
}
