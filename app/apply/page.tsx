"use client";
import React, { useState } from "react";
import { Header } from "../_components/header";
import { MenuBar } from "../_components/menubar";
import { Footer } from "../_components/footer";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    roles: [] as string[],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement; // Explicitly cast e.target
      setFormData((prevData) => ({
        ...prevData,
        roles: target.checked
          ? [...prevData.roles, value] // Add if checked
          : prevData.roles.filter((role) => role !== value), // Remove if unchecked
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          roles: [],
          message: "",
        });
      } else {
        alert(result.error || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen gap-0 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <MenuBar />

      <section className="w-full flex flex-col justify-between p-6 lg:p-8 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-white mb-2">
        <div className="mx-60">
          <div className="w-full flex justify-center items-center ">
            <h2 className="text-xl lg:text-5xl font-bold mb-4 text-center text-amber-500">
              Become a Member/Volunteer
            </h2>
          </div>
          <div>
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
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="address"
                name="address"
                placeholder="Address (ঠিকানা) "
                value={formData.address}
                onChange={handleChange}
                className="h-12 w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Radio buttons for roles */}
              <div className="flex flex-col lg:flex-row gap-4 text-black">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="roles" // Same name for radio buttons ensures only one can be selected
                    value="member"
                    checked={formData.roles.includes("member")}
                    onChange={handleChange}
                    className="h-5 w-5"
                  />
                  <span
                    className={`font-bold text-[30px] transition-colors ${
                      formData.roles.includes("member")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    Apply as a Member
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="roles"
                    value="volunteer"
                    checked={formData.roles.includes("volunteer")}
                    onChange={handleChange}
                    className="h-5 w-5"
                  />
                  <span
                    className={`font-bold text-[30px] transition-colors ${
                      formData.roles.includes("volunteer")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    Apply as a Volunteer
                  </span>
                </label>
              </div>

              <textarea
                name="message"
                placeholder="Write something about yourself. ( আপনার নিজের স্বম্বন্ধে কিছু বলেন ) "
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full lg:w-36 h-12 py-2 px-4 bg-slate-100 text-amber-900 font-mono font-bold tracking-widest hover:bg-blue-600 transition"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
