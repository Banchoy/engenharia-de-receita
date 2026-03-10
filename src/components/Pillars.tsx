"use client";

import { motion } from "framer-motion";
import { Zap, Filter, TrendingUp } from "lucide-react";

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
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
                        OS 3 PILARES DA <span className="text-neon">ENGENHARIA</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Não é mágica, é processo. Desenvolvemos uma estrutura robusta para garantir que cada centímetro do seu funil trabalhe para o lucro.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center group"
                        >
                            <div className="w-20 h-20 bg-neon/5 border border-neon/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-neon group-hover:text-background transition-all duration-500">
                                <pillar.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4">{pillar.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
