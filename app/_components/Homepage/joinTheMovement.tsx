"use client";

import { useState } from "react";

export default function JoinTheMovement() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataWithType = {
      ...formData,
      formType: "joinTheMovement",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithType),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center p-6 sm:p-8 md:p-10 bg-orange-500 rounded-lg">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        JOIN THE MOVEMENT
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-transparent p-4 sm:p-6 shadow-none rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full h-12 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your name here"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full h-12 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your email here"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-28 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-40 h-12 bg-orange-50 text-red-950 font-bold tracking-wide rounded-md 
            hover:bg-blue-400 transition-all duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
