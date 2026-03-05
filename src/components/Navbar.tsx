'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Phone, Menu, X, ChevronRight } from 'lucide-react';
import { useCarrito } from '@/context/CartContext';

export default function Navbar() {
    const { cantidadItems, abrirCarrito } = useCarrito();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Catálogo', href: '#catalogo' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Garantía', href: '#garantia' },
        { name: 'Contacto', href: '#contacto' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'py-3 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border-b border-white/20'
                    : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:-translate-y-0.5">
                            <span className="text-2xl animate-bounce" style={{ animationDuration: '3s' }}>🎪</span>
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/40"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-900 text-lg leading-none tracking-tight">Festejos</span>
                            <span className="font-semibold text-orange-500 text-sm leading-tight">Valles del Tuy</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://wa.me/584120000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-2 group px-4 py-2 rounded-full border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all"
                        >
                            <div className="bg-green-100 p-1.5 rounded-full group-hover:bg-green-500 transition-colors">
                                <Phone size={14} className="text-green-600 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-green-700">Asesoría</span>
                        </a>

                        <button
                            id="btn-abrir-carrito-navbar"
                            onClick={abrirCarrito}
                            className="relative flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
                        >
                            <ShoppingCart size={18} />
                            <span className="hidden sm:block">Mi Evento</span>
                            {cantidadItems > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-sm animate-in zoom-in">
                                    {cantidadItems}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col p-4 gap-2 border-t border-gray-100">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 text-gray-700 font-medium transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                            <ChevronRight size={16} className="text-gray-400" />
                        </a>
                    ))}
                    <div className="h-px bg-gray-100 my-2"></div>
                    <a
                        href="https://wa.me/584120000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-green-50 text-green-700 font-bold transition-colors"
                    >
                        <div className="bg-green-200 p-2 rounded-full">
                            <Phone size={16} className="text-green-800" />
                        </div>
                        Chat por WhatsApp
                    </a>
                </div>
            </div>
        </header>
    );
}
