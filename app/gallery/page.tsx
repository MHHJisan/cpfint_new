"use client";
import React from "react";
import { ViewMoreImage } from "./_components/ViewMoreImage";
import { SectionHeader } from "../_components/Homepage/sectionHeader";
import { Header } from "../_components/header";
import { MenuBar } from "../_components/menubar";
import PageTitle from "../_components/pageTitle";
import { Footer } from "../_components/footer";

import GalleryScroll from "./_components/GalleryScroll";

const faitf = [
  {
    src: "/financial_aid_to_flood/fatf1.jpeg",
    alt: "fatf1.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf2.jpeg",
    alt: "fatf2.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf3.jpeg",
    alt: "fatf3.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf4.jpeg",
    alt: "fatf4.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf5.jpeg",
    alt: "fatf5.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf6.jpeg",
    alt: "fatf6.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf7.jpeg",
    alt: "fatf7.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf8.jpeg",
    alt: "fatf8.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf10.jpeg",
    alt: "fatf10.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf12.jpeg",
    alt: "fatf12.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf13.jpeg",
    alt: "fatf13.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf15.jpeg",
    alt: "fatf15.jpeg",
  },
  {
    src: "/financial_aid_to_flood/fatf18.jpeg",
    alt: "fatf18.jpeg",
  },
];

