"use client";

import { motion } from 'framer-motion';
import { PlayCircle, ShieldCheck, Zap } from 'lucide-react';

const creatives = [
    {
        title: "Anúncio Experimental",
        tag: "DOR / ESCALA",
        description: "Foco no problema que impede o empresário de faturar 7 dígitos.",
        color: "from-blue-500/10"
    },
    {
        title: "Anúncio de Qualificação",
        tag: "EXCLUDENTE",
        description: "Filtra por faturamento e maturidade de gestão.",
        color: "from-neon/10"
    },
    {
        title: "Anúncio de Autoridade",
        tag: "MÉTODO",
        description: "Exposição do mecanismo único de engenharia de receita.",
        color: "from-purple-500/10"
    }
];

export default function CreativeShowcase() {
    return (
        <section id="creatives" className="w-full py-40 px-6 flex flex-col items-center bg-zinc-950/20">
            <div className="w-full max-w-6xl relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <h2 className="text-4xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase">
                        SHOWCASE DE <span className="text-neon neon-text">CRIATIVOS</span>
                    </h2>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        Amostras dos modelos de anúncios que usamos para filtrar o mercado
                        e atrair apenas leads de alto ticket.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {creatives.map((creative, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col items-center"
                        >
                            <div className={`w-full aspect-[4/5] rounded-[3.5rem] bg-gradient-to-br ${creative.color} to-transparent border border-white/5 flex items-center justify-center relative overflow-hidden transition-all duration-700 group-hover:border-neon/30`}>
                                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <PlayCircle className="w-16 h-16 text-white/20 group-hover:text-neon group-hover:scale-110 transition-all duration-500 relative z-10" />

                                <div className="absolute top-8 right-8">
                                    <span className="px-4 py-2 bg-zinc-950 border border-white/10 rounded-full text-[8px] font-black text-neon uppercase tracking-widest shadow-2xl">
                                        {creative.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 text-center space-y-3">
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">{creative.title}</h3>
                                <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[250px]">
                                    {creative.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3 text-zinc-600">
                        <ShieldCheck className="w-5 h-5 text-neon" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Segurança e Replicabilidade Garantidas</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
