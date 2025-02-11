'use client';
import React, { useState } from 'react';
import { ChevronDown, Bed, MapPin, Users, Camera, Leaf, Info } from 'lucide-react';

const ContactFormFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      icon: <Bed className="w-5 h-5" />,
      question: "What type of accommodation does Akagera Live Lodge offer?",
      answer: "Akagera Live Lodge offers luxury and eco-friendly accommodations, including private cottages, family suites, and tented safari lodges with breathtaking views of the park."
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Where is Akagera Live Lodge located?",
      answer: "We are located in the **Eastern Province of Rwanda**, near the entrance of Akagera National Park, providing easy access to safari adventures."
    },
    {
      icon: <Users className="w-5 h-5" />,
      question: "Is the lodge suitable for families and groups?",
      answer: "Yes! We have family-friendly accommodations and group packages, including guided safaris, boat trips, and cultural experiences."
    },
    {
      icon: <Camera className="w-5 h-5" />,
      question: "What activities can I do during my stay?",
      answer: "Guests can enjoy **game drives, boat safaris, bird watching, guided nature walks, and cultural visits** to local communities."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      question: "Is Akagera Live Lodge eco-friendly?",
      answer: "Yes! We follow sustainable tourism practices, using solar energy, eco-friendly materials, and supporting wildlife conservation."
    },
    {
      icon: <Info className="w-5 h-5" />,
      question: "How can I book my stay?",
      answer: "You can book directly on our website, through travel agencies, or by contacting our team for personalized packages."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#E98D3C] text-center mb-4">
          Have any questions?
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Find answers to frequently asked questions about Akagera Live Lodge.
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-lg rounded-lg overflow-hidden border border-gray-700 transition hover:shadow-lg"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-[#E98D3C]">{item.icon}</span>
                  <span className="text-gray-300 font-medium">{item.question}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-[#E98D3C] transition-transform duration-300 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-4 text-gray-400">
                  <div className="pt-2 pl-9">{item.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-lg border border-gray-700 shadow-lg">
            <h2 className="text-2xl md:text-3xl text-[#E98D3C] mb-8 font-semibold">
              Contact Akagera Live Lodge
            </h2>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border-gray-600 focus:border-[#E98D3C] focus:ring-1 focus:ring-[#E98D3C] text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border-gray-600 focus:border-[#E98D3C] focus:ring-1 focus:ring-[#E98D3C] text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border-gray-600 focus:border-[#E98D3C] focus:ring-1 focus:ring-[#E98D3C] text-gray-300 placeholder-gray-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#E98D3C] hover:bg-[#d27b30] text-black rounded-md transition duration-300 font-medium shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map - Updated Location: Akagera National Park, Rwanda */}
          <div className="h-[300px] md:h-full relative bg-gray-800/50 backdrop-blur-lg rounded-lg overflow-hidden border border-gray-700 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31842.54823976243!2d30.6783!3d-1.8754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d8a678b6f98c4b%3A0x2a9f7a1e728e8c3e!2sAkagera%20National%20Park!5e0!3m2!1sen!2srw!4v1707670000000!5m2!1sen!2srw"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFormFAQ;
