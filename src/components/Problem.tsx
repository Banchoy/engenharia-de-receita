"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, Users } from "lucide-react";

import WhatsAppButton from "./WhatsAppButton";

const problems = [
    {
        icon: ShieldAlert,
        title: "Métricas de Vaidade",
        description: "Curtidas, comentários e visualizações não pagam boletos nem garantem ROI. Focamos exclusivamente em métricas de conversão real e volume de vendas que impactam diretamente o seu caixa e a saúde financeira do seu negócio."
    },
    {
        icon: TrendingDown,
        title: "Falta de Previsibilidade",
        description: "Viver em uma montanha-russa de faturamento — um mês bom seguido de dois meses ruins — impede o planejamento e o crescimento sustentável. Implementamos processos que garantem um fluxo constante e previsível de receita."
    },
    {
        icon: Users,
        title: "Leads Sem Qualidade",
        description: "Não adianta ter volume se o seu time comercial gasta 90% do tempo filtrando curiosos sem poder de compra. Nossa engenharia entrega leads qualificados e prontos para fechar contratos de alto ticket."
    }
];

export default function Problem() {
    return (
        <section className="py-48 px-6 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-neon/2 opacity-[0.03] blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-40 space-y-10">
                    <h2 className="text-4xl md:text-7xl font-heading font-black tracking-tight leading-none text-white">
                        O PROBLEMA DAS<br />
                        <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.2)]">AGÊNCIAS COMUNS</span>
                    </h2>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">
                        Elas te vendem o processo (e métricas vazias), nós te entregamos o lucro real.
                        Entenda por que 90% das estratégias falham em negócios High Ticket por falta de uma engenharia de aquisição rigorosa.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-40">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            whileHover="hover"
                            animate="initial"
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-14 rounded-[3rem] glass border-neon/10 hover:border-neon/40 transition-all duration-500 text-center relative group flex flex-col items-center justify-center min-h-[400px] cursor-default"
                        >
                            <div className="flex flex-col items-center justify-center space-y-8 w-full">
                                <div className="p-6 bg-neon/5 rounded-3xl border border-neon/10 group-hover:bg-neon group-hover:text-background transition-all duration-500 shadow-neon/5">
                                    <item.icon className="w-12 h-12" />
                                </div>

                                <h3 className="text-2xl font-heading font-black text-white tracking-tight uppercase">
                                    {item.title}
                                </h3>

                                <motion.div
                                    variants={{
                                        initial: { height: 0, opacity: 0, marginTop: 0 },
                                        hover: { height: "auto", opacity: 1, marginTop: 24 }
                                    }}
                                    className="overflow-hidden hidden md:block w-full"
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <p className="text-zinc-500 leading-relaxed text-sm font-medium pt-4 border-t border-neon/10">
                                        {item.description}
                                    </p>
                                </motion.div>

                                {/* Fallback Mobile (sempre visível ou com toque) */}
                                <div className="md:hidden">
                                    <p className="text-zinc-500 leading-relaxed text-sm font-medium pt-4 border-t border-neon/10">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
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
