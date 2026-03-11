"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Target } from 'lucide-react';
import { trackLeadEvent } from '@/lib/tracking';

export default function ROICalculator() {
    const [investment, setInvestment] = useState(5000);
    const [ticket, setTicket] = useState(2000);
    const [conversion, setConversion] = useState(10);
    const [results, setResults] = useState({ revenue: 0, roas: 0, leads: 0 });

    useEffect(() => {
        const leads = Math.floor(investment / 50); // Estimativa de R$ 50 por lead qualificado
        const sales = Math.floor(leads * (conversion / 100));
        const revenue = sales * ticket;
        const roas = revenue / investment;

        setResults({ revenue, roas, leads });
    }, [investment, ticket, conversion]);

    const handleInteraction = () => {
        trackLeadEvent({
            event_type: 'roi_calc',
            metadata: { investment, ticket, conversion, ...results }
        });
    };

    return (
        <section id="roi-calculator" className="w-full py-32 px-6 flex flex-col items-center relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-neon font-black text-[10px] uppercase tracking-[0.5em] block opacity-70">Ferramenta de Diagnóstico</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase">
                        SIMULE SUA <span className="text-neon neon-text">ESCALA Profissional</span>
                    </h2>
                    <p className="text-[#E5E7EB]/80 max-w-2xl mx-auto text-lg font-medium leading-[1.6]">
                        Insira seus números abaixo e veja o potencial represado da sua operação
                        com a Engenharia de Receita Previsível.
                    </p>
                </div>

                <div className="w-full grid lg:grid-cols-2 gap-10">
                    {/* Painel de Inputs */}
                    <div className="glass p-10 md:p-14 rounded-[3rem] border-white/5 space-y-10">
                        <div className="space-y-6">
                            <label className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest opacity-80">
                                <DollarSign className="w-4 h-4 text-neon" /> Investimento Mensal
                            </label>
                            <input
                                type="range" min="1000" max="50000" step="500"
                                value={investment}
                                onChange={(e) => { setInvestment(Number(e.target.value)); handleInteraction(); }}
                                className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-neon"
                            />
                            <div className="flex justify-between items-center bg-zinc-950/60 p-4 rounded-2xl border border-white/5">
                                <span className="text-[#E5E7EB]/40 text-xs font-bold uppercase tracking-widest">Valor:</span>
                                <span className="text-neon font-black text-2xl tracking-tighter">R$ {investment.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest opacity-80">
                                <Target className="w-4 h-4 text-neon" /> Ticket Médio Produto
                            </label>
                            <input
                                type="range" min="500" max="20000" step="100"
                                value={ticket}
                                onChange={(e) => { setTicket(Number(e.target.value)); handleInteraction(); }}
                                className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-neon"
                            />
                            <div className="flex justify-between items-center bg-zinc-950/60 p-4 rounded-2xl border border-white/5">
                                <span className="text-[#E5E7EB]/40 text-xs font-bold uppercase tracking-widest">Valor:</span>
                                <span className="text-white font-black text-2xl tracking-tighter">R$ {ticket.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest opacity-80">
                                <TrendingUp className="w-4 h-4 text-neon" /> Taxa de Conversão Est.
                            </label>
                            <input
                                type="range" min="1" max="50" step="1"
                                value={conversion}
                                onChange={(e) => { setConversion(Number(e.target.value)); handleInteraction(); }}
                                className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-neon"
                            />
                            <div className="flex justify-between items-center bg-zinc-950/60 p-4 rounded-2xl border border-white/5">
                                <span className="text-[#E5E7EB]/40 text-xs font-bold uppercase tracking-widest">Percentual:</span>
                                <span className="text-white font-black text-2xl tracking-tighter">{conversion}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Painel de Resultados */}
                    <div className="bg-neon p-1 md:p-2 rounded-[3.5rem] shadow-[0_0_80px_rgba(222,255,154,0.15)]">
                        <div className="bg-zinc-950 h-full w-full rounded-[3.2rem] p-10 md:p-14 flex flex-col justify-between min-h-[500px]">
                            <div className="space-y-10">
                                <div className="space-y-3">
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E5E7EB]/40">Faturamento Projetado</p>
                                    <motion.p
                                        key={results.revenue}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter leading-none"
                                    >
                                        R$ {results.revenue.toLocaleString()}
                                    </motion.p>
                                </div>

                                <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-[#E5E7EB]/40">ROI/ROAS Esperado</p>
                                        <p className="text-3xl font-heading font-black text-neon leading-tight">{results.roas.toFixed(1)}x</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-[#E5E7EB]/40">Leads Qualificados</p>
                                        <p className="text-3xl font-heading font-black text-white leading-tight">{results.leads}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-14 space-y-8">
                                <p className="text-[#E5E7EB]/50 text-xs md:text-sm font-medium leading-[1.6]">
                                    *Estes números são baseados em benchmarks de operações que utilizam nossa metodologia de Engenharia de Receita.
                                </p>
                                <button className="w-full bg-neon text-background font-black uppercase text-xs tracking-[0.2em] py-6 rounded-2xl hover:scale-[1.02] transition-transform active:scale-[0.98] shadow-lg shadow-neon/20">
                                    Garantir Estes Números Agora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
