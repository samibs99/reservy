"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Etablissements from "@/components/Etablissements";
import WhyReservy from "@/components/WhyReservy";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Etablissements />
      <WhyReservy />
      <Testimonials />
      <Faqs />
      <Footer />
    </main>
  );
}
