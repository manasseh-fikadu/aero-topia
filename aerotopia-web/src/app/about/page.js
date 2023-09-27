'use client'

import React from "react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";

export default function About() {
  return (
    <div>
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Company</h2>
          <p className="text-gray-700 mb-4">
            At Our Company, we are passionate about delivering exceptional
            solutions tailored to your needs. With years of experience in the
            industry, we have built a reputation for excellence and reliability.
          </p>
          <p className="text-gray-700 mb-4">
            Our team of dedicated professionals is committed to creating
            innovative and stunning websites, mobile apps, and e-commerce
            solutions that help businesses thrive in the digital world. We
            combine technical expertise with creative flair to bring your ideas
            to life.
          </p>
          <p className="text-gray-700 mb-4">
            Customer satisfaction is at the heart of everything we do. We work
            closely with our clients to understand their goals and deliver
            results that exceed their expectations. We take pride in our
            attention to detail, quality craftsmanship, and timely project
            delivery.
          </p>
          <p className="text-gray-700">
            Whether you're a small startup or a large enterprise, we have the
            skills and expertise to take your digital presence to the next
            level. Let us be your trusted partner in your journey towards
            success.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <PopupWidget />
    </div>
  );
}
