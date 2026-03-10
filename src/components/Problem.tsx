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
        <section className="py-40 px-6 border-y border-neon/10 bg-zinc-950/40 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(222,255,154,0.03),transparent)] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-24 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-none">
                        O PROBLEMA DAS <br /><span className="text-red-500">AGÊNCIAS COMUNS</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Elas te vendem o processo, nós te entregamos o lucro. Entenda por que 90% das estratégias de marketing digital falham em negócios High Ticket.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[2rem] glass border-neon/20 shadow-[0_0_15px_rgba(222,255,154,0.05)] text-center group hover:border-neon/50 hover:shadow-neon/10 transition-all duration-500"
                        >
                            <div className="flex justify-center mb-8">
                                <item.icon className="w-12 h-12 text-neon" />
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4 text-white">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-8">
                    <p className="text-zinc-400 text-base font-semibold uppercase tracking-[0.2em]">Cansado de jogar faturamento no lixo?</p>
                    <WhatsAppButton variant="inline" className="scale-110" />
                </div>
            </div>
        </section>
    );
}
