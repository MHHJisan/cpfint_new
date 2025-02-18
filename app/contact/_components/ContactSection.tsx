"use client";
import { Mail, MapPin, Phone } from "lucide-react";
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataWithType = { ...formData, formType: "contact" };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithType),
      });
      const data = await response.json();
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
    <section className="flex flex-col lg:flex-row justify-between p-6 lg:p-8 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-white mb-2">
      <div className="w-full lg:w-1/2 px-4 lg:px-8 space-y-10 lg:space-y-16 mt-4 lg:mt-8">
        <h2 className="text-4xl lg:text-7xl font-extrabold font-poppins">
          Get in touch
        </h2>
        <ul className="text-lg lg:text-2xl space-y-4 lg:space-y-6">
          <li className="flex items-center gap-3 lg:gap-4">
            <MapPin className="w-6 h-6 lg:w-8 lg:h-8 text-[#FFD0B3]" />
            <strong>Address:</strong> 19029 Gallop Drive Germantown MD 20874
          </li>
          <li className="flex items-center gap-3 lg:gap-4">
            <Mail className="w-6 h-6 lg:w-8 lg:h-8 text-[#FFD0B3]" />
            <strong>Email:</strong> cpfint20@gmail.com
          </li>
          <li className="flex items-center gap-3 lg:gap-4">
            <Phone className="w-6 h-6 lg:w-8 lg:h-8 text-[#FFD0B3]" />
            <strong>Phone:</strong> +1 (718) 316-2585
          </li>
        </ul>
      </div>

      <div className="w-full lg:w-1/2 px-4 lg:px-0 mt-6 lg:mt-0">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">Message us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 w-full lg:w-1/2 p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="h-12 w-full lg:w-1/2 p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="h-12 w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
          <button
            type="submit"
            className="w-full lg:w-36 h-12 py-2 px-4 bg-slate-100 text-amber-900 font-mono font-bold tracking-widest hover:bg-blue-600 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
