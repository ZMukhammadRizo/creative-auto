import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import AboutPreview from '@/components/AboutPreview';
import GalleryPreview from '@/components/GalleryPreview';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <AboutPreview />
        <GalleryPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
