import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "../lib/supabase";

import HomepageUpdateBanner from "../components/HomepageUpdateBanner";
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
  const [homepageUpdate, setHomepageUpdate] = useState(null);

  useEffect(() => {
    async function loadHomepageUpdate() {
      const { data } = await supabase
        .from("site_updates")
        .select("*")
        .eq("status", "published")
        .eq("show_on_homepage", true)
        .order("published_at", { ascending: false })
        .limit(1);

      setHomepageUpdate(data?.[0] || null);
    }

    loadHomepageUpdate();
  }, []);

  return (
    <>
      <Helmet>
        <title>Xuzentra Technologies Limited | Digital Infrastructure for Institutions</title>
        <meta
          name="description"
          content="Xuzentra Technologies Limited builds practical digital solutions across education, healthcare, energy, public sector systems, and emerging markets."
        />
      </Helmet>

      {homepageUpdate ? <HomepageUpdateBanner update={homepageUpdate} /> : <Hero />}
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