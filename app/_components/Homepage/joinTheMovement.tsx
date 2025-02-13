"use client";

import { useState, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

export default function JoinTheMovement() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  // const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add formType to the data
    const formDataWithType = {
      ...formData,
      formType: "joinTheMovement", // Or dynamically assign this based on your form
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
    <div className="w-full flex flex-col items-center p-6 bg-orange-500 rounded-lg">
      <h1 className="text-6xl font-bold mb-4">JOIN THE MOVEMENT</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-transparent p-6 px-36 shadow-none rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-base font-medium mb-1" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full h-14 p-2 border"
            placeholder="Enter your name here."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-base font-medium mb-1" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full h-14 p-2 border"
            placeholder="Enter your email here."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-base font-medium mb-1" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-24 p-2 border"
            placeholder="Enter your message here."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* reCAPTCHA */}
        {/* <div className="mb-4 flex justify-center">
          <ReCAPTCHA
            sitekey="6Lc7k9MqAAAAABb9vy9kqPPYjTFVApY9K2TJDtDd"
            onChange={(value) => setRecaptchaValue(value)}
            ref={recaptchaRef}
          />
        </div> */}

        <button
          type="submit"
          className="w-32 h-12 bg-orange-50 text-red-950 p-2 hover:bg-blue-600 tracking-wider font-bold"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