const medcial_camp_flood = [
  { src: "/medical_camp_flood/banner.jpg", alt: "banner" },

  { src: "/medical_camp_flood/IMG_2680.webp", alt: "2680" },
  { src: "/medical_camp_flood/IMG_2681.webp", alt: "2681" },

  { src: "/medical_camp_flood/IMG_2702.webp", alt: "2702" },
  { src: "/medical_camp_flood/IMG_2705.webp", alt: "2705" },
  { src: "/medical_camp_flood/IMG_2706.webp", alt: "2706" },
  { src: "/medical_camp_flood/IMG_2712.webp", alt: "2712" },
  { src: "/medical_camp_flood/IMG_2713.webp", alt: "2713" },
  { src: "/medical_camp_flood/IMG_2714.webp", alt: "2714" },
  { src: "/medical_camp_flood/IMG_2715.webp", alt: "2715" },
  { src: "/medical_camp_flood/IMG_2716.webp", alt: "2716" },
  { src: "/medical_camp_flood/IMG_2719.webp", alt: "2719" },
  { src: "/medical_camp_flood/IMG_2721.webp", alt: "2721" },
  { src: "/medical_camp_flood/IMG_2731.webp", alt: "2731" },
  { src: "/medical_camp_flood/IMG_2733.webp", alt: "2733" },
  { src: "/medical_camp_flood/IMG_2736.webp", alt: "2736" },
  { src: "/medical_camp_flood/IMG_2737.webp", alt: "2737" },
  { src: "/medical_camp_flood/IMG_2738.webp", alt: "2738" },
  { src: "/medical_camp_flood/IMG_2747.JPG", alt: "2747" },
  { src: "/medical_camp_flood/IMG_2749.JPG", alt: "2749" },
  { src: "/medical_camp_flood/IMG_2751.JPG", alt: "2751" },
  { src: "/medical_camp_flood/IMG_2754.JPG", alt: "2754" },
  { src: "/medical_camp_flood/IMG_2756.webp", alt: "2756" },
  { src: "/medical_camp_flood/IMG_2757.webp", alt: "2757" },
  { src: "/medical_camp_flood/IMG_2758.webp", alt: "2758" },
  { src: "/medical_camp_flood/IMG_2759.webp", alt: "2759" },
  { src: "/medical_camp_flood/IMG_2760.webp", alt: "2760" },
  { src: "/medical_camp_flood/IMG_2761.webp", alt: "2761" },
  { src: "/medical_camp_flood/IMG_2762.webp", alt: "2762" },
  { src: "/medical_camp_flood/IMG_2764.webp", alt: "2764" },
  { src: "/medical_camp_flood/IMG_2765.webp", alt: "2765" },
  { src: "/medical_camp_flood/IMG_2766.webp", alt: "2766" },
  { src: "/medical_camp_flood/IMG_2767.webp", alt: "2767" },
  { src: "/medical_camp_flood/IMG_2817.webp", alt: "2817" },
  { src: "/medical_camp_flood/IMG_2818.webp", alt: "2818" },
  { src: "/medical_camp_flood/IMG_2819.webp", alt: "2819" },
  { src: "/medical_camp_flood/IMG_2820.webp", alt: "2820" },
  { src: "/medical_camp_flood/IMG_2821.webp", alt: "2821" },
  { src: "/medical_camp_flood/IMG_2822.webp", alt: "2822" },
  { src: "/medical_camp_flood/IMG_2823.webp", alt: "2823" },
  { src: "/medical_camp_flood/IMG_2824.webp", alt: "2824" },
  { src: "/medical_camp_flood/IMG_2825.webp", alt: "2825" },
  { src: "/medical_camp_flood/IMG_2826.webp", alt: "2826" },
  { src: "/medical_camp_flood/IMG_2827.webp", alt: "2827" },
  { src: "/medical_camp_flood/IMG_2829.webp", alt: "2829" },
  { src: "/medical_camp_flood/IMG_2830.webp", alt: "2830" },
  { src: "/medical_camp_flood/IMG_2831.webp", alt: "2831" },
  { src: "/medical_camp_flood/IMG_2832.webp", alt: "2832" },
  { src: "/medical_camp_flood/IMG_2833.webp", alt: "2833" },
  { src: "/medical_camp_flood/IMG_2834.webp", alt: "2834" },
  { src: "/medical_camp_flood/IMG_2835.webp", alt: "2835" },
  { src: "/medical_camp_flood/IMG_2836.webp", alt: "2836" },
  { src: "/medical_camp_flood/IMG_2837.webp", alt: "2837" },
  { src: "/medical_camp_flood/IMG_2838.webp", alt: "2838" },
  { src: "/medical_camp_flood/IMG_2839.webp", alt: "2839" },
  { src: "/medical_camp_flood/IMG_2840.webp", alt: "2840" },
  { src: "/medical_camp_flood/IMG_2841.webp", alt: "2841" },
  { src: "/medical_camp_flood/IMG_2844.webp", alt: "2844" },
  { src: "/medical_camp_flood/IMG_2845.webp", alt: "2845" },
  { src: "/medical_camp_flood/IMG_2846.webp", alt: "2846" },
  { src: "/medical_camp_flood/IMG_2847.webp", alt: "2847" },
  { src: "/medical_camp_flood/IMG_2848.webp", alt: "2848" },
  { src: "/medical_camp_flood/IMG_2849.webp", alt: "2849" },
  { src: "/medical_camp_flood/IMG_2850.webp", alt: "2850" },
  { src: "/medical_camp_flood/IMG_2851.webp", alt: "2851" },
  { src: "/medical_camp_flood/IMG_2852.webp", alt: "2852" },
  { src: "/medical_camp_flood/IMG_2853.webp", alt: "2853" },
  { src: "/medical_camp_flood/IMG_2854.webp", alt: "2854" },
  { src: "/medical_camp_flood/IMG_2855.webp", alt: "2855" },
  { src: "/medical_camp_flood/IMG_2856.webp", alt: "2856" },
  { src: "/medical_camp_flood/IMG_2857.png", alt: "2857" },
  { src: "/medical_camp_flood/IMG_2858.png", alt: "2858" },
  { src: "/medical_camp_flood/IMG_2859.png", alt: "2859" },

  { src: "/medical_camp_flood/IMG_2869.png", alt: "2869" },
  { src: "/medical_camp_flood/IMG_2870.png", alt: "2870" },

  { src: "/medical_camp_flood/IMG_2872.png", alt: "2872" },
  { src: "/medical_camp_flood/IMG_2873.png", alt: "2873" },
  { src: "/medical_camp_flood/IMG_2874.png", alt: "2874" },
  { src: "/medical_camp_flood/IMG_2875.png", alt: "2875" },
  { src: "/medical_camp_flood/IMG_2876.png", alt: "2876" },
  { src: "/medical_camp_flood/IMG_2877.png", alt: "2877" },
  { src: "/medical_camp_flood/IMG_2878.png", alt: "2878" },
  { src: "/medical_camp_flood/IMG_2879.png", alt: "2879" },
  { src: "/medical_camp_flood/IMG_2880.png", alt: "2880" },
  { src: "/medical_camp_flood/IMG_2881.png", alt: "2881" },
  { src: "/medical_camp_flood/IMG_2881.png", alt: "2882" },
];

