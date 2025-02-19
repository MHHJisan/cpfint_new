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
    roles: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateBDPhone = (phone: string) => {
    const bdPhoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;
    return bdPhoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newErrors = { email: "", phone: "" };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validateBDPhone(formData.phone)) {
      newErrors.phone = "Phone number must be a valid Bangladeshi number";
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.phone) {
      return; // Stop submission if there are validation errors
    }

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
          roles: "",
          message: "",
        });
        setErrors({ email: "", phone: "" });
      } else {
        alert(result.error || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <MenuBar />

      <section className="w-full flex flex-col justify-between p-4 lg:p-8 bg-[url('/img/blue-bg-pattern.png')] bg-cover bg-center text-white mb-2">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-amber-500 mb-6">
            Become a Member/Volunteer
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                className="h-12 w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="h-12 w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-12 w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 ${
                    errors.email ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`h-12 w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 ${
                    errors.phone ? "border-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <input
              type="text"
              name="address"
              placeholder="Address (ঠিকানা)"
              value={formData.address}
              onChange={handleChange}
              className="h-12 w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            {/* Roles Selection */}
            <div className="flex flex-col lg:flex-row gap-4 text-black">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="roles"
                  value="member"
                  checked={formData.roles === "member"}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
                <span
                  className={`font-bold text-xl ${
                    formData.roles === "member"
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
                  checked={formData.roles === "volunteer"}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
                <span
                  className={`font-bold text-xl ${
                    formData.roles === "volunteer"
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  Apply as a Volunteer
                </span>
              </label>
            </div>

            {/* Message Box */}
            <textarea
              name="message"
              placeholder="Write something about yourself. (আপনার সম্পর্কে কিছু লিখুন)"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-32"
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full lg:w-40 h-12 bg-slate-100 text-amber-900 font-bold tracking-widest hover:bg-blue-600 transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
