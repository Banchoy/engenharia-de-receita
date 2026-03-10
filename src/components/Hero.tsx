"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-5xl w-full text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full border border-neon/30 text-neon text-xs font-bold tracking-[0.2em] mb-6 uppercase">
                        Engenharia de Receita Previsível
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-none text-white text-balance">
                        TRANSFORME VENDAS <br /> EM <span className="text-neon neon-text">CIÊNCIA</span>.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                >
                    Pare de depender do acaso e de agências fofas que vendem curtidas.
                    Implemente um sistema de aquisição de clientes de alto ticket que funciona como um relógio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-8"
                >
                    <WhatsAppButton variant="inline" />
                    <p className="mt-4 text-xs text-zinc-500 uppercase tracking-widest">
                        Sessão Estratégica Gratuita • Vagas Limitadas
                    </p>
                </motion.div>
            </div>

            {/* Hero Image Mockup - Placeholder using the generated dashboard */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-20 w-full max-w-6xl rounded-2xl border border-white/10 overflow-hidden glass shadow-2xl"
            >
                <img
                    src="/dashboard.png"
                    alt="Visualização do Lucro"
                    className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
            </motion.div>
        </section>
    );
}
