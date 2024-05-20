"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-mail", { // Update the URL here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send email");
      }
  
      alert("Email sent successfully!");
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };
  

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white text-[#333] my-6 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
      <div>
        <h2 className="text-3xl font-extrabold">Get In Touch</h2>
        <p className="text-sm text-gray-400 mt-3">
          Have a specific inquiry or looking to explore new opportunities? Our
          experienced team is ready to engage with you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mt-8">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-[#333] text-white hover:bg-[#222]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              className="mr-2"
              viewBox="0 0 548.244 548.244"
            >
              {/* SVG path */}
            </svg>
            Send Message
          </button>
        </form>
        {/* Contact information */}
      </div>
      {/* Google Maps */}
    </div>
  );
};

export default Contact;
