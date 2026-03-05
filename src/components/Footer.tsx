export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                    {/* Marca */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">🎪</span>
                            <div>
                                <p className="font-bold text-white">Festejos & Inflables</p>
                                <p className="text-orange-400 text-xs">Valles del Tuy</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            La agencia de festejos #1 en Charallave. Atendemos Fiestas Infantiles, Eventos Corporativos y Colegios con diversión garantizada.
                        </p>
                    </div>

                    {/* Zona de cobertura */}
                    <div>
                        <h4 className="font-semibold text-white mb-3">📍 Zonas de Servicio</h4>
                        <ul className="space-y-1.5 text-gray-400 text-sm">
                            <li>Charallave Centro <span className="text-green-400 text-xs">(Gratis)</span></li>
                            <li>Urb. Matalinda</li>
                            <li>Caujarito</li>
                            <li>Ocumare del Tuy</li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-semibold text-white mb-3">📞 Contáctanos</h4>
                        <div className="space-y-2 text-sm">
                            <a
                                href="https://wa.me/584120000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
                            >
                                <span>💬</span> WhatsApp: +58 412-000-0000
                            </a>
                            <div className="flex items-center gap-2 text-gray-400">
                                <span>⏰</span> Lun-Dom: 7am – 8pm
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <span>💳</span> Pago Móvil · Zelle · USD
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
                    <p>© 2025 Festejos & Inflables Valles del Tuy. Todos los derechos reservados.</p>
                    <p>Hecho con ❤️ en Charallave, Venezuela 🇻🇪</p>
                </div>
            </div>
        </footer>
    );
}
