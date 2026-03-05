import { Sparkles, ShieldCheck } from 'lucide-react';

export default function SeccionGarantia() {
    return (
        <section className="relative bg-sky-50 py-24 overflow-hidden">
            {/* Wave superior curva suave (conecta desde Logística Blanca) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none mb-10 pb-10">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[50px]"
                    fill="#ffffff"
                >
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
                </svg>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 mt-8">
                <div className="text-center mb-16">
                    <span className="inline-block bg-sky-100 text-sky-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                        GARANTÍA DE MAMÁ FELIZ
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight">
                        Diversión <span className="text-sky-500">Segura y Limpia</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto lg:text-lg">
                        Porque sabemos lo importante que es la salud de tu familia, no escatimamos en calidad y limpieza.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Card Limpieza */}
                    <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-lg border border-sky-100 hover:shadow-xl transition-shadow flex gap-6">
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-500 rotate-3">
                                <Sparkles size={32} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Limpieza Profunda</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                Nuestros inflables se lavan y desinfectan minuciosamente antes de <span className="font-bold text-sky-600">CADA</span> evento. Te garantizamos cero olor a humedad, cero manchas y presentación impecable.
                            </p>
                        </div>
                    </div>

                    {/* Card Seguridad */}
                    <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow flex gap-6">
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-500 -rotate-3">
                                <ShieldCheck size={32} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Seguridad Industrial</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                Anclaje profesional obligatorio para evitar accidentes y volcamientos con ráfagas de viento. Motores seguros y cableado protegido del agua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