const floodProject = [
  {
    src: "/Flood_Project_2024/1.jpg",
    alt: "1",
  },
  {
    src: "/Flood_Project_2024/2.jpg",
    alt: "2",
  },
  {
    src: "/Flood_Project_2024/3.jpg",
    alt: "3",
  },
  {
    src: "/Flood_Project_2024/4.jpg",
    alt: "4",
  },
  {
    src: "/Flood_Project_2024/5.jpg",
    alt: "5",
  },
  {
    src: "/Flood_Project_2024/6.jpg",
    alt: "6",
  },
  {
    src: "/Flood_Project_2024/7.jpg",
    alt: "7",
  },
  {
    src: "/Flood_Project_2024/8.jpg",
    alt: "8",
  },
  {
    src: "/Flood_Project_2024/9.jpg",
    alt: "9",
  },
  {
    src: "/Flood_Project_2024/10.jpg",
    alt: "10",
  },
  {
    src: "/Flood_Project_2024/12.jpg",
    alt: "12",
  },
  {
    src: "/Flood_Project_2024/13.jpg",
    alt: "13",
  },
  {
    src: "/Flood_Project_2024/14.jpg",
    alt: "14",
  },
  {
    src: "/Flood_Project_2024/15.jpg",
    alt: "15",
  },
  {
    src: "/Flood_Project_2024/16.jpg",
    alt: "16",
  },
  {
    src: "/Flood_Project_2024/17.jpg",
    alt: "17",
  },
];

