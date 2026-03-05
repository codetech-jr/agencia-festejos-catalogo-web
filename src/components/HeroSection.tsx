'use client';

import { Shield, Clock, Sparkles, ChevronRight, Star, CalendarCheck } from 'lucide-react';
import { useCarrito } from '@/context/CartContext';

export default function HeroSection() {
    const { abrirCarrito } = useCarrito();

    const scrollAlCatalogo = () => {
        document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-24 pb-16">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-300/30 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-teal-300/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute top-[20%] right-[15%] w-[30%] h-[30%] rounded-full bg-amber-300/20 blur-[80px] animate-pulse" style={{ animationDuration: '7s' }} />

                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                {/* Left Column: Text & CTAs */}
                <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-gray-700">Fechas disponibles este mes</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                        Creamos la{' '}
                        <span className="relative whitespace-nowrap">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                                fiesta perfecta
                            </span>
                            {/* Swoosh Underline */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        <span className="text-gray-800">sin estrés.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Los mejores inflables y equipos de la región Valles del Tuy.
                        Precios transparentes, limpieza nivel premium y puntualidad garantizada para tu tranquilidad.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button
                            onClick={scrollAlCatalogo}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 group flex items-center justify-center gap-2"
                        >
                            Ver Catálogo en vivo
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={abrirCarrito}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg shadow-sm border border-gray-200 transition-all hover:border-gray-300 flex items-center justify-center gap-2"
                        >
                            <CalendarCheck size={20} className="text-orange-500" />
                            Planificar evento
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=f97316`} alt="avatar" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex text-amber-500">
                                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span>+500 familias felices</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Floating Cards */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-16 lg:mt-0">
                    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
                        {/* Main Floating Glass Card */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-amber-300 rounded-[2.5rem] rotate-3 opacity-20 blur-lg animate-pulse"></div>
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col p-8 transform transition-transform hover:-translate-y-2 duration-500 z-10">

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-4xl">🏰</div>
                                <div className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1">
                                    <Sparkles size={12} /> Top Ventas
                                </div>
                            </div>

                            <h3 className="text-3xl font-extrabold text-gray-800 mb-3">Castillo Imperial</h3>
                            <p className="text-gray-500 mb-8 text-base">El favorito para espacios amplios. Full color y máxima seguridad con mallas protectoras.</p>

                            <div className="mt-auto space-y-4">
                                <div className="flex items-center gap-4 text-sm font-bold text-gray-700 bg-white p-3 rounded-2xl shadow-sm">
                                    <div className="bg-teal-50 p-2 rounded-xl text-teal-600"><Shield size={20} /></div> Desinfección Profunda
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-gray-700 bg-white p-3 rounded-2xl shadow-sm">
                                    <div className="bg-orange-50 p-2 rounded-xl text-orange-600"><Clock size={20} /></div> 6 horas de diversión
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge 1 */}
                        <div className="absolute -right-6 lg:-right-12 top-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce z-20" style={{ animationDuration: '4s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                                    <Sparkles size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Calidad</p>
                                    <p className="text-sm font-bold text-gray-800">100% Garantizada</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge 2 */}
                        <div className="absolute -left-6 lg:-left-12 bottom-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce z-20" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs text-white font-bold ring-2 ring-white">$</div>
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white font-bold ring-2 ring-white">Bs</div>
                                </div>
                                <p className="text-sm font-bold text-gray-700 pr-2">Múltiples Pagos</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
