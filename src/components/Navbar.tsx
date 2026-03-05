'use client';

import { ShoppingCart, Phone } from 'lucide-react';
import { useCarrito } from '@/context/CartContext';

export default function Navbar() {
    const { cantidadItems, abrirCarrito } = useCarrito();

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl">🎪</span>
                    <div className="leading-tight">
                        <p className="font-bold text-gray-800 text-sm sm:text-base">Festejos & Inflables</p>
                        <p className="text-orange-500 text-xs font-medium">Valles del Tuy</p>
                    </div>
                </div>

                {/* Acciones */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://wa.me/584120000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
                    >
                        <Phone size={15} />
                        +58 412 000-0000
                    </a>
                    <button
                        id="btn-abrir-carrito-navbar"
                        onClick={abrirCarrito}
                        className="relative flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md"
                    >
                        <ShoppingCart size={18} />
                        <span className="hidden sm:inline">Mi Evento</span>
                        {cantidadItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                                {cantidadItems}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
