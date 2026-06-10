import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Kits from "@/components/Kits";
import Adicionais from "@/components/Adicionais";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ComoFunciona />
      <Kits />
      <Adicionais />
      <Footer />
    </main>
  );
}
