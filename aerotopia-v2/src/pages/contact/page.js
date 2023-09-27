'use client'

import React from "react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg border-solid shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <PopupWidget />
    </div>
  );
}
