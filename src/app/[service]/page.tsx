"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer";
import ServiceContent from "../../components/ServiceContent";

export default function ServicePage() {
  const params = useParams();
  const service = (params as any)?.service as string | undefined;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServiceContent service={service} />
      <Footer />
    </main>
  );
}
