import Hero from "@/components/Hero";
import KitsSection from "@/components/KitsSection";
import FestaNaCaixa from "@/components/FestaNaCaixa";
import AdicionaisSection from "@/components/AdicionaisSection";
import CatalogButton from "@/components/CatalogButton";
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";
import { CartButton, CartPanel } from "@/components/Cart";

export default function Home() {
  return (
    <main className="relative z-10 max-w-lg mx-auto min-h-screen">
      <Hero />

      <div className="gold-line mx-5" />
      <KitsSection />

      <div className="gold-line mx-5" />
      <FestaNaCaixa />

      <div className="gold-line mx-5" />
      <AdicionaisSection />

      <div className="gold-line mx-5" />
      <CatalogButton />

      <div className="gold-line mx-5" />
      <InfoCards />

      <div className="gold-line mx-5" />
      <Footer />

      <CartButton />
      <CartPanel />
    </main>
  );
}
