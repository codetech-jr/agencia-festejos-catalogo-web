import Image from 'next/image';
import { Heart } from 'lucide-react';

export default function SeccionGaleria() {
    const fotos = [
        { src: '/galeria-1.png', alt: 'Niños saltando en castillo inflable' },
        { src: '/galeria-2.png', alt: 'Mesas decoradas para fiesta infantil' },
        { src: '/galeria-3.png', alt: 'Evento al aire libre con familias y diversión' },
        { src: '/galeria-4.png', alt: 'Tobogán acuático en acción' },
    ];

    return (
        <section className="relative bg-white py-16 pb-24 overflow-hidden">
            {/* Wave superior curva (conecta desde Garantía Azul) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none mb-10 pb-10">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[60px]"
                    fill="#f0f9ff" // Corresponde al bg-sky-50 de la sección anterior
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </svg>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 mt-8">
                <div className="text-center mb-12">
                    <span className="inline-block bg-pink-100 text-pink-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                        GALERÍA DE LA DIVERSIÓN
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight">
                        Así se ven nuestras <span className="text-pink-500">fiestas</span> en Valles del Tuy
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Atendemos Fiestas Infantiles, Eventos Corporativos y Colegios. Mira algunas de nuestras instalaciones recientes.
                    </p>
                </div>

                {/* Masonry Grid (CSS Columns approach para simplicidad y responsividad) */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {fotos.map((foto, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-xl break-inside-avoid bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 ${index === 1 || index === 2 ? 'aspect-[4/5]' : 'aspect-square'
                                }`}
                        >
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                            />

                            {/* Overlay con ❤️ en hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[1px]">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white transform hover:scale-110 transition-transform shadow-lg border border-white/30">
                                    <Heart size={32} fill="currentColor" className="text-pink-500 drop-shadow-md animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center flex items-center justify-center gap-2 text-sm text-gray-400 font-medium">
                    <span>Siguenos en Instagram para ver más</span>
                    <span className="text-pink-500">@FestejosTuy</span>
                </div>
            </div>
        </section>
    );
}
