"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-20">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl w-full text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-neon/20 text-neon text-[10px] font-bold tracking-[0.3em] mb-8 uppercase">
                        Engenharia de Receita Previsível
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight text-white mb-2">
                        TRANSFORME VENDAS <br /> EM <span className="text-neon neon-text">CIÊNCIA</span>.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
                >
                    Pare de depender do acaso e de agências fofas que vendem curtidas.
                    Implemente um sistema de aquisição de clientes de alto ticket que funciona como um relógio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center gap-4"
                >
                    <WhatsAppButton variant="inline" />
                    <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
                        Sessão Estratégica Gratuita • Vagas Limitadas
                    </p>
                </motion.div>
            </div>

            {/* Hero Image Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-20 w-full max-w-4xl rounded-2xl border border-white/10 overflow-hidden glass shadow-2xl relative"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img
                    src="/dashboard.png"
                    alt="Visualização do Lucro"
                    className="w-full h-auto opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                />
            </motion.div>
        </section>
    );
}
