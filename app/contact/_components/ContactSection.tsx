"use client";
import {
  Locate,
  LocateFixed,
  LocateFixedIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React, { useState, ChangeEvent, FormEvent } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add formType to the data
    const formDataWithType = {
      ...formData,
      formType: "contact", // Or dynamically assign this based on your form
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithType),
      });

      // Make sure the response is valid and parse it
      const data = await response.json();

      console.log("Response data:", data);

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", lastName: "", email: "", message: "" });
      } else {
        alert(data.error || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again later.");
    }
  };
  return (
    <section className="flex flex-wrap justify-between p-8 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-white mb-2">
      {/* Contact Information */}
      <div className="flex-1 px-8 space-y-16 mt-8">
        <h2 className="text-7xl font-extrabold mb-4  font-poppins">
          Get in touch
        </h2>
        <ul className="text-2xl space-y-6">
          <li className="flex gap-4">
            <MapPin className="w-8 h-8 text-[#FFD0B3]" />
            <strong>Address:</strong> 19029 Gallop Drive Germantown MD 20874
          </li>
          <li className="flex gap-4">
            <Mail className="w-8 h-8 text-[#FFD0B3]" />
            <strong>Email:</strong> cpfint20@gmail.com
          </li>
          <li className="flex gap-4">
            <Phone className="w-8 h-8 text-[#FFD0B3]" />
            <strong>Phone:</strong> +1 (718) 316-2585
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Message us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-8 ">
            <input
              type="text"
              id="firstName"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 w-80 p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="h-12 w-80 p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col"></div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 w-[672px] p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-[672px] p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="w-36 h-12 py-2 px-4 bg-slate-100 text-amber-900 font-mono font-bold tracking-widest  hover:bg-blue-600 transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
