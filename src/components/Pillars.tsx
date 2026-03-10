"use client";

import { motion } from "framer-motion";
import { Zap, Filter, TrendingUp } from "lucide-react";

import WhatsAppButton from "./WhatsAppButton";

const pillars = [
    {
        icon: Zap,
        title: "Atração Magnética",
        description: "Posicionamento de autoridade que atrai os clientes que você quer atender, não os que sobraram."
    },
    {
        icon: Filter,
        title: "Filtro de Qualidade",
        description: "Filtramos 90% dos curiosos antes mesmo de chegarem no seu time comercial."
    },
    {
        icon: TrendingUp,
        title: "Escala Lucrativa",
        description: "Processo previsível para escalar o investimento mantendo a margem de lucro saudável."
    }
];

export default function Pillars() {
    return (
        <section className="py-40 px-6 bg-background relative overflow-hidden">
            {/* Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle,rgba(222,255,154,0.02)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-32 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-heading font-black leading-none">
                        OS 3 PILARES DA <br /><span className="text-neon neon-text">ENGENHARIA</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Não é mágica, é processo. Desenvolvemos uma estrutura robusta para garantir que cada centímetro do seu funil trabalhe para o lucro.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-32">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group relative p-8 rounded-3xl border border-neon/10 bg-zinc-950/50 hover:border-neon/40 transition-all duration-500 shadow-xl hover:shadow-neon/10"
                        >
                            <div className="w-20 h-20 bg-neon/10 border border-neon/30 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-neon group-hover:text-background transition-all duration-500 shadow-neon/20">
                                <pillar.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-6 text-white uppercase tracking-tight">{pillar.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-10 p-16 rounded-[3rem] glass border-neon/20 text-center shadow-neon/5">
                    <h4 className="text-2xl md:text-3xl font-heading font-black max-w-md mx-auto leading-tight">QUER IMPLEMENTAR ESSA ENGENHARIA HOJE?</h4>
                    <WhatsAppButton variant="inline" className="scale-110" />
                </div>
            </div>
        </section>
    );
}
