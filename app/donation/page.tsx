import React from "react";
import { Header } from "../_components/header";
import { MenuBar } from "../_components/menubar";
import { Footer } from "../_components/footer";
import DonationPage from "./_components/DonationPage";
// import DonationPageTest from "./_components/DonationPageTest";

export default function Donation() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <MenuBar />

      <DonationPage />
      {/* <DonationPageTest /> */}
      <Footer />
    </div>
  );
}
