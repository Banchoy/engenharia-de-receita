"use client";

import { motion } from "framer-motion";
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
        <section className="py-48 px-6 bg-background relative overflow-hidden">
            {/* Accents - High end subtle gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[200px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon/5 rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-40 space-y-10">
                    <h2 className="text-4xl md:text-7xl font-heading font-black leading-none text-white">
                        A CIÊNCIA DA <br /><span className="text-neon neon-text">ENGENHARIA</span>
                    </h2>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">
                        Desenvolvemos uma estrutura matemática para garantir que cada centímetro
                        do seu funil de vendas funcione com a precisão de um relógio suíço, voltado para o lucro máximo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-16 mb-40">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group relative p-14 rounded-[3.5rem] border border-white/5 bg-zinc-950/40 hover:border-neon/30 transition-all duration-700 shadow-2xl hover:shadow-neon/5"
                        >
                            <div className="w-24 h-24 bg-neon/5 border border-neon/10 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:bg-neon group-hover:text-background transition-all duration-500 shadow-neon/10">
                                <pillar.icon className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-heading font-black mb-6 text-white uppercase tracking-tighter">{pillar.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-12 p-20 rounded-[4rem] glass border-neon/10 text-center shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group">
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
