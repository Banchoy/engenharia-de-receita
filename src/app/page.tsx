import Link from 'next/link';

export default function Home() {
    return (
        <main className="w-full">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-grid-pattern overflow-hidden">
                {/* Glow effects de fundo */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-sm font-bold tracking-widest uppercase mb-4">
                        <i className="fa-solid fa-bolt"></i> Sistema Validado para High Ticket
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl font-black leading-tight tracking-tight">
                        ENGENHARIA DE <br />
                        <span className="text-gradient">RECEITA PREVISÍVEL</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                        A metodologia exata por trás das empresas que pararam de depender de "curtidas" e escalam <strong className="text-white">lucro real</strong> todos os meses com anúncios qualificados.
                    </p>

                    <div className="mt-8 w-full max-w-md">
                        <a href="#agendar" className="btn-neon block w-full bg-neon text-dark font-heading font-bold text-xl py-5 px-8 rounded-full hover:bg-white hover:scale-105 transition-all duration-300">
                            AGENDAR SESSÃO ESTRATÉGICA
                        </a>
                        <p className="mt-4 text-sm text-gray-500 font-medium"><i className="fa-solid fa-lock mr-2"></i> Diagnóstico 100% gratuito. Vagas limitadas.</p>
                    </div>
                </div>
            </section>

            {/* INIMIGO COMUM SECTION */}
            <section className="py-24 px-6 bg-dark relative border-t border-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:mb-24">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold border-l-4 border-neon pl-6">
                            Por que as agências <span className="text-neon">falham?</span>
                        </h2>
                        <p className="mt-6 text-xl text-gray-400 max-w-2xl">O seu problema não é falta de tráfego, é a qualidade do tráfego. Veja onde o mercado comum erra:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Card 1 */}
                        <div className="bg-card border border-gray-800 p-8 md:p-10 rounded-3xl flex flex-col h-full hover:border-neon/50 transition-colors duration-300 group">
                            <div className="w-16 h-16 bg-dark border border-gray-800 text-neon rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                                <i className="fa-regular fa-thumbs-down"></i>
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-4 text-white">Métricas de Vaidade</h3>
                            <p className="text-gray-400 leading-relaxed flex-grow">
                                Focam em curtidas e seguidores que não pagam os boletos da sua empresa. Curtidas geram dopamina, vendas geram caixa real. Otimizar para engajamento atrai quem gosta de clicar, não quem tem poder aquisitivo.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-card border border-gray-800 p-8 md:p-10 rounded-3xl flex flex-col h-full hover:border-neon/50 transition-colors duration-300 group">
                            <div className="w-16 h-16 bg-dark border border-gray-800 text-neon rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-robot"></i>
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-4 text-white">Apertadores de Botão</h3>
                            <p className="text-gray-400 leading-relaxed flex-grow">
                                Fazem o tráfego, mas não entendem o seu processo comercial ou a sua margem. Injetar tráfego numa oferta fraca ou numa equipa que não sabe fechar é apenas queimar caixa.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-card border border-gray-800 p-8 md:p-10 rounded-3xl flex flex-col h-full hover:border-neon/50 transition-colors duration-300 group">
                            <div className="w-16 h-16 bg-dark border border-gray-800 text-neon rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-link-slash"></i>
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-4 text-white">A Desconexão</h3>
                            <p className="text-gray-400 leading-relaxed flex-grow">
                                O ralo invisível: O marketing diz que "os leads são bons porque estão baratos", mas o comercial diz que "ninguém compra". A sua equipa perde horas com curiosos não qualificados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESTUDO DE CASO SECTION */}
            <section className="py-24 px-6 bg-neon text-dark relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                            Resultado:<br />Engenharia na Prática
                        </h2>
                        <p className="text-xl font-medium mb-8 text-dark/80">
                            "Isso não foi sorte. Foi a aplicação rigorosa de filtros. Em nichos de alto ticket, o volume de leads importa menos do que a capacidade de compra de cada um deles."
                        </p>

                        <div className="bg-dark text-white p-8 rounded-3xl shadow-xl">
                            <div className="mb-6 pb-6 border-b border-gray-800">
                                <p className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-2">Nicho do Cliente</p>
                                <p className="text-2xl font-heading font-bold text-neon">Alto Ticket (Imóveis/Maquinário)</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Investimento</p>
                                    <p className="text-2xl font-bold">R$ 3.758,45</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Leads</p>
                                    <p className="text-2xl font-bold">1.498</p>
                                </div>
                                <div className="col-span-2 mt-4 pt-6 border-t border-gray-800">
                                    <p className="text-gray-400 text-sm mb-1">Faturamento Total Gerado</p>
                                    <p className="text-4xl md:text-5xl font-heading font-black text-neon">R$ 1.500.000,00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-[120px] md:text-[180px] font-heading font-black leading-none tracking-tighter drop-shadow-lg">
                            399x
                        </div>
                        <div className="text-3xl font-bold tracking-widest uppercase mt-4">
                            ROAS Alcançado
                        </div>
                        <p className="mt-6 text-lg font-medium text-dark/70 max-w-sm">
                            Para cada R$ 1,00 investido em anúncios, R$ 399,10 retornaram em faturamento líquido para o cliente.
                        </p>
                    </div>
                </div>
            </section>

            {/* O MÉTODO SECTION */}
            <section className="py-24 px-6 bg-dark relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                            Como vamos implementar?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">Os 3 pilares da metodologia de Engenharia de Receita que transformam a sua empresa numa máquina previsível.</p>
                    </div>

                    <div className="space-y-32">
                        {/* Pilar 1: Atração Magnética (Expandido com Exemplos) */}
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-16 h-16 bg-neon text-dark rounded-full flex items-center justify-center text-2xl font-bold shrink-0">1</div>
                                <div>
                                    <h3 className="font-heading text-3xl font-bold text-white mb-4">Atração Magnética (Repulsão Intencional)</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
                                        Paramos de usar "iscas grátis" que atraem sugadores de conteúdo. A estratégia aqui é a <strong>Repulsão Intencional</strong>. O bom anúncio de alto ticket afasta o curioso e atrai apenas o comprador qualificado. Usamos copy focada em tempo, exclusividade e dor aguda, não em descontos.
                                    </p>
                                </div>
                            </div>

                            {/* Grid de Exemplos de Anúncios */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:ml-22 pl-0 md:pl-22">
                                {/* Exemplo 1: Excludente */}
                                <div className="bg-card border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="bg-[#1a1a1a] p-4 flex items-center gap-3 border-b border-gray-800">
                                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center"><i className="fa-solid fa-building text-gray-400"></i></div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Empresa Premium</p>
                                            <p className="text-gray-500 text-xs">Patrocinado</p>
                                        </div>
                                    </div>
                                    <div className="aspect-square bg-[#0a0a0a] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                                        <div className="relative z-10 border-2 border-red-500/50 p-6 rounded-xl bg-black/50 backdrop-blur-sm">
                                            <h4 className="font-heading text-2xl font-black text-white uppercase tracking-wider mb-4">Aviso de Exclusividade</h4>
                                            <p className="text-gray-300 text-lg">Não clique aqui se a sua empresa fatura <span className="text-red-400 font-bold">menos de 100 mil/mês</span>.</p>
                                            <div className="mt-6 text-sm text-gray-500">Este sistema foi desenhado para quem precisa escalar, não para quem precisa começar.</div>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-[#121212]">
                                        <h5 className="text-neon font-bold mb-2"><i className="fa-solid fa-bullseye mr-2"></i> Anúncio Excludente</h5>
                                        <p className="text-gray-400 text-sm"><strong>Por que funciona?</strong> Desperta curiosidade, qualifica instantaneamente pelo nível de faturamento e afasta iniciantes que iriam tomar o tempo do seu time.</p>
                                    </div>
                                </div>

                                {/* Exemplo 2: Foco na Dor */}
                                <div className="bg-card border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="bg-[#1a1a1a] p-4 flex items-center gap-3 border-b border-gray-800">
                                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center"><i className="fa-solid fa-user-tie text-gray-400"></i></div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Consultoria Especializada</p>
                                            <p className="text-gray-500 text-xs">Patrocinado</p>
                                        </div>
                                    </div>
                                    <div className="aspect-square bg-[#111] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                                        <div className="relative z-10 w-full">
                                            <h4 className="font-heading text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-4 text-left">
                                                Você está <span className="text-neon">liderando</span> sua empresa...<br />
                                                <span className="text-gray-500 text-2xl">ou apenas gerenciando o caos do seu time de vendas?</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-[#121212]">
                                        <h5 className="text-neon font-bold mb-2"><i className="fa-solid fa-brain mr-2"></i> Foco na Dor do Empresário</h5>
                                        <p className="text-gray-400 text-sm"><strong>Por que funciona?</strong> Bate na dor exata do dono do negócio (falta de tempo e desorganização comercial). Conversa de CEO para CEO.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pilar 2 */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-16 h-16 bg-neon text-dark rounded-full flex items-center justify-center text-2xl font-bold shrink-0">2</div>
                            <div>
                                <h3 className="font-heading text-3xl font-bold text-white mb-4">Filtro de Qualidade Absoluta</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-4xl">
                                    Eliminamos o "curioso" e entregamos apenas clientes prontos para o comercial fechar. Implementamos uma camada de atrito inteligente: leads ruins são bloqueados antes de tocarem no telefone do seu vendedor.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                                    <li className="flex items-center gap-3 bg-card p-4 rounded-xl border border-gray-800"><i className="fa-solid fa-check text-neon"></i> Formulários Qualificadores</li>
                                    <li className="flex items-center gap-3 bg-card p-4 rounded-xl border border-gray-800"><i className="fa-solid fa-check text-neon"></i> Automação de Pré-venda (Robô)</li>
                                    <li className="flex items-center gap-3 bg-card p-4 rounded-xl border border-gray-800"><i className="fa-solid fa-check text-neon"></i> Scripts de Triagem Validados</li>
                                    <li className="flex items-center gap-3 bg-card p-4 rounded-xl border border-gray-800"><i className="fa-solid fa-check text-neon"></i> Integração CRM Automática</li>
                                </ul>
                            </div>
                        </div>

                        {/* Pilar 3 */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-16 h-16 bg-neon text-dark rounded-full flex items-center justify-center text-2xl font-bold shrink-0">3</div>
                            <div>
                                <h3 className="font-heading text-3xl font-bold text-white mb-4">Escala Lucrativa & Previsível</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
                                    Escalar tráfego é fácil, o difícil é escalar mantendo o Custo de Aquisição (CAC) controlado. Nesta etapa, garantimos que o seu funil de vendas e os seus processos suportam receber o dobro de investimento amanhã sem quebrar. Previsibilidade de 12 meses, não picos sazonais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL / RODAPÉ */}
            <section id="agendar" className="py-24 px-6 bg-card border-t border-gray-900 relative overflow-hidden">
                {/* Glow effects de fundo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-6">
                        Vamos construir a sua <span className="text-neon">Escala?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        O diagnóstico está feito. Se você busca estes mesmos resultados, quer parar de lidar com curiosos e precisa de previsibilidade real de caixa, o próximo passo é nosso.
                    </p>

                    <a href="https://wa.me/5511999999999?text=Ol%C3%A1,%20vim%20da%20p%C3%A1gina%20de%20Engenharia%20de%20Receita%20e%20gostaria%20de%20agendar%20minha%20Sess%C3%A3o%20Estrat%C3%A9gica."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon inline-flex items-center justify-center gap-3 bg-neon text-dark font-heading font-black text-xl md:text-2xl py-6 px-12 rounded-full hover:bg-white hover:scale-105 transition-all duration-300">
                        <i className="fa-brands fa-whatsapp text-3xl"></i>
                        AGENDAR SESSÃO ESTRATÉGICA
                    </a>

                    <div className="mt-12 p-6 bg-dark border border-gray-800 rounded-2xl text-left max-w-2xl mx-auto flex gap-4 items-start">
                        <i className="fa-solid fa-shield-halved text-neon text-3xl mt-1"></i>
                        <div>
                            <h4 className="font-bold text-white mb-1">Diagnóstico sem compromisso</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Esta sessão não é uma ligação de vendas disfarçada. É um mapeamento do seu funil atual. Se encontrarmos o seu gargalo e eu não for a melhor pessoa para resolver, eu te indico quem é. Mas se eu for, nós vamos construir a sua escala juntos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-8 text-center text-gray-600 bg-dark text-sm border-t border-gray-900">
                <p>&copy; 2024 Engenharia de Receita Previsível. Todos os direitos reservados.</p>
            </footer>
        </main>
    );
}
