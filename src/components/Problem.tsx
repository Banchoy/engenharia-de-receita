"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, Users } from "lucide-react";

import WhatsAppButton from "./WhatsAppButton";

const problems = [
    {
        icon: ShieldAlert,
        title: "Métricas de Vaidade",
        description: "Curtidas e visualizações não pagam boletos. Focamos no que entra no seu caixa."
    },
    {
        icon: TrendingDown,
        title: "Falta de Previsibilidade",
        description: "Um mês bom, dois meses ruins. Acabe com a montanha-russa de faturamento."
    },
    {
        icon: Users,
        title: "Leads Sem Qualidade",
        description: "Sua equipe comercial cansada de falar com curiosos que não têm dinheiro."
    }
];

export default function Problem() {
    return (
        <section className="py-48 px-6 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-neon/2 opacity-[0.03] blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-32 space-y-8">
                    <h2 className="text-4xl md:text-7xl font-heading font-black tracking-tight leading-none text-white">
                        O PROBLEMA DAS<br />
                        <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.2)]">AGÊNCIAS COMUNS</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        Elas te vendem o processo, nós te entregamos o lucro.
                        90% das estratégias falham em negócios High Ticket por falta de engenharia.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[2.5rem] glass border-neon/10 hover:border-neon/40 transition-all duration-500 text-center relative group"
                        >
                            <div className="flex justify-center mb-10">
                                <div className="p-5 bg-neon/5 rounded-3xl border border-neon/10 group-hover:bg-neon group-hover:text-background transition-colors duration-500">
                                    <item.icon className="w-10 h-10" />
                                </div>
                            </div>
                            <h3 className="text-xl font-heading font-black mb-5 text-white tracking-tight uppercase">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-10">
                    <div className="h-px w-20 bg-neon/20" />
                    <p className="text-zinc-400 text-sm font-black uppercase tracking-[0.4em]">Cansado de queimar caixa?</p>
                    <WhatsAppButton />
                </div>
            </div>
        </section>
    );
}
