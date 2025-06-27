import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DetailsSection } from "@/components/DetailsSection";
import { SharksSection } from "@/components/SharksSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="details">
        <DetailsSection />
      </section>
      <section id="sharks">
        <SharksSection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
