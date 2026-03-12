"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-48 pb-32">
            {/* Dynamic Background Elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon/10 rounded-full blur-[180px] -z-10 opacity-20 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-4xl w-full text-center space-y-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-[10px] font-black tracking-[0.5em] uppercase shadow-[0_0_30px_rgba(222,255,154,0.1)]">
                        <span className="w-2 h-2 bg-neon rounded-full animate-ping" />
                        Engenharia de Receita Previsível
                    </div>
                    <h1 className="text-6xl md:text-9xl font-heading font-black leading-[0.85] text-white tracking-tighter uppercase text-balance">
                        VENDA MAIS <br /> COM <span className="text-neon neon-text drop-shadow-[0_0_40px_rgba(222,255,154,0.4)]">CIÊNCIA</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-[#E5E7EB]/80 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed text-balance"
                >
                    Pare de depender da sorte. Implemente o sistema de aquisição que transforma cliques em agendamentos de alto ticket com precisão matemática.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center gap-8"
                >
                    <WhatsAppButton className="scale-110 md:scale-125 shadow-neon-strong" />
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-black">
                        Sessão Estratégica Gratuita • Vagas Limitadas
                    </p>
                </motion.div>
            </div>

            {/* Hero Image Mockup - Ultra Premium Frame */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-32 w-full max-w-5xl rounded-[3.5rem] border border-white/10 overflow-hidden glass shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative group p-1"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
                <div className="rounded-[3.3rem] overflow-hidden border border-white/5 bg-zinc-900">
                    <img
                        src="/dashboard.png"
                        alt="Visualização do Lucro"
                        className="w-full h-auto opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100 object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
