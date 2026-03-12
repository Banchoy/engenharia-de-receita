"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, Users } from "lucide-react";

import WhatsAppButton from "./WhatsAppButton";

const problems = [
    {
        icon: ShieldAlert,
        title: "Métricas de Vaidade",
        description: "Pare de perseguir curtidas. Nossa engenharia foca exclusivamente em métricas de conversão real que impactam diretamente o seu faturamento líquido."
    },
    {
        icon: TrendingDown,
        title: "Falta de Previsibilidade",
        description: "Chega de montanha-russa financeira. Implementamos processos que garantem um fluxo constante e previsível de receita, permitindo crescimento sustentável."
    },
    {
        icon: Users,
        title: "Leads Sem Qualidade",
        description: "Seu time comercial perde tempo com curiosos? Nossa engenharia entrega leads qualificados e prontos para fechar contratos de alto ticket, otimizando seu funil de vendas."
    }
];

export default function Problem() {
    return (
        <section id="problem" className="w-full py-16 md:py-32 px-6 relative overflow-hidden flex flex-col items-center">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[600px] bg-neon/2 opacity-[0.03] blur-[120px] pointer-events-none" />

            <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
                <div className="text-center mb-24 md:mb-40 space-y-10">
                    <h2 className="text-4xl md:text-7xl font-heading font-black tracking-tight leading-none text-white text-balance uppercase">
                        O PROBLEMA DAS<br />
                        <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.2)]">AGÊNCIAS COMUNS</span>
                    </h2>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">
                        Elas te vendem o processo (e métricas vazias), nós te entregamos o lucro real.
                        Entenda por que 90% das estratégias falham em negócios High Ticket por falta de uma engenharia de aquisição rigorosa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 w-full">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            whileHover="hover"
                            animate="initial"
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 md:p-12 rounded-[3rem] glass border-neon/10 hover:border-neon/40 transition-all duration-500 text-center relative group flex flex-col items-center h-auto cursor-default"
                        >
                            <div className="flex flex-col items-center space-y-10 w-full h-full">
                                <div className="p-6 bg-red-500/10 rounded-3xl border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-red-500/5 shrink-0">
                                    <item.icon className="w-12 h-12" />
                                </div>

                                <h3 className="text-2xl font-heading font-black text-white tracking-tight uppercase leading-tight shrink-0 text-balance">
                                    {item.title}
                                </h3>

                                <div className="flex-1 flex flex-col items-center w-full">
                                    <motion.div
                                        variants={{
                                            initial: { height: 0, opacity: 0 },
                                            hover: { height: "auto", opacity: 1 }
                                        }}
                                        className="overflow-hidden hidden md:block w-full"
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <p className="text-[#E5E7EB]/70 leading-relaxed text-sm md:text-base font-medium pt-8 border-t border-white/5 break-words w-full">
                                            {item.description}
                                        </p>
                                    </motion.div>

                                    {/* Fallback Mobile (sempre visível) */}
                                    <div className="md:hidden w-full">
                                        <p className="text-[#E5E7EB]/70 leading-relaxed text-sm md:text-base font-medium pt-8 border-t border-white/5 break-words w-full">
                                            {item.description}
                                        </p>
                                    </div>
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
