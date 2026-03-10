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
        <section className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Accents */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-[80px]" />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-heading font-black">
                        OS 3 PILARES DA <span className="text-neon">ENGENHARIA</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-base">
                        Não é mágica, é processo. Desenvolvemos uma estrutura robusta para garantir que cada centímetro do seu funil trabalhe para o lucro.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mb-24">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 bg-neon/5 border border-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-neon group-hover:text-background transition-all duration-500 shadow-xl group-hover:shadow-neon/20">
                                <pillar.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-heading font-bold mb-4">{pillar.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-8 p-12 rounded-3xl glass border-white/5 text-center">
                    <h4 className="text-xl font-heading font-bold">Quer implementar esses pilares no seu negócio?</h4>
                    <WhatsAppButton variant="inline" />
                </div>
            </div>
        </section>
    );
}
