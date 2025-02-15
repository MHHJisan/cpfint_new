import React from "react";
import { Header } from "../_components/header";
import { MenuBar } from "../_components/menubar";
import { SectionHeader } from "../_components/Homepage/sectionHeader";
import PageTitle from "../_components/pageTitle";
import { Footer } from "../_components/footer";
import ContactSection from "./_components/ContactSection";

export default function Contact() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <MenuBar />

      <div className="mb-2">
        <PageTitle text="Contact us" />
      </div>

      <ContactSection />

      <Footer />
    </div>
  );
}
