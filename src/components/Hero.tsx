"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-40 pb-24">
            {/* Background Glows - Stronger */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            <div className="max-w-4xl w-full text-center space-y-12 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-6 py-2 rounded-full border border-neon/30 text-neon text-[10px] font-black tracking-[0.4em] mb-12 uppercase bg-neon/5 shadow-[0_0_20px_rgba(222,255,154,0.1)]">
                        Engenharia de Receita Previsível
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black leading-[0.9] text-white mb-6 tracking-tighter">
                        TRANSFORME VENDAS <br /> EM <span className="text-neon neon-text drop-shadow-[0_0_30px_rgba(222,255,154,0.3)]">CIÊNCIA</span>.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed"
                >
                    Pare de depender do acaso. Implemente o sistema de aquisição de clientes High Ticket que funciona como um relógio suíço.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center gap-6"
                >
                    <WhatsAppButton variant="inline" className="scale-125 hover:scale-130 transition-transform shadow-neon/20" />
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-bold">
                        Sessão Estratégica Gratuita • Vagas Limitadas
                    </p>
                </motion.div>
            </div>

            {/* Hero Image Mockup - More premium */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-24 w-full max-w-4xl rounded-[2.5rem] border border-neon/20 overflow-hidden glass shadow-[0_0_50px_rgba(222,255,154,0.05)] relative group"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
                <img
                    src="/dashboard.png"
                    alt="Visualização do Lucro"
                    className="w-full h-auto opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
            </motion.div>
        </section>
    );
}
