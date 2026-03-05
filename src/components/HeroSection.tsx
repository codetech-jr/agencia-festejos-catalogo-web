'use client';

import { Shield, Clock, Sparkles, ChevronDown } from 'lucide-react';

export default function HeroSection() {
    const scrollAlCatalogo = () => {
        document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-teal-50 py-16 sm:py-24">
            {/* Círculos decorativos */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-200/40 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-200/40 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-100/50 blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 text-center">
                {/* Badge superior */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium text-orange-600 mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Disponible este fin de semana · Charallave
                </div>

                {/* Título principal */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
                    La mejor{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                            diversión
                        </span>
                        <svg
                            className="absolute -bottom-1 left-0 w-full"
                            viewBox="0 0 200 8"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 5 Q50 0 100 5 Q150 10 200 5"
                                stroke="#f97316"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>{' '}
                    para tus fiestas
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-gray-600 mb-4">
                    en Charallave y Valles del Tuy
                </p>
                <p className="text-base text-gray-500 max-w-xl mx-auto mb-8">
                    Inflables, castillos y entretenimiento de primera calidad. Precios claros, sin sorpresas.
                    Arma tu combo perfecto y resérvalo en minutos por WhatsApp.
                </p>

                {/* CTA Principal */}
                <button
                    id="btn-ver-catalogo"
                    onClick={scrollAlCatalogo}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                    🎉 Ver Catálogo Completo
                    <ChevronDown size={20} className="animate-bounce" />
                </button>

                {/* Trust Badges */}
                <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                    <div className="flex flex-col items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/80">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                            <Shield size={20} className="text-teal-600" />
                        </div>
                        <p className="text-xs font-semibold text-gray-700 text-center leading-tight">
                            Empresa Verificada
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/80">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                            <Clock size={20} className="text-orange-600" />
                        </div>
                        <p className="text-xs font-semibold text-gray-700 text-center leading-tight">
                            Puntualidad Garantizada
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/80">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <Sparkles size={20} className="text-amber-600" />
                        </div>
                        <p className="text-xs font-semibold text-gray-700 text-center leading-tight">
                            Limpieza Total
                        </p>
                    </div>
                </div>

                {/* Métodos de pago */}
                <p className="mt-6 text-sm text-gray-500">
                    💳 Acepta: <span className="font-semibold text-gray-700">Pago Móvil · Zelle · Efectivo USD</span>
                </p>
            </div>
        </section>
    );
}