const iftar_distribution_Images = [
  {
    src: "/iftar_distribution-2023/File_000.png",
    alt: "file_000",
  },
  {
    src: "/iftar_distribution-2023/File_001.png",
    alt: "file_001",
  },
  {
    src: "/iftar_distribution-2023/File_002.png",
    alt: "file_002",
  },
  {
    src: "/iftar_distribution-2023/File_003.png",
    alt: "file_003",
  },
  {
    src: "/iftar_distribution-2023/File_004.png",
    alt: "file_004",
  },
  {
    src: "/iftar_distribution-2023/File_005.png",
    alt: "file_005",
  },
  {
    src: "/iftar_distribution-2023/File_007.png",
    alt: "file_007",
  },
  {
    src: "/iftar_distribution-2023/File_008.png",
    alt: "file_008",
  },
  {
    src: "/iftar_distribution-2023/File_009.png",
    alt: "file_009",
  },
  {
    src: "/iftar_distribution-2023/File_010.png",
    alt: "file_010",
  },
  {
    src: "/iftar_distribution-2023/File_011.png",
    alt: "file_011",
  },
  {
    src: "/iftar_distribution-2023/File_012.png",
    alt: "file_012",
  },
  {
    src: "/iftar_distribution-2023/File_013.png",
    alt: "file_013",
  },
  {
    src: "/iftar_distribution-2023/File_014.png",
    alt: "file_014",
  },
  {
    src: "/iftar_distribution-2023/File_015.png",
    alt: "file_015",
  },
  {
    src: "/iftar_distribution-2023/File_016.png",
    alt: "file_016",
  },
  {
    src: "/iftar_distribution-2023/File_017.png",
    alt: "file_017",
  },
  {
    src: "/iftar_distribution-2023/File_018.png",
    alt: "file_018",
  },
  {
    src: "/iftar_distribution-2023/File_019.png",
    alt: "file_019",
  },
  {
    src: "/iftar_distribution-2023/File_020.png",
    alt: "file_020",
  },
  {
    src: "/iftar_distribution-2023/File_021.png",
    alt: "file_021",
  },
  {
    src: "/iftar_distribution-2023/File_022.png",
    alt: "file_022",
  },
  {
    src: "/iftar_distribution-2023/File_023.png",
    alt: "file_023",
  },
  {
    src: "/iftar_distribution-2023/File_024.png",
    alt: "file_024",
  },
  {
    src: "/iftar_distribution-2023/File_025.png",
    alt: "file_025",
  },
  {
    src: "/iftar_distribution-2023/File_026.png",
    alt: "file_026",
  },
  {
    src: "/iftar_distribution-2023/File_027.png",
    alt: "file_027",
  },
  {
    src: "/iftar_distribution-2023/File_028.png",
    alt: "file_028",
  },
  {
    src: "/iftar_distribution-2023/File_029.png",
    alt: "file_029",
  },
  {
    src: "/iftar_distribution-2023/File_030.png",
    alt: "file_030",
  },
  {
    src: "/iftar_distribution-2023/File_031.png",
    alt: "file_031",
  },
  {
    src: "/iftar_distribution-2023/File_032.png",
    alt: "file_032",
  },
  {
    src: "/iftar_distribution-2023/File_033.png",
    alt: "file_033",
  },
  {
    src: "/iftar_distribution-2023/File_034.png",
    alt: "file_034",
  },
  {
    src: "/iftar_distribution-2023/File_035.png",
    alt: "file_035",
  },
  {
    src: "/iftar_distribution-2023/File_036.png",
    alt: "file_036",
  },
  {
    src: "/iftar_distribution-2023/File_037.png",
    alt: "file_037",
  },
  {
    src: "/iftar_distribution-2023/File_038.png",
    alt: "file_038",
  },
  {
    src: "/iftar_distribution-2023/File_039.png",
    alt: "file_039",
  },
  {
    src: "/iftar_distribution-2023/File_040.png",
    alt: "file_040",
  },
  {
    src: "/iftar_distribution-2023/File_041.png",
    alt: "file_041",
  },
  {
    src: "/iftar_distribution-2023/File_042.png",
    alt: "file_042",
  },
  {
    src: "/iftar_distribution-2023/File_043.png",
    alt: "file_043",
  },
  {
    src: "/iftar_distribution-2023/File_044.png",
    alt: "file_044",
  },
  {
    src: "/iftar_distribution-2023/File_045.png",
    alt: "file_045",
  },
  {
    src: "/iftar_distribution-2023/File_046.png",
    alt: "file_046",
  },
  {
    src: "/iftar_distribution-2023/File_047.png",
    alt: "file_047",
  },
  {
    src: "/iftar_distribution-2023/File_048.png",
    alt: "file_048",
  },
  {
    src: "/iftar_distribution-2023/File_049.png",
    alt: "file_049",
  },
  {
    src: "/iftar_distribution-2023/File_050.png",
    alt: "file_050",
  },
  {
    src: "/iftar_distribution-2023/File_051.png",
    alt: "file_051",
  },
  {
    src: "/iftar_distribution-2023/File_052.png",
    alt: "file_052",
  },
  {
    src: "/iftar_distribution-2023/File_053.png",
    alt: "file_053",
  },
  {
    src: "/iftar_distribution-2023/File_054.png",
    alt: "file_054",
  },
  {
    src: "/iftar_distribution-2023/File_055.png",
    alt: "file_055",
  },
  {
    src: "/iftar_distribution-2023/File_056.png",
    alt: "file_056",
  },
  {
    src: "/iftar_distribution-2023/File_057.png",
    alt: "file_057",
  },
  {
    src: "/iftar_distribution-2023/File_058.png",
    alt: "file_058",
  },
  {
    src: "/iftar_distribution-2023/File_059.png",
    alt: "file_059",
  },
  {
    src: "/iftar_distribution-2023/File_060.png",
    alt: "file_060",
  },
  {
    src: "/iftar_distribution-2023/File_061.png",
    alt: "file_061",
  },
  {
    src: "/iftar_distribution-2023/File_062.png",
    alt: "file_062",
  },
  {
    src: "/iftar_distribution-2023/File_063.png",
    alt: "file_063",
  },
  {
    src: "/iftar_distribution-2023/File_064.png",
    alt: "file_064",
  },
  {
    src: "/iftar_distribution-2023/File_065.png",
    alt: "file_065",
  },
  {
    src: "/iftar_distribution-2023/File_066.png",
    alt: "file_066",
  },
  {
    src: "/iftar_distribution-2023/File_067.png",
    alt: "file_067",
  },
  {
    src: "/iftar_distribution-2023/File_068.png",
    alt: "file_068",
  },
  {
    src: "/iftar_distribution-2023/File_069.png",
    alt: "file_069",
  },
  {
    src: "/iftar_distribution-2023/File_070.png",
    alt: "file_070",
  },
  {
    src: "/iftar_distribution-2023/File_071.png",
    alt: "file_071",
  },
  {
    src: "/iftar_distribution-2023/File_072.png",
    alt: "file_072",
  },
  {
    src: "/iftar_distribution-2023/File_073.png",
    alt: "file_073",
  },
  {
    src: "/iftar_distribution-2023/File_074.png",
    alt: "file_074",
  },
];

