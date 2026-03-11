"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Como garantem a qualidade do lead?",
        answer: "Utilizamos anúncios excludentes que filtram o lead antes mesmo do clique. Nossa cópia é desenhada para afastar curiosos e atrair apenas quem tem capital para investir no seu ticket."
    },
    {
        question: "O meu nicho é muito específico, funciona?",
        answer: "Sim. A engenharia de receita baseia-se em pilares de dor e escala que são universais para qualquer serviço de alto ticket. Adaptamos o mecanismo único ao seu mercado específico."
    },
    {
        question: "Qual o tempo médio para o ROI?",
        answer: "Geralmente vemos os primeiros resultados de escala entre o dia 15 e 30. O diagnóstico inicial nos permite acelerar o que já funciona e cortar o que drena seu caixa."
    },
    {
        question: "Preciso de um alto investimento inicial?",
        answer: "Recomendamos um investimento mínimo que permita ao algoritmo de engenharia coletar dados suficientes para otimização, mas focamos sempre na eficiência do CAC (Custo de Aquisição)."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="w-full py-32 px-6 flex flex-col items-center">
            <div className="w-full max-w-4xl relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-neon font-black text-[10px] uppercase tracking-[0.5em] block opacity-70">Dúvidas Frequentes</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase">
                        PERGUNTAS <span className="text-neon neon-text">ESTRATÉGICAS</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass rounded-3xl border-white/5 overflow-hidden transition-all duration-500 hover:border-neon/20">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-8 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg md:text-xl font-black text-white uppercase tracking-tight group-hover:text-neon transition-colors">
                                    {faq.question}
                                </span>
                                <div className="ml-4 flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 text-neon" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-zinc-600" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-8 pb-8">
                                            <p className="text-[#E5E7EB]/70 text-lg leading-[1.6] font-medium">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-[3rem] bg-neon/10 border border-neon/20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-neon rounded-2xl flex items-center justify-center text-background shadow-lg shadow-neon/20">
                            <HelpCircle className="w-8 h-8" />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-black uppercase text-xl tracking-tight">Ainda tem dúvidas?</p>
                            <p className="text-zinc-500 font-medium">Fale diretamente com um especialista.</p>
                        </div>
                    </div>
                    <button className="bg-neon text-background font-black uppercase text-xs tracking-widest px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-neon/20">
                        Chamar no WhatsApp
                    </button>
                </div>
            </div>
        </section>
    );
}
