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
        <section className="py-32 px-6 border-y border-white/5 bg-zinc-950/20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight">
                        O PROBLEMA DAS <span className="text-red-500">AGÊNCIAS COMUNS</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-base">
                        Elas te vendem o processo, nós te entregamos o lucro. Entenda por que 90% das estratégias de marketing digital falham em negócios High Ticket.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl glass border-white/5 active:border-neon/30 transition-all"
                        >
                            <item.icon className="w-10 h-10 text-neon/80 mb-6" />
                            <h3 className="text-lg font-heading font-bold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6">
                    <p className="text-zinc-400 text-sm font-medium">Cansado de jogar dinheiro fora?</p>
                    <WhatsAppButton variant="inline" />
                </div>
            </div>
        </section>
    );
}
