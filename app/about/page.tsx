import React from "react";
import { Header } from "../_components/header";
import { MenuBar } from "../_components/menubar";
import PageTitle from "../_components/pageTitle";
import { SectionHeader } from "../_components/Homepage/sectionHeader";
import { Footer } from "../_components/footer";
import { Button } from "@/components/ui/button";
import NumbersSection from "./_components/NumberSection";

export default function About() {
  return (
    <div>
      <Header />
      <MenuBar />

      <div className="mb-8">
        <PageTitle text="About US" />
      </div>

      <SectionHeader title="Who we are?" />

      <div className="w-full min-h-full bg-[url('/img/blue-bg-pattern.png')] flex flex-row mt-8 py-8 px-8 gap-8">
        <div
          className="w-full p-3 bg-cover bg-center text-[rgba(0,0,0,0.65)] 
        text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out"
        >
          <p className="font-bold text-[36px] leading-[46.8px] text-white m-0 p-0 ">
            We are a team of change-makers who believe that every helping hand
            can make a difference and create a better future for all.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-white">
            Driven by the spirit of giving, we, a group of individuals from
            Companigonj, Noakhali, find fulfillment in bringing smiles to those
            in need. Our roots and the generosity we've received from our nation
            and society call us back to give back. This is the driving force
            behind our efforts to make a positive impact on the world around us.
          </p>
          <p className="text-white">
            We are empowering rural communities through self-employment,
            single-mother aid, and educational assistance. We're always looking
            for the best, most sustainable, and impactful ways to help those in
            need.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-row p-12 rounded-lg mx-[120px] ">
        {/* First Image Section */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/iftar_distribution-2023/File_017.png"
            alt="Iftar Distribution"
            className="h-[500px] w-[600px] rounded-tl-[120px] rounded-br-[120px] shadow-lg"
          />
        </div>

        {/* Second Image Section */}
        <div className="w-1/2 flex justify-center">
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
        className="w-full flex flex-row p-12 my-8 rounded-lg bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-[rgba(0,0,0,0.65)] 
        text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out"
      >
        {/* First Image Section */}
        <div className="w-1/2 flex flex-col justify-center gap-8 text-white">
          <h2 className="text-yellow-500 text-3xl font-sans font-extrabold">
            Our Mission
          </h2>
          <p className="">
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
        <div className="w-1/2 flex flex-col justify-center gap-8 text-white">
          <h2 className="text-yellow-500 text-3xl font-sans font-extrabold">
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
