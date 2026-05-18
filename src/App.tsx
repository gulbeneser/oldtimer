import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ConceptFeatures from './components/ConceptFeatures';
import Gallery from './components/Gallery';
import ConceptIcons from './components/ConceptIcons';
import Tours from './components/Tours';
import SportHero from './components/SportHero';
import TourDetail from './components/TourDetail';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ConceptFeatures />
        <Gallery />
        <ConceptIcons />
        <Tours />
        <SportHero />
        <TourDetail />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
