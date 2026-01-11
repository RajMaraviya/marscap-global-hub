import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Certifications } from "@/components/Certifications";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Certifications />
      <Products />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
