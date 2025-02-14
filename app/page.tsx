import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Herosection } from "./_components/Homepage/herosection";
import { ImageField } from "./_components/Homepage/imageField";
import { SectionHeader } from "./_components/Homepage/sectionHeader";
import { SectionTextField } from "./_components/Homepage/sectionTextField";
import { SectionTable } from "./_components/Homepage/sectionTable";
import { MenuBar } from "./_components/menubar";
import DonationPrograms from "./_components/Homepage/donationPrograms";
import OurCampaigns from "./_components/Homepage/campaignsPrograms";
import { Button } from "@/components/ui/button";
import HopeSection from "./_components/Homepage/hopeSection";
import SlideShow from "./_components/Homepage/slideShow";
import JoinTheMovementForm from "./_components/Homepage/joinTheMovement";

const financial_aid_to_flood = [
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
];

const medicalCamps = [
  { src: "/medical_camp_flood/banner.jpg", alt: "banner" },

  { src: "/medical_camp_flood/IMG_2680.webp", alt: "2680" },
  { src: "/medical_camp_flood/IMG_2681.webp", alt: "2681" },

  { src: "/medical_camp_flood/IMG_2702.webp", alt: "2702" },
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
];

const ramadanImages = [
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
];

const medicalImages = [
  {
    src: "https://cpfint.org/wp-content/uploads/2024/06/Anaconda-Navigator.jpeg",
    alt: "Anaconda Navigator",
  },
  {
    src: "https://cpfint.org/wp-content/uploads/2024/06/WhatsApp-Image-2022-09-07-at-11.56.47-PM.jpeg",
    alt: "WhatsApp Image",
  },
  {
    src: "https://cpfint.org/wp-content/uploads/2024/06/AtT-1024x768.jpeg",
    alt: "AT&T",
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center min-h-screen gap-4 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <MenuBar />
      {/* <div className="w-full"> */}
      <Herosection />
      {/* </div> */}
      <SectionHeader title="DRY FOOD DISTRIBUTION AUGUST 2024" />
      <SectionTable />

      <SectionHeader title="FINANCIAL AID TO FLOOD VICTIM" />

      <ImageField
        images={financial_aid_to_flood}
        galleryPageUrl="/gallery"
        sectionId="FATBH"
      />

      <SectionHeader title="FREE MEDICAL CAMPS" />
      <SectionTextField
        shortText="We run free medical camps to help the under priviledged people of our area. "
        fullText="The  latest campaign was run in four (4) different locations on different times to accommodate people with diverse working hours.

Our dedicated volunteer team collaborated with the local administration and government healthcare department workers in running overseeing the camps. We are always looking for  ways to help more people."
      />
      <SectionTextField
        shortText="আমরা আমাদের এলাকার সুবিধাবঞ্চিত মানুষের সহায়তায় বিনামূল্যে মেডিকেল ক্যাম্প পরিচালনা করি।"
        fullText="আমরা আমাদের এলাকার সুবিধাবঞ্চিত মানুষের সহায়তায় বিনামূল্যে মেডিকেল ক্যাম্প পরিচালনা করি।

সর্বশেষ ক্যাম্পেইনটি চারটি ভিন্ন স্থানে এবং ভিন্ন সময়ে পরিচালিত হয়েছিল, যাতে বিভিন্ন কর্মঘণ্টায় কাজ করা মানুষেরা সুবিধা নিতে পারে।

আমাদের নিবেদিতপ্রাণ স্বেচ্ছাসেবক দল স্থানীয় প্রশাসন এবং সরকারি স্বাস্থ্য বিভাগের কর্মীদের সাথে সমন্বয় করে ক্যাম্পগুলো পরিচালনা ও পর্যবেক্ষণ করেছে। আমরা সবসময় আরও বেশি মানুষকে সাহায্য করার উপায় খুঁজে চলছি।"
      />
      <ImageField
        images={medicalCamps}
        galleryPageUrl="/gallery"
        sectionId="FMC"
      />

      <SectionHeader title="2024 FLOOD RELIEF" />

      <ImageField
        images={floodProject}
        galleryPageUrl="/gallery"
        sectionId="FLOOD_RELIEF"
      />

      <SectionHeader title="RAMADAN SUPPLY PROGRAM" />

      <ImageField
        images={ramadanImages}
        galleryPageUrl="/gallery"
        sectionId="RAMADAN_SUPPLY"
      />

      {/* <SectionHeader title="RICKSHAW GIVEAWAY PROGRAM" /> */}

      {/* <SectionHeader title="DONATING MEDICAL EXPENSES TO CRITICAL PATIENTS" />
      <SectionTextField
        shortText="Driven by the spirit of giving, we, a group of individuals from Companigonj, Noakhali, find fulfillment in bringing smiles to those in need."
        fullText="Our roots and the generosity we've received from our nation and society call us back to give back. This is the driving force behind our efforts to make a positive impact on the world around us. We are empowering rural communities through self-employment, single-mother aid, and educational assistance.

      We're always looking for the best, most sustainable, and impactful ways to help those in need."
      />
      <SectionTextField
        shortText="দানশীলতার প্রতি আমাদের গভীর অনুপ্রেরণায়, আমরা, কোম্পানীগঞ্জ, নোয়াখালী থেকে কিছু ব্যক্তি, অসহায় মানুষের মুখে হাসি ফুটিয়ে তোলার মাধ্যমে পরিতৃপ্তি অনুভব করি।"
        fullText="আমাদের শিকড় এবং আমাদের জাতি ও সমাজ থেকে প্রাপ্ত উদারতা আমাদেরকে প্রতিদান দেওয়ার আহ্বান জানায়। এটাই আমাদের প্রচেষ্টার মূল চালিকাশক্তি, যা আমাদের চারপাশের পৃথিবীতে ইতিবাচক প্রভাব ফেলার জন্য অনুপ্রাণিত করে। আমরা গ্রামীণ সম্প্রদায়গুলোর ক্ষমতায়নের জন্য স্বনির্ভরতা, একক মায়েদের সহায়তা এবং শিক্ষাগত সহায়তার মাধ্যমে কাজ করছি।

আমরা সবসময় এমন উপায় খুঁজছি, যা সবচেয়ে টেকসই, কার্যকর এবং প্রভাবশালীভাবে অসহায় মানুষদের সাহায্য করতে পারে।"
      />
      <ImageField
        images={medicalImages}
        galleryPageUrl="/gallery"
        sectionId="RICKSHAW"
      /> */}

      <div className="w-full min-h-full">
        <header
          className="w-full p-3 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-[rgba(0,0,0,0.65)] 
        text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out"
        >
          <h3 className="font-bold text-[36px] leading-[46.8px] bg-transparent text-white m-0 p-0 flex items-center justify-center">
            OUR PREVIOUS PROJECTS
          </h3>
          <DonationPrograms />
        </header>
      </div>

      <div className="w-full min-h-full">
        <header
          className="w-full p-3 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-[rgba(0,0,0,0.65)] 
        text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out"
        >
          <h3 className="font-bold text-[36px] leading-[46.8px] bg-transparent text-white m-0 p-0 flex items-center justify-center">
            OUR CAMPAIGNS
          </h3>
        </header>

        <OurCampaigns />
        <div className="flex items-center justify-center">
          <Button
            asChild
            className="bg-[#FF3951] text-white font-['Poppins'] font-bold text-[14px] leading-[14px] uppercase tracking-[10px] px-[35px] py-[17px] rounded-[10px] hover:bg-[#FF3951]/90"
          >
            <a href="/donation">
              <span className="flex justify-center gap-[5px]">Donate</span>
            </a>
          </Button>
        </div>
      </div>

      <HopeSection />

      {/* <div className="w-full min-h-full">
        <header
          className="w-full p-3 bg-[#1e3c74] bg-cover bg-center text-[rgba(0,0,0,0.65)] 
        text-[17px] leading-[31.5714px] transition-all duration-300 ease-in-out"
        >
          <SlideShow />
        </header>
      </div> */}

      <JoinTheMovementForm />

      <Footer />
    </div>
  );
}
