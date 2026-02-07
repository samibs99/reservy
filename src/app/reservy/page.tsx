import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import WhyReservy from "../../components/WhyReservy";
import Services from "../../components/Services";
import Stats from "../../components/Stats";
import Etablissements from "../../components/Etablissements";
import Testimonials from "../../components/Testimonials";
import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer";

export default function ReservyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Hero />
        <WhyReservy />
        <div className="max-w-6xl mx-auto px-4">
          <Services />
          <Testimonials />
          <Stats />
          <Etablissements />
          <Faqs />
        </div>
        <Footer />
      </div>
    </main>
  );
}
