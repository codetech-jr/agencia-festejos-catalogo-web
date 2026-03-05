import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { CarritoProvider } from '@/context/CartContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Festejos & Inflables Valles del Tuy | Alquiler de Inflables en Charallave',
  description:
    'Alquiler de inflables, castillos y equipos de entretenimiento para fiestas en Charallave y Valles del Tuy, Venezuela. Precios claros. Reserva por WhatsApp.',
  keywords: 'inflables charallave, alquiler castillos valles del tuy, festejos venezuela, cotufas algodón fiestas',
  openGraph: {
    title: 'Festejos & Inflables Valles del Tuy',
    description: 'Tu agencia de festejos #1 en Charallave. Precios claros, sin sorpresas.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable} suppressHydrationWarning>
      <body className="font-poppins antialiased bg-white text-gray-800" suppressHydrationWarning>
        <CarritoProvider>
          {children}
        </CarritoProvider>
      </body>
    </html>
  );
}