const rickshaw = [
  { src: "/rickshaw/rickshaw_1.jpeg", alt: "rickshaw_1" },
  { src: "/rickshaw/rickshaw_2.jpeg", alt: "rickshaw_e" },
];

const skill_Dev = [
  { src: "/skill_development/skill_dev01.jpg", alt: "skill_dev01" },
  { src: "/skill_development/skill_dev02.jpg", alt: "skill_dev02" },
  { src: "/skill_development/skill_dev03.jpeg", alt: "skill_dev03" },
  { src: "/skill_development/skill_dev04.png", alt: "skill_dev04" },
  { src: "/skill_development/skill_dev05.png", alt: "skill_dev05" },
  { src: "/skill_development/skill_dev06.png", alt: "skill_dev06" },
  { src: "/skill_development/skill_dev07.png", alt: "skill_dev07" },
  { src: "/skill_development/skill_dev08.png", alt: "skill_dev08" },
  { src: "/skill_development/skill_dev09.png", alt: "skill_dev09" },
  { src: "/skill_development/skill_dev10.png", alt: "skill_dev10" },
];

const medical_help_images = [
  {
    src: "/medical_help_images/medical_help01.jpeg",
    alt: "medical help 01",
  },
  {
    src: "/medical_help_images/medical_help02.jpeg",
    alt: "medical help 02",
  },
  {
    src: "/medical_help_images/medical_help03.jpeg",
    alt: "AT&T",
  },
];

const sewing = [
  {
    src: "/swing_project/swing2.jpg",
    alt: "2",
  },
];

const covid = [
  {
    src: "/COVID-19/covid01.jpg",
    alt: "covid01",
  },
  {
    src: "/COVID-19/covid02.jpg",
    alt: "covid02",
  },
  {
    src: "/COVID-19/atd5.jpg",
    alt: "atd5",
  },

  {
    src: "/COVID-19/atd8.jpg",
    alt: "atd8",
  },
];

