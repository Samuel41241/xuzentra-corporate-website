import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import Credibility from "../components/Credibility";
import ProductsSection from "../components/ProductsSection";
import Industries from "../components/Industries";
import AboutPreview from "../components/AboutPreview";
import CTA from "../components/CTA";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Credibility />
      <ProductsSection />
      <Industries />
      <AboutPreview />
      <CTA />
      <ContactSection />
    </>
  );
}

export default Home;