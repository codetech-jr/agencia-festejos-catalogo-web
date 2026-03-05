import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SeccionCatalogo from '@/components/SeccionCatalogo';
import SeccionLogistica from '@/components/SeccionLogistica';
import SeccionGarantia from '@/components/SeccionGarantia';
import SeccionGaleria from '@/components/SeccionGaleria';
import Footer from '@/components/Footer';
import ModalCarrito from '@/components/ModalCarrito';

export default function Inicio() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SeccionLogistica />
      <SeccionGarantia />
      <SeccionGaleria />
      <SeccionCatalogo />
      <Footer />
      <ModalCarrito />
    </main>
  );
}
