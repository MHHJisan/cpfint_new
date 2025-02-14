import React from "react";
import { Header } from "../_components/header";
import { MenuBar } from "../_components/menubar";
import PageTitle from "../_components/pageTitle";
import { SectionHeader } from "../_components/Homepage/sectionHeader";
import { Footer } from "../_components/footer";
import { Button } from "@/components/ui/button";
import NumbersSection from "./_components/NumberSection";
import { WhoRweDetails } from "./_components/WhoRweDetails";

export default function About() {
  return (
    <div>
      <Header />
      <MenuBar />

      <div className="mb-8">
        <PageTitle text="About US" />
      </div>

      <SectionHeader title="Who we are?" />

      <WhoRweDetails />

      <div className="w-full flex flex-col lg:flex-row p-12 rounded-lg mx-4 lg:mx-[120px]">
        {/* First Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            src="/iftar_distribution-2023/File_017.png"
            alt="Iftar Distribution"
            className="h-[500px] w-[600px] rounded-tl-[120px] rounded-br-[120px] shadow-lg"
          />
        </div>

        {/* Second Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/iftar_distribution-2023/File_039.png"
            alt="Iftar Distribution"
            className="h-[500px] w-[600px] rounded-tl-[120px] rounded-br-[120px] shadow-lg"
          />
        </div>
      </div>

      <div className="pl-5 flex justify-center p-8">
        <Button
          asChild
          className="bg-[#FF3951] text-white font-['Poppins'] font-bold text-[14px] leading-[14px] uppercase tracking-[2px] px-[35px] py-[17px] rounded-[10px] hover:bg-[#FF3951]/90"
        >
          <a href="/donation">
            <span className="flex justify-center gap-[5px]">Donate</span>
          </a>
        </Button>
      </div>

      <SectionHeader title="ROOTED IN COMMUNITY, DRIVEN BY IMPACT" />

      <div
        className="w-full flex flex-col lg:flex-row p-6 md:p-12 my-8 rounded-lg bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-[rgba(0,0,0,0.65)] 
  text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out"
      >
        {/* First Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 md:gap-8 text-white px-4 md:px-8">
          <h2 className="text-yellow-500 text-2xl md:text-3xl font-sans font-extrabold">
            Our Mission
          </h2>
          <p>
            Our mission is to create lasting change that empowers communities
            with skills, resources, and opportunities to thrive for generations
            to come.
          </p>
          <p>
            We want to identify the unique needs and aspirations of the
            communities we serve. We want to partner with them, building
            relationships and using their knowledge to deliver sustainable
            solutions that make a difference.
          </p>
        </div>

        {/* Second Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 md:gap-8 text-white px-4 md:px-8 mt-8 lg:mt-0">
          <h2 className="text-yellow-500 text-2xl md:text-3xl font-sans font-extrabold">
            Our Vision
          </h2>
          <p className="font-roboto">
            We envision a world where empowered communities are the driving
            force of their own prosperity, equity, and resilience.
          </p>
          <p>
            This vision of empowered, prosperous, equitable, and resilient
            communities is not merely a distant aspiration; it is a roadmap for
            a brighter future. We want to bring this vision to life by
            supporting community-led development efforts.
          </p>
        </div>
      </div>

      <NumbersSection />

      <Footer />
    </div>
  );
}
