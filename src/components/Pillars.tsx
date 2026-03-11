"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Filter, TrendingUp } from "lucide-react";

import WhatsAppButton from "./WhatsAppButton";

const pillars = [
    {
        icon: Zap,
        title: "Atração Magnética",
        description: "Posicionamento de autoridade inquestionável para atrair o interesse genuíno de quem já tem o problema que você resolve e possui capital."
    },
    {
        icon: Filter,
        title: "Filtro de Qualidade",
        description: "Filtramos 90% dos 'curiosos', garantindo que seu time comercial foque apenas em leads qualificados técnica e financeiramente."
    },
    {
        icon: TrendingUp,
        title: "Escala Lucrativa",
        description: "Transformamos o seu marketing em um centro de lucro previsível. Ajustamos cada métrica para permitir que o investimento cresça de forma sustentável."
    }
];

export default function Pillars() {
    return (
        <section id="pillars" className="w-full py-32 px-6 bg-background relative overflow-hidden flex flex-col items-center">
            {/* Accents - Subtle high-end touch */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[200px] opacity-5 pointer-events-none" />

            <div className="w-full max-w-6xl relative z-10 flex flex-col items-center">
                <div className="text-center mb-20 space-y-6 w-full flex flex-col items-center">
                    <h2 className="text-4xl md:text-7xl font-heading font-black leading-none text-white uppercase tracking-tighter">
                        A CIÊNCIA DA <br /><span className="text-neon neon-text">ENGENHARIA</span>
                    </h2>
                    <p className="text-[#E5E7EB] max-w-3xl mx-auto text-lg md:text-xl font-medium leading-[1.6]">
                        Desenvolvemos uma estrutura matemática para garantir que cada centímetro
                        do seu funil de vendas funcione com a precisão de um relógio suíço.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-32 w-full">
                    {pillars.map((pillar, index) => (
                        <PillarCard key={index} pillar={pillar} index={index} />
                    ))}
                </div>

                <div className="w-full max-w-4xl mx-auto mb-32">
                    <div className="flex flex-col items-center gap-10 p-12 md:p-20 rounded-[4rem] glass border-neon/10 text-center shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group overflow-hidden">
                        <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <h4 className="text-3xl md:text-5xl font-heading font-black max-w-md mx-auto leading-tight text-white uppercase tracking-tighter relative z-10">
                            QUER IMPLEMENTAR ISSO HOJE?
                        </h4>
                        <WhatsAppButton className="scale-110 relative z-10" />
                    </div>
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
            className="group relative p-10 md:p-14 rounded-[3.5rem] border border-white/5 bg-zinc-950/40 hover:border-neon/30 transition-all duration-700 shadow-2xl hover:shadow-neon/10 flex flex-col items-center text-center min-h-[500px] h-auto w-full"
        >
            <div className="w-24 h-24 bg-neon/10 border border-neon/30 rounded-full flex items-center justify-center mb-10 group-hover:bg-neon group-hover:text-background transition-all duration-500 shrink-0">
                <pillar.icon className="w-12 h-12" />
            </div>

            <h3 className="text-2xl font-heading font-black mb-8 text-white uppercase tracking-tighter leading-tight shrink-0">
                {pillar.title}
            </h3>

            <div className="flex-1 flex flex-col items-center w-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mb-10 px-10 py-4 rounded-full border border-neon/30 text-neon text-[10px] font-black tracking-widest uppercase hover:bg-neon/10 transition-colors shrink-0"
                >
                    {isOpen ? "Fechar" : "Saber Detalhes"}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden w-full"
                        >
                            <p className="text-[#E5E7EB]/70 text-sm md:text-base leading-[1.6] font-medium pt-8 border-t border-neon/10 break-words w-full">
                                {pillar.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
