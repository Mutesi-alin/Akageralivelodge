'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, CheckCircle, Coffee, Home, Users } from 'lucide-react';
import { Montserrat, Roboto_Slab } from 'next/font/google';

// Import and use fonts properly
const montserrat = Montserrat({ subsets: ['latin'] });
const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Enlarged Logo */}
          <div className="relative w-36 h-12">
            <Image 
              src="/images/lo.png" 
              alt="Akagera Live Lodge Logo" 
              layout="fill"
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {['HOME', 'ABOUT', 'ROOMS', 'GALLERY', 'CONTACT'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-700 hover:text-amber-600 transition text-sm font-semibold uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Booking Button (Visible on Desktop) */}
          <button className="hidden md:block bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide hover:bg-amber-700">
            Book Now
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center py-4 space-y-3">
              {['HOME', 'ABOUT', 'ROOMS', 'GALLERY', 'CONTACT'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-amber-600 transition text-sm font-semibold uppercase tracking-wide"
                >
                  {item}
                </a>
              ))}
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide hover:bg-amber-700">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="/images/meza.jpeg" 
            alt="Akagera Live Lodge" 
            layout="fill"
            quality={100}
            priority
            className="brightness-50 object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className={`text-4xl md:text-6xl font-bold ${robotoSlab.className}`}>
            Come as a Guest, Leave as a Friend
          </h1>
          <p className={`text-lg md:text-2xl mt-4 ${montserrat.className}`}>
            Best Choice for a Wildlife Getaway
          </p>
          <button className="mt-6 bg-amber-600 text-white px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-amber-700">
            Explore More
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { Icon: Home, title: "Stay in Nature", text: "Experience the beauty of Akagera from our cozy lodge." },
            { Icon: Coffee, title: "Traditional Hospitality", text: "Enjoy warm Rwandan hospitality with local cuisine." },
            { Icon: Users, title: "Perfect for Families", text: "A comfortable and safe environment for all ages." }
          ].map(({ Icon, title, text }) => (
            <div key={title} className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <Icon size={50} className="text-amber-600 mx-auto" />
              <h3 className={`mt-4 text-2xl font-semibold ${montserrat.className}`}>{title}</h3>
              <p className="text-gray-600 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image 
              src="/images/Screenshot 2025-02-10 190620.png" 
              alt="Lodge Interior"
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 px-6">
            <h2 className={`text-4xl font-bold text-gray-800 ${robotoSlab.className}`}>
              Why Choose Akagera Live Lodge?
            </h2>
            <p className="text-gray-600 mt-4">
              Enjoy breathtaking views, premium comfort, and a true wildlife experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6">
              {[
                "Scenic Views",
                "Luxury Rooms",
                "Guided Safari Tours",
                "Delicious Local Cuisine",
                "Wildlife Spotting",
                "Eco-Friendly Lodging"
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle size={24} className="text-amber-600" />
                  <span className="text-gray-700 font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
