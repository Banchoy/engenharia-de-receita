"use client";

import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, XCircle, CheckCircle2, Users, Target } from 'lucide-react';

export default function Anatomy() {
    return (
        <section id="anatomy" className="w-full py-32 px-6 flex flex-col items-center bg-zinc-950/20">
            <div className="w-full max-w-6xl relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <h2 className="text-4xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase">
                        A ANATOMIA DA <span className="text-neon neon-text">ATRAÇÃO MAGNÉTICA</span>
                    </h2>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        Por que as agências comuns falham em trazer leads qualificados
                        e como nossa engenharia cria um filtro de capital automático.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-20">
                    {/* Lado: Agência Comum */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-red-500/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-zinc-950/40 border border-white/5 p-10 md:p-14 rounded-[3.5rem] space-y-10">
                            <div className="flex items-center gap-4 text-red-500">
                                <ShieldAlert className="w-8 h-8" />
                                <span className="text-sm font-black uppercase tracking-[0.3em]">Agência Comum</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tight">Foco em <span className="text-red-500/50">Volume e Vaidade</span></h3>

                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 opacity-50">
                                    <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Headline Típica</p>
                                    <p className="text-white font-medium text-lg italic">"Aumente suas vendas hoje mesmo!"</p>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        "Atrai curiosos e buscadores de preço",
                                        "Custo por Lead baixo, mas venda difícil",
                                        "Promessas genéricas que cansam o lead",
                                        "Sem filtro de capital ou qualificação"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-zinc-500 text-sm font-medium">
                                            <XCircle className="w-5 h-5 text-red-500/40 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3 text-red-500/60 font-black text-[10px] uppercase tracking-widest">
                                    <Users className="w-4 h-4" /> Público Desqualificado
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lado: Engenharia de Receita */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-neon/20 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-50 transition-opacity" />
                        <div className="relative bg-zinc-950/60 border border-neon/20 p-10 md:p-14 rounded-[3.5rem] space-y-10 shadow-[0_0_50px_rgba(222,255,154,0.05)]">
                            <div className="flex items-center gap-4 text-neon">
                                <ShieldCheck className="w-8 h-8" />
                                <span className="text-sm font-black uppercase tracking-[0.3em]">Nossa Engenharia</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tight">Foco em <span className="text-neon neon-text">Filtro e Capital</span></h3>

                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-neon/5 border border-neon/20 space-y-2 shadow-inner">
                                    <p className="text-xs font-bold text-neon uppercase tracking-widest opacity-60">Headline de Engenharia</p>
                                    <p className="text-white font-black text-lg">"Exclusivo para operações que faturam +R$ 100k/mês"</p>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        "Expulsa curiosos já no primeiro contato",
                                        "Atrai somente quem pode pagar seu ticket",
                                        "Copy baseada em DOR e ESCABILIDADE",
                                        "Filtro de qualificação financeira nativo"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-zinc-300 text-sm font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-neon shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3 text-neon font-black text-[10px] uppercase tracking-widest">
                                    <Target className="w-4 h-4" /> Leads de Alto Ticket
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
