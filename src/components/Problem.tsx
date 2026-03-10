"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, Users } from "lucide-react";

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
        <section className="py-24 px-4 bg-zinc-950/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
                        O PROBLEMA DAS <span className="text-red-500">AGÊNCIAS COMUNS</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Elas te vendem o processo, nós te entregamos o lucro. Entenda por que 90% das estratégias de marketing digital falham em negócios High Ticket.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-2xl glass border-white/5 group hover:border-neon/20 transition-colors"
                        >
                            <item.icon className="w-12 h-12 text-neon mb-6" />
                            <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-neon transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