const aid_to_disables = [
  { src: "/aid_to_disable/atd4.jpg", alt: "ait to disable 4" },
  { src: "/aid_to_disable/atd6.jpg", alt: "ait to disable 6" },
  { src: "/aid_to_disable/atd7.jpg", alt: "ait to disable 7" },
  { src: "/aid_to_disable/atd10.jpg", alt: "ait to disable 10" },
  { src: "/aid_to_disable/atd11.jpg", alt: "ait to disable 11" },
  { src: "/aid_to_disable/atd12.jpg", alt: "ait to disable 12" },
  { src: "/aid_to_disable/atd13.jpg", alt: "ait to disable 13" },
];

const single_mothers = [
  { src: "/single_mother/single_mother01.jpg", alt: "single mother 01" },
  { src: "/single_mother/single_mother02.jpg", alt: "single mother 02" },
  { src: "/single_mother/single_mother03.jpg", alt: "single mother 03" },
  { src: "/single_mother/single_mother04.jpg", alt: "single mother 04" },
];

const eye_campaign = [
  { src: "/eye_campaign/1.jpg", alt: "1" },
  { src: "/eye_campaign/3.jpg", alt: "3" },
  { src: "/eye_campaign/4.jpg", alt: "4" },
  { src: "/eye_campaign/6.jpg", alt: "6" },
  { src: "/eye_campaign/8.jpg", alt: "8" },
];

const general = [
  {
    src: "/general_donations/general.jpeg",
    alt: "general",
  },
];

export default function Gallery() {
  return (
    <div>
      {" "}
      {/* <ImageField images={images} /> */}
      <Header />
      <MenuBar />
      <div className="mb-8">
        <PageTitle text="EVENT GALLERY" />
      </div>
      <div className="bg-black text-white font-normal mb-8">
        <div className="mx-20 flex text-center flex-wrap gap-8">
          <h1 className="text-2xl font-serif font-bold pt-4">
            We Support Children and youth to reach their full potential!
          </h1>
          <p className="text-xl font-serif font-normal pb-4">
            We run shelter homes, schools and a reasonable mess that helps such
            needy young people. We also have our halpline offices that can be
            approached at any time.{" "}
          </p>
        </div>
      </div>
      <GalleryScroll />
      <section id="FATBH">
        <SectionHeader title="FINANCIAL AID TO BUILDING HOUSE" />
        <ViewMoreImage images={faitf} />
      </section>
      <section id="FMC">
        <SectionHeader title="FREE MEDICAL CAMPS" />
        <ViewMoreImage images={medcial_camp_flood} />
      </section>
      <section id="FLOOD_RELIEF">
        <SectionHeader title="2024 FLOOD RELIEF" />
        <ViewMoreImage images={floodProject} />
      </section>
      <section id="RAMADAN_SUPPLY">
        <SectionHeader title="RAMADAN SUPPLY PROGRAM" />
        <ViewMoreImage images={iftar_distribution_Images} />
      </section>
      <section id="RICKSHAW">
        <SectionHeader title="RICKSHAW GIVEAWAY PROGRAM" />
        <ViewMoreImage images={rickshaw} />
      </section>
      <section id="SKILL_DEV">
        <SectionHeader title="SKILL DEVELOPMENT PROGRAM" />
        <ViewMoreImage images={skill_Dev} />
      </section>
      <SectionHeader title="MEDICAL HELP PROGRAM" />
      <ViewMoreImage images={medical_help_images} />
      <SectionHeader title="SEWING MACHINE GIVEAWAY" />
      <ViewMoreImage images={sewing} />
      <SectionHeader title="COVID-19 SUPPLY PROGRAM" />
      <ViewMoreImage images={covid} />
      <SectionHeader title="AID TO DISABLED PEOPLES" />
      <ViewMoreImage images={aid_to_disables} />
      <SectionHeader title="SINGLE MOTHER AID" />
      <ViewMoreImage images={single_mothers} />
      <SectionHeader title="EYE CAMPAIGN" />
      <ViewMoreImage images={eye_campaign} />
      <SectionHeader title="GENERAL DONATIONS" />
      <ViewMoreImage images={general} />
      <Footer />
    </div>
  );
}
