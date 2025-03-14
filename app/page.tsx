"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [Back, setBack] = useState("pf3.jpg");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("https://sheetdb.io/api/v1/x3l7fvjpp9ymi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData }),
    });
    if (response.ok) setSubmitted(true);
  };

  return (
    <div>
      <Navbar color="orange" />

      {/* Hero Section */}
      <div
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/Picture/pf3.jpg')" }}
      >
        {/* Dark Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Bulb (Animated Flicker Effect) */}
        <motion.button
          title="Flick the switch"
          className="absolute top-4 left-4 z-10"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Image src={"/Picture/bulb.jpg"} width={100} height={80} alt="Bulb" />
        </motion.button>

        {/* Title with Glowing Effect */}
        <motion.h1
          className="custom-font text-4xl sm:text-6xl md:text-[8rem] text-amber-500 text-center drop-shadow-[0_0_15px_rgba(255,165,0,0.7)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lightseeker
        </motion.h1>

        {/* Centered Content with Smooth Animation */}
        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 space-y-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            A world filled with wonder and awe? A world filled with rage, shame,
            guilt? A world of cruelty? Or a world of honor?
          </p>
          <p>
            Everything it is, that I tell you so, is just a story—just like you
            are.
          </p>
          <p>
            But tell me, traveler, what do you seek? Do you chase the flicker of
            dawn, yearning for its warmth? Or do you revel in the embrace of
            shadows, where secrets rest unbroken?
          </p>
          <p>
            We are but wanderers, moving through the corridors of time, shaping
            moments, breaking silences, building bridges with whispers, and
            tearing them down with echoes.
          </p>
          <p>
            The light you follow—does it lead you to salvation, or does it blind
            you from the truth? The darkness you fear—does it consume you, or
            does it offer you shelter?
          </p>
          <p className="font-semibold text-lg text-amber-400">
            To be a <strong>Lightseeker</strong> is to know that neither light
            nor dark defines you, but rather the dance between them, the
            unending search, the hunger to know, to feel, to exist beyond the
            confines of what has been told.
          </p>
          <p className="italic text-gray-300">
            So tell me again, traveler—do you seek the light, or does the light
            seek you?
          </p>
        </motion.div>
      </div>

      {/* Featured Section */}
      <div
        id="featured"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-12 px-4"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Featured Stories
        </motion.h2>
        <motion.p
          className="max-w-2xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our featured content will captivate your senses with artistic flair.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.div
            className="w-full sm:w-1/2 md:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card
              title="Featured Story 1"
              description="Description for featured Story 1."
              image="/Picture/pf2.jpg"
              color="amber"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 md:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card
              title="Featured Story 2"
              description="Description for featured Story 2."
              image="/Picture/pf2.jpg"
              color="red"
            />
          </motion.div>
        </div>
      </div>

      {/* Latest Section */}
      <div
        id="latest"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-12 px-4"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Latest Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Card
            title="Latest News 1"
            description="Short description of news 1."
            image="/Picture/pf3.jpg"
            color="amber"
          />
          <Card
            title="Latest News 2"
            description="Short description of news 2."
            image="/Picture/pf3.jpg"
            color="amber"
          />
          <Card
            title="Latest News 3"
            description="Short description of news 3."
            image="/Picture/pf3.jpg"
            color="amber"
          />
        </motion.div>
      </div>

      {/* Reviews Section */}
      <div
        id="reviews"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-200 py-12 px-4"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Reviews
        </motion.h2>
        <motion.div
          className="max-w-4xl space-y-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="p-6 border rounded shadow-md">
            <p className="italic">
              "An inspiring journey into the realms of light and shadow. Truly
              captivating!"
            </p>
            <p className="mt-2 font-semibold text-right">- Traveler One</p>
          </div>
          <div className="p-6 border rounded shadow-md">
            <p className="italic">
              "A masterpiece that challenges our perception of reality and
              fiction."
            </p>
            <p className="mt-2 font-semibold text-right">- Traveler Two</p>
          </div>
          <div className="p-6 border rounded shadow-md">
            <p className="italic">
              "An inspiring journey into the realms of light and shadow. Truly
              captivating!"
            </p>
            <p className="mt-2 font-semibold text-right">- Traveler One</p>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-10 px-4 md:px-10">
        <h1 className="custom-font text-6xl md:text-9xl text-red-800 text-center mt-10">
          Contact ME
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center mt-8 space-y-4 max-w-lg mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-white sigmar-regular text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-white sigmar-regular text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 bg-white sigmar-regular text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="bg-red-800 sigmar-regular text-white rounded-lg p-2 mt-4 w-full hover:bg-red-700 transition-colors duration-200"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-center text-red-600 text-xl sigmar-regular">
            Thank you for your message!
          </p>
        )}

        <div className="mt-10 text-center">
          {/* Social Links and Contact Details */}
          <p className="text-red-800 text-3xl md:text-5xl mb-4 custom-font">
            You can also reach me via:
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="https://x.com/Vinodakshat1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 hover:text-red-600 transition-colors duration-200 sigmar-regular flex items-center space-x-2"
            >
              <FaTwitter size={30} />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vinod-akshat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 hover:text-red-600 transition-colors duration-200 sigmar-regular flex items-center space-x-2"
            >
              <FaLinkedin size={30} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:akshayforrivers@gmail.com"
              className="text-red-800 hover:text-red-600 transition-colors duration-200 sigmar-regular flex items-center space-x-2"
            >
              <FaEnvelope size={30} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
