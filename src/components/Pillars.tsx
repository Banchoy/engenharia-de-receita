"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Filter, TrendingUp } from "lucide-react";

import WhatsAppButton from "./WhatsAppButton";

const pillars = [
    {
        icon: Zap,
        title: "Atração Magnética",
        description: "Criamos um posicionamento de autoridade inquestionável. Não buscamos apenas atenção, mas sim o interesse geuníno de quem já tem o problema que você resolve e possui capital para investir na solução."
    },
    {
        icon: Filter,
        title: "Filtro de Qualidade",
        description: "Nossa engenharia filtra 90% dos 'curiosos' antes do primeiro contato. O seu time comercial só gasta energia com leads que já passaram por um processo rigoroso de qualificação técnica e financeira."
    },
    {
        icon: TrendingUp,
        title: "Escala Lucrativa",
        description: "Transformamos o seu marketing em um centro de lucro previsível. Ajustamos cada métrica para permitir que o investimento cresça de forma sustentável, mantendo margens saudáveis e ROI constante."
    }
];

export default function Pillars() {
    return (
        <section id="pillars" className="w-full py-80 px-6 bg-background relative overflow-hidden flex flex-col items-center">
            {/* Accents - High end subtle gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[200px] opacity-5 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon/5 rounded-full blur-[150px] opacity-5 pointer-events-none" />

            <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
                <div className="text-center mb-40 space-y-10 w-full flex flex-col items-center">
                    <h2 className="text-4xl md:text-7xl font-heading font-black leading-none text-white">
                        A CIÊNCIA DA <br /><span className="text-neon neon-text">ENGENHARIA</span>
                    </h2>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">
                        Desenvolvemos uma estrutura matemática para garantir que cada centímetro
                        do seu funil de vendas funcione com a precisão de um relógio suíço, voltado para o lucro máximo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-16 mb-64 w-full justify-items-center">
                    {pillars.map((pillar, index) => (
                        <PillarCard key={index} pillar={pillar} index={index} />
                    ))}
                </div>

                <div className="flex flex-col items-center gap-12 p-20 rounded-[4rem] glass border-neon/10 text-center shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group w-full max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[4rem]" />
                    <h4 className="text-3xl md:text-5xl font-heading font-black max-w-md mx-auto leading-tight text-white uppercase tracking-tighter relative z-10">
                        QUER IMPLEMENTAR ISSO HOJE?
                    </h4>
                    <WhatsAppButton className="scale-110 relative z-10" />
                </div>
            </div>
        </section>
    );
}

function PillarCard({ pillar, index }: { pillar: any; index: number }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center group relative p-14 rounded-[3.5rem] border border-white/5 bg-zinc-950/40 hover:border-neon/30 transition-all duration-700 shadow-2xl hover:shadow-neon/10 flex flex-col items-center min-h-[450px] w-full"
        >
            <div className="w-24 h-24 bg-neon/10 border border-neon/30 rounded-full flex items-center justify-center mb-10 group-hover:bg-neon group-hover:text-background transition-all duration-500 shadow-[0_0_30px_rgba(222,255,154,0.3)]">
                <pillar.icon className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-heading font-black mb-6 text-white uppercase tracking-tighter">{pillar.title}</h3>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mb-6 px-6 py-2 rounded-full border border-neon/30 text-neon text-[10px] font-black tracking-widest uppercase hover:bg-neon/10 transition-colors"
            >
                {isOpen ? "Fechar" : "Saber Detalhes"}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-zinc-400 text-sm leading-relaxed font-medium pt-4 border-t border-neon/10">
                            {pillar.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
