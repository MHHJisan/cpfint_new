"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Header } from "../_components/header";
import { MenuBar } from "../_components/menubar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Footer } from "../_components/footer";

const members = [
  { name: "Fakru Uddin", location: "Texas, USA", designation: "" },
  {
    name: "Showkat Hayat Khan Biplob",
    location: "Paris, France",
    designation: "",
  },
  {
    name: "Abdul Qayum Mamun",
    location: "Rome, Italy",
    designation: "",
  },
];

const exMembers = [
  { name: "", location: "London, UK", designation: "Advisor" },
  {
    name: "",
    location: "Berlin, Germany",
    designation: "Member of Trustee Board",
  },
];

const volunteerMembers = [
  {
    name: "Rakibul Hayat",
    location: "Charkakra,Conpanigonj,Noakhali",
    designation: "Volunteer",
  },
  {
    name: "Mubarrat Farabee",
    location: "Basurhat Companygonj Noakhali",
    designation: "Volunteer",
  },
  {
    name: "Mahadi Hasan",
    location: "চর হাজারী কোম্পানি গন্জ নোয়াখালী",
    designation: "Volunteer",
  },
  {
    name: "Arafat Hossain",
    location: "Corhajari Companygonj Noakhali",
    designation: "Volunteer",
  },
  {
    name: "Mohammad Ripat",
    location:
      "Monkaji Bepari Bari, 5 no. Ward, Charhazari, Companigonj, Noakhali",
    designation: "Volunteer",
  },
  {
    name: "Md. Ashrafur Rahman",
    location: "HAZARIHAT,COMPANIGONJ,NOAKHALI",
    designation: "Volunteer",
  },
  {
    name: "JAHIDUL ISLAM",
    location: "Char hazari companigonj Noakhali",
    designation: "Volunteer",
  },
  {
    name: "Ismail Hossain",
    location: "Char hazari companigonj Noakhali",
    designation: "Volunteer",
  },
  {
    name: " Mosharraf Hosen",
    location: "Charparboti 2 no word",
    designation: "Volunteer",
  },
  {
    name: "Imran Hossen Rony",
    location: "charhazari, hazarihat, companigonj, noakhali.",
    designation: "Volunteer",
  },
];

export default function MemberList() {
  const [selectedCategory, setSelectedCategory] = useState("active");

  const getMembers = () => {
    if (selectedCategory === "active") return members;
    if (selectedCategory === "ex") return exMembers;
    if (selectedCategory === "volunteer") return volunteerMembers;
    return [];
  };

  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center min-h-screen gap-0 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <MenuBar />

      {/* Button Group */}
      <div className="flex flex-wrap justify-center gap-4 my-6 px-4">
        <Button
          onClick={() => setSelectedCategory("active")}
          className={`px-4 py-2 w-40 h-12 font-semibold border rounded ${
            selectedCategory === "active"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          } hover:bg-yellow-500`}
        >
          Current Committee
        </Button>
        <Button
          onClick={() => setSelectedCategory("ex")}
          className={`px-4 py-2 w-40 h-12 font-semibold border rounded ${
            selectedCategory === "ex"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          } hover:bg-yellow-500`}
        >
          Trustee Board
        </Button>
        <Button
          onClick={() => setSelectedCategory("volunteer")}
          className={`px-4 py-2 w-40 h-12 font-semibold border rounded ${
            selectedCategory === "volunteer"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          } hover:bg-yellow-500`}
        >
          Volunteers
        </Button>
      </div>

      {/* Apply Button */}
      <div className="my-2">
        <Button
          onClick={() => router.push("/apply")}
          className="px-6 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-yellow-400 hover:text-black shadow-lg"
        >
          Become a Member/Volunteer
        </Button>
      </div>

      {/* Table Container with Responsive Scroll */}
      <div className="w-full max-w-[1140px] py-5 mb-10 overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center bg-[#1e3c74] text-white border border-[#1e3c74] py-5 font-semibold">
                নাম
              </TableHead>
              <TableHead className="text-center bg-[#1e3c74] text-white border border-[#1e3c74] py-5 font-semibold">
                ঠিকানা
              </TableHead>
              <TableHead className="text-center bg-[#1e3c74] text-white border border-[#1e3c74] py-5 font-semibold">
                পদবী
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getMembers().map((member, index) => (
              <TableRow key={index}>
                <TableCell className="text-center border py-5">
                  {member.name || "N/A"}
                </TableCell>
                <TableCell className="text-center border py-5">
                  {member.location || "N/A"}
                </TableCell>
                <TableCell className="text-center border py-5">
                  {member.designation}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Footer />
    </div>
  );
}
