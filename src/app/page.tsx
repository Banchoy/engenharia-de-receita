import Link from 'next/link';

export default function Home() {
    return (
        <main className="w-full bg-[#050505] text-[#E5E7EB] font-sans h-auto">
            {/* HERO SECTION */}
            <section className="relative flex flex-col items-center justify-center py-24 px-6 bg-grid-pattern overflow-hidden h-auto min-h-screen">
                {/* Glow effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-8 h-auto">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon/30 bg-neon/5 text-neon text-sm font-bold tracking-widest uppercase mb-4 h-auto">
                        <i className="fa-solid fa-bolt"></i> Sistema Validado para High Ticket
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl font-black leading-tight tracking-tight h-auto">
                        ENGENHARIA DE <br />
                        <span className="text-gradient">RECEITA PREVISÍVEL</span>
                    </h1>

                    <p className="font-sans font-medium text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed h-auto text-balance">
                        A metodologia exata por trás das empresas que pararam de depender de "curtidas" e escalam <strong className="text-white">lucro real</strong> todos os meses com anúncios qualificados.
                    </p>

                    <div className="mt-8 w-full max-w-md h-auto flex flex-col items-center justify-center">
                        <a href="#agendar" className="btn-neon flex items-center justify-center w-full bg-neon text-[#050505] font-heading font-black text-xl py-6 px-8 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 h-auto">
                            AGENDAR SESSÃO ESTRATÉGICA
                        </a>
                        <p className="mt-6 text-sm text-gray-500 font-medium h-auto"><i className="fa-solid fa-lock mr-2"></i> Diagnóstico 100% gratuito. Vagas limitadas.</p>
                    </div>
                </div>
            </section>

            {/* INIMIGO COMUM SECTION */}
            <section className="py-24 px-6 bg-[#050505] relative border-t border-[#1F2937] h-auto flex flex-col">
                <div className="w-full max-w-7xl mx-auto h-auto flex flex-col">
                    <div className="mb-16 md:mb-24 h-auto flex flex-col">
                        <h2 className="font-heading text-4xl md:text-5xl font-black border-l-4 border-neon pl-6 h-auto">
                            Por que as agências <span className="text-neon">falham?</span>
                        </h2>
                        <p className="mt-6 font-sans font-medium text-xl text-gray-400 max-w-2xl h-auto text-balance">O seu problema não é falta de tráfego, é a qualidade do tráfego. Veja onde o mercado comum erra:</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full h-auto">
                        {/* Card 1 */}
                        <div className="bg-[#121212] border border-[#1F2937] p-8 md:p-12 rounded-3xl flex flex-1 flex-col h-auto hover:border-neon/50 transition-colors duration-300">
                            <div className="w-16 h-16 shrink-0 bg-[#050505] border border-[#1F2937] text-neon rounded-2xl flex items-center justify-center text-2xl mb-8">
                                <i className="fa-regular fa-thumbs-down"></i>
                            </div>
                            <h3 className="font-heading text-2xl font-black mb-4 text-white uppercase tracking-tighter">Métricas de Vaidade</h3>
                            <p className="font-sans font-medium text-gray-400 leading-relaxed max-w-none text-balance h-auto">
                                Focam em curtidas e seguidores que não pagam os boletos da sua empresa. Curtidas geram dopamina, vendas geram caixa real. Otimizar para engajamento atrai quem gosta de clicar, não quem tem poder aquisitivo.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#121212] border border-[#1F2937] p-8 md:p-12 rounded-3xl flex flex-1 flex-col h-auto hover:border-neon/50 transition-colors duration-300">
                            <div className="w-16 h-16 shrink-0 bg-[#050505] border border-[#1F2937] text-neon rounded-2xl flex items-center justify-center text-2xl mb-8">
                                <i className="fa-solid fa-robot"></i>
                            </div>
                            <h3 className="font-heading text-2xl font-black mb-4 text-white uppercase tracking-tighter">Apertadores de Botão</h3>
                            <p className="font-sans font-medium text-gray-400 leading-relaxed max-w-none text-balance h-auto">
                                Fazem o tráfego, mas não entendem o seu processo comercial ou a sua margem. Injetar tráfego numa oferta fraca ou numa equipe que não sabe fechar é apenas queimar caixa.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#121212] border border-[#1F2937] p-8 md:p-12 rounded-3xl flex flex-1 flex-col h-auto hover:border-neon/50 transition-colors duration-300">
                            <div className="w-16 h-16 shrink-0 bg-[#050505] border border-[#1F2937] text-neon rounded-2xl flex items-center justify-center text-2xl mb-8">
                                <i className="fa-solid fa-link-slash"></i>
                            </div>
                            <h3 className="font-heading text-2xl font-black mb-4 text-white uppercase tracking-tighter">A Desconexão</h3>
                            <p className="font-sans font-medium text-gray-400 leading-relaxed max-w-none text-balance h-auto">
                                O ralo invisível: O marketing diz que "os leads são bons porque estão baratos", mas o comercial diz que "ninguém compra". A sua equipe perde horas com curiosos não qualificados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESTUDO DE CASO SECTION */}
            <section className="py-24 px-6 bg-neon text-[#050505] relative h-auto flex flex-col">
                <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between h-auto">
                    <div className="w-full lg:w-[55%] flex flex-col h-auto">
                        <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight h-auto">
                            Resultado:<br />Engenharia na Prática
                        </h2>
                        <p className="font-sans font-medium text-xl md:text-2xl mb-10 text-[#050505]/80 h-auto text-balance">
                            "Isso não foi sorte. Foi a aplicação rigorosa de filtros. Em nichos de alto ticket, o volume de leads importa menos do que a capacidade de compra de cada um deles."
                        </p>

                        <div className="bg-[#050505] text-white p-8 md:p-12 rounded-3xl shadow-xl h-auto flex flex-col">
                            <div className="mb-8 pb-8 border-b border-[#1F2937] h-auto flex flex-col">
                                <p className="font-sans font-medium text-gray-400 uppercase tracking-wider text-sm mb-2 h-auto">Nicho do Cliente</p>
                                <p className="text-2xl md:text-3xl font-heading font-black text-neon h-auto uppercase tracking-tighter">Alto Ticket (Imóveis/Maquinário)</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-8 h-auto">
                                <div className="flex flex-col flex-1 h-auto">
                                    <p className="font-sans font-medium text-gray-400 text-sm mb-2 h-auto uppercase">Investimento</p>
                                    <p className="text-2xl font-bold font-sans h-auto">R$ 3.758,45</p>
                                </div>
                                <div className="flex flex-col flex-1 h-auto">
                                    <p className="font-sans font-medium text-gray-400 text-sm mb-2 h-auto uppercase">Leads</p>
                                    <p className="text-2xl font-bold font-sans h-auto">1.498</p>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-[#1F2937] h-auto flex flex-col">
                                <p className="font-sans font-medium text-gray-400 text-sm mb-2 h-auto uppercase">Faturamento Total Gerado</p>
                                <p className="text-4xl md:text-6xl font-heading font-black text-neon h-auto">R$ 1.500.000,00</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[45%] flex flex-col items-center justify-center text-center h-auto">
                        <div className="text-[120px] md:text-[200px] font-heading font-black leading-none tracking-tighter drop-shadow-lg h-auto">
                            399x
                        </div>
                        <div className="text-3xl font-heading font-black tracking-widest uppercase mt-6 h-auto text-balance">
                            ROAS Alcançado
                        </div>
                        <p className="mt-6 text-xl font-sans font-medium text-[#050505]/80 max-w-md h-auto text-balance">
                            Para cada R$ 1,00 investido em anúncios, R$ 399,10 retornaram em faturamento líquido para o cliente.
                        </p>
                    </div>
                </div>
            </section>

            {/* O MÉTODO SECTION */}
            <section className="py-24 px-6 bg-[#050505] relative h-auto flex flex-col">
                <div className="w-full max-w-7xl mx-auto h-auto flex flex-col">
                    <div className="text-center mb-20 md:mb-32 h-auto flex flex-col items-center">
                        <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-6 h-auto uppercase tracking-tighter">
                            Como vamos implementar?
                        </h2>
                        <p className="font-sans font-medium text-xl text-gray-400 max-w-3xl h-auto text-balance">Os 3 pilares da metodologia de Engenharia de Receita que transformam a sua empresa numa máquina previsível.</p>
                    </div>

                    <div className="flex flex-col gap-24 md:gap-32 h-auto">
                        {/* Pilar 1: Atração Magnética */}
                        <div className="flex flex-col gap-12 h-auto">
                            <div className="flex flex-col md:flex-row gap-8 items-start h-auto">
                                <div className="w-16 h-16 shrink-0 bg-neon text-[#050505] rounded-full flex items-center justify-center text-3xl font-black">1</div>
                                <div className="flex flex-col h-auto">
                                    <h3 className="font-heading text-3xl md:text-4xl font-black text-white mb-6 h-auto uppercase tracking-tighter">Atração Magnética (Repulsão Intencional)</h3>
                                    <p className="font-sans font-medium text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl h-auto text-balance">
                                        Paramos de usar "iscas grátis" que atraem sugadores de conteúdo. A estratégia aqui é a <strong className="text-neon">Repulsão Intencional</strong>. O bom anúncio de alto ticket afasta o curioso e atrai apenas o comprador qualificado. Usamos copy focada em tempo, exclusividade e dor aguda, não em descontos.
                                    </p>
                                </div>
                            </div>

                            {/* Grid de Exemplos de Anúncios */}
                            <div className="flex flex-col lg:flex-row gap-10 lg:ml-24 h-auto w-full max-w-none">
                                {/* Exemplo 1: Excludente */}
                                <div className="bg-[#121212] flex-1 border border-[#1F2937] rounded-3xl overflow-hidden shadow-2xl flex flex-col h-auto">
                                    <div className="bg-[#050505] p-6 flex flex-row items-center gap-4 border-b border-[#1F2937] h-auto">
                                        <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center shrink-0 border border-[#1F2937]"><i className="fa-solid fa-building text-neon"></i></div>
                                        <div className="flex flex-col h-auto">
                                            <p className="text-white font-sans font-bold text-sm h-auto">Empresa Premium</p>
                                            <p className="text-gray-500 font-sans text-xs h-auto">Patrocinado</p>
                                        </div>
                                    </div>
                                    <div className="w-full aspect-square bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-12 text-center relative overflow-hidden h-auto">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#050505]"></div>
                                        <div className="relative z-10 border border-[#1F2937] p-8 md:p-10 rounded-2xl bg-[#050505]/95 backdrop-blur-xl h-auto w-[90%] flex flex-col">
                                            <h4 className="font-heading text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-6 h-auto">Aviso de Exclusividade</h4>
                                            <p className="font-sans font-medium text-gray-300 text-lg md:text-xl h-auto text-balance">Não clique aqui se a sua empresa fatura <span className="text-neon font-black">menos de 100 mil/mês</span>.</p>
                                            <div className="mt-8 font-sans font-medium text-xs md:text-sm text-gray-500 h-auto text-balance border-t border-[#1F2937] pt-4">Este sistema foi desenhado para quem precisa escalar, não para quem precisa começar.</div>
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-10 bg-[#121212] flex flex-col h-auto border-t border-[#1F2937]">
                                        <h5 className="text-neon font-heading font-black text-xl md:text-2xl mb-4 h-auto uppercase tracking-tighter"><i className="fa-solid fa-bullseye mr-3"></i> Anúncio Excludente</h5>
                                        <p className="font-sans font-medium text-gray-400 text-base md:text-lg h-auto text-balance"><strong className="text-white font-bold">Por que funciona?</strong> Desperta curiosidade, qualifica instantaneamente pelo nível de faturamento e afasta iniciantes que iriam tomar o tempo do seu time comercial.</p>
                                    </div>
                                </div>

                                {/* Exemplo 2: Foco na Dor */}
                                <div className="bg-[#121212] flex-1 border border-[#1F2937] rounded-3xl overflow-hidden shadow-2xl flex flex-col h-auto">
                                    <div className="bg-[#050505] p-6 flex flex-row items-center gap-4 border-b border-[#1F2937] h-auto">
                                        <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center shrink-0 border border-[#1F2937]"><i className="fa-solid fa-user-tie text-neon"></i></div>
                                        <div className="flex flex-col h-auto">
                                            <p className="text-white font-sans font-bold text-sm h-auto">Consultoria Especializada</p>
                                            <p className="text-gray-500 font-sans text-xs h-auto">Patrocinado</p>
                                        </div>
                                    </div>
                                    <div className="w-full aspect-square bg-[#050505] flex flex-col items-center justify-center p-8 md:p-12 text-center relative overflow-hidden h-auto">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#121212] to-[#050505]"></div>
                                        <div className="relative z-10 w-full flex flex-col h-auto items-start text-left w-[90%] mx-auto">
                                            <h4 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-6 h-auto text-balance">
                                                Você está <span className="text-neon">liderando</span> sua empresa...<br />
                                                <span className="text-gray-500 text-xl md:text-3xl mt-6 block">ou apenas gerenciando o caos do seu time de vendas?</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-10 bg-[#121212] flex flex-col h-auto border-t border-[#1F2937]">
                                        <h5 className="text-neon font-heading font-black text-xl md:text-2xl mb-4 h-auto uppercase tracking-tighter"><i className="fa-solid fa-brain mr-3"></i> Foco na Dor do Empresário</h5>
                                        <p className="font-sans font-medium text-gray-400 text-base md:text-lg h-auto text-balance"><strong className="text-white font-bold">Por que funciona?</strong> Bate na dor exata do dono do negócio (falta de tempo e desorganização). Conversa de CEO para CEO, ignorando métricas técnicas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pilar 2: Filtro de Qualidade Absoluta */}
                        <div className="flex flex-col md:flex-row gap-8 items-start h-auto">
                            <div className="w-16 h-16 shrink-0 bg-neon text-[#050505] rounded-full flex items-center justify-center text-3xl font-black">2</div>
                            <div className="flex flex-col h-auto w-full">
                                <h3 className="font-heading text-3xl md:text-4xl font-black text-white mb-6 h-auto uppercase tracking-tighter">Filtro de Qualidade Absoluta</h3>
                                <p className="font-sans font-medium text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl h-auto text-balance">
                                    Eliminamos o "curioso" e entregamos apenas clientes prontos para o comercial fechar. Implementamos uma camada de atrito inteligente: leads ruins são bloqueados antes de tocarem no telefone do seu vendedor.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 text-gray-300 w-full h-auto">
                                    <div className="flex flex-row items-center gap-4 bg-[#121212] p-6 lg:p-8 rounded-2xl border border-[#1F2937] h-auto flex-1 min-w-[280px]">
                                        <i className="fa-solid fa-check text-neon text-2xl shrink-0"></i> 
                                        <span className="font-sans font-bold text-lg leading-snug text-white">Formulários Qualificadores</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-4 bg-[#121212] p-6 lg:p-8 rounded-2xl border border-[#1F2937] h-auto flex-1 min-w-[280px]">
                                        <i className="fa-solid fa-check text-neon text-2xl shrink-0"></i> 
                                        <span className="font-sans font-bold text-lg leading-snug text-white">Automação de Pré-venda</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-4 bg-[#121212] p-6 lg:p-8 rounded-2xl border border-[#1F2937] h-auto flex-1 min-w-[280px]">
                                        <i className="fa-solid fa-check text-neon text-2xl shrink-0"></i> 
                                        <span className="font-sans font-bold text-lg leading-snug text-white">Scripts de Triagem Validados</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-4 bg-[#121212] p-6 lg:p-8 rounded-2xl border border-[#1F2937] h-auto flex-1 min-w-[280px]">
                                        <i className="fa-solid fa-check text-neon text-2xl shrink-0"></i> 
                                        <span className="font-sans font-bold text-lg leading-snug text-white">Integração CRM Automática</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pilar 3: Escala Lucrativa */}
                        <div className="flex flex-col md:flex-row gap-8 items-start h-auto">
                            <div className="w-16 h-16 shrink-0 bg-neon text-[#050505] rounded-full flex items-center justify-center text-3xl font-black">3</div>
                            <div className="flex flex-col h-auto">
                                <h3 className="font-heading text-3xl md:text-4xl font-black text-white mb-6 h-auto uppercase tracking-tighter">Escala Lucrativa & Previsível</h3>
                                <p className="font-sans font-medium text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl h-auto text-balance">
                                    Escalar tráfego é fácil, o difícil é escalar mantendo o Custo de Aquisição (CAC) controlado. Nesta etapa, garantimos que o seu funil de vendas e os processos suportam receber o dobro de investimento amanhã sem quebrar. Previsibilidade de 12 meses, não picos sazonais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section id="agendar" className="py-24 px-6 bg-[#121212] border-t border-[#1F2937] relative overflow-hidden h-auto flex flex-col">
                {/* Glow effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon opacity-5 blur-[200px] rounded-full pointer-events-none"></div>

                <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 h-auto">
                    <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-8 h-auto leading-tight tracking-tighter uppercase">
                        Vamos construir a sua <span className="text-neon">Escala?</span>
                    </h2>
                    <p className="font-sans font-medium text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl h-auto text-balance">
                        O diagnóstico está feito. Se você busca estes mesmos resultados, quer parar de lidar com curiosos e precisa de previsibilidade real de caixa, o próximo passo é nosso.
                    </p>

                    <a href="https://wa.me/5511999999999?text=Ol%C3%A1,%20vim%20da%20p%C3%A1gina%20de%20Engenharia%20de%20Receita%20e%20gostaria%20de%20agendar%20minha%20Sess%C3%A3o%20Estrat%C3%A9gica."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon w-full sm:w-auto inline-flex flex-row items-center justify-center gap-4 bg-neon text-[#050505] font-heading font-black text-xl md:text-2xl py-6 px-10 md:px-14 rounded-full shadow-[0_0_30px_rgba(222,255,154,0.3)] hover:shadow-[0_0_50px_rgba(222,255,154,0.6)] hover:bg-white transition-all duration-300 h-auto">
                        <i className="fa-brands fa-whatsapp text-4xl shrink-0"></i>
                        <span>AGENDAR SESSÃO ESTRATÉGICA</span>
                    </a>

                    <div className="mt-16 p-8 md:p-10 bg-[#050505] border border-[#1F2937] rounded-3xl text-left max-w-3xl w-full flex flex-col md:flex-row gap-8 items-start h-auto">
                        <div className="w-16 h-16 shrink-0 bg-[#121212] border border-[#1F2937] rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-shield-halved text-neon text-3xl"></i>
                        </div>
                        <div className="flex flex-col h-auto">
                            <h4 className="font-heading font-black text-2xl text-white mb-4 h-auto uppercase tracking-tighter">Diagnóstico sem compromisso</h4>
                            <p className="font-sans font-medium text-gray-400 text-base md:text-lg leading-relaxed h-auto text-balance">
                                Esta sessão não é uma ligação de vendas disfarçada. É um mapeamento do seu funil atual. Se encontrarmos o seu gargalo e eu não for a melhor pessoa para resolver, eu te indico quem é. Mas se eu for, nós vamos construir a sua escala juntos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-10 px-6 text-center text-gray-500 bg-[#050505] text-sm md:text-base border-t border-[#1F2937] font-sans h-auto flex flex-col items-center justify-center">
                <p>&copy; 2024 Engenharia de Receita Previsível. Todos os direitos reservados.</p>
            </footer>
        </main>
    );
}
