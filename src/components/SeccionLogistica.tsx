import { MousePointerClick, Truck, PartyPopper } from 'lucide-react';

export default function SeccionLogistica() {
    return (
        <section className="relative bg-white py-20 overflow-hidden">
            {/* Wave superior (conecta con Hero) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[60px] sm:h-[100px]"
                    fill="#f0fdfa" // teal-50 para transicionar desde el Hero
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </svg>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 mt-10">
                <div className="text-center mb-16">
                    <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                        LOGÍSTICA CERO ESTRÉS
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight">
                        Tu fiesta perfecta en <span className="text-orange-500">3 pasos</span>
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
                        Sabemos que tu tiempo es oro. Nosotros nos encargamos del trabajo pesado para que tú solo disfrutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
                    {/* Línea conectora punteada (solo desktop) */}
                    <div className="hidden md:block absolute top-[45%] left-[10%] w-[80%] border-t-2 border-dashed border-orange-200 -z-10" />

                    {/* Paso 1 */}
                    <div className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <span className="absolute -top-6 -left-6 text-9xl font-black text-yellow-50 opacity-80 group-hover:text-yellow-100 transition-colors pointer-events-none select-none">
                            1
                        </span>
                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <MousePointerClick size={36} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Reserva tu Combo</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Eliges tus atracciones favoritas en nuestro catálogo interactivo y aseguras la fecha rápidamente por WhatsApp.
                            </p>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <span className="absolute -top-6 -left-6 text-9xl font-black text-yellow-50 opacity-80 group-hover:text-yellow-100 transition-colors pointer-events-none select-none">
                            2
                        </span>
                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Truck size={36} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Nosotros nos movemos</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Transporte, instalación y montaje incluidos en zonas de cobertura. Llegamos 1 hora antes de iniciar el evento.
                            </p>
                        </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <span className="absolute -top-6 -left-6 text-9xl font-black text-yellow-50 opacity-80 group-hover:text-yellow-100 transition-colors pointer-events-none select-none">
                            3
                        </span>
                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <PartyPopper size={36} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">¡A Celebrar!</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Disfruta tu evento al máximo. Al finalizar el alquiler, nuestro equipo regresa, desmonta y retira todo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
