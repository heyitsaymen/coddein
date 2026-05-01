import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-anthracite text-offwhite overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
