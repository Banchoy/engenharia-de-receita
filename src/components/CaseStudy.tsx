"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto glass rounded-3xl border-white/5 overflow-hidden flex flex-col md:flex-row items-center">
                <div className="p-12 md:w-1/2 space-y-6">
                    <span className="text-neon font-bold text-sm uppercase tracking-widest">Estudo de Caso Real</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight">
                        ROAS DE <span className="text-neon">399X</span> EM 90 DIAS.
                    </h2>
                    <p className="text-zinc-400">
                        Saímos de um faturamento estagnado para uma escala agressiva de 6 dígitos mensais sem aumentar o CAC (Custo de Aquisição de Cliente).
                    </p>
                    <div className="flex gap-8 pt-4">
                        <div>
                            <p className="text-3xl font-heading font-black text-white">427%</p>
                            <p className="text-xs text-zinc-500 uppercase">Aumento em Conversão</p>
                        </div>
                        <div>
                            <p className="text-3xl font-heading font-black text-white">-65%</p>
                            <p className="text-xs text-zinc-500 uppercase">Redução em CPL</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 h-full min-h-[400px] relative">
                    <img
                        src="/iceberg.png"
                        alt="Análise Profunda de Receita"
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent hidden md:block" />
                </div>
            </div>
        </section>
    );
}
