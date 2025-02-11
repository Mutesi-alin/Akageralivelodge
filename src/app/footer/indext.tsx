import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin, Clock } from 'lucide-react';

const HotelFooter = () => {
  return (
    <footer id='contacts' className="bg-neutral-900 text-neutral-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="max-w-xs">
            <div className="mb-6">
              <h2 className="text-white font-serif text-2xl mb-1">Akagera Live Lodge</h2>
              <p className="text-sm text-neutral-400">Luxury Accommodation</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-amber-500 mb-4 uppercase text-sm tracking-wider">About Us</h3>
              <p className="text-sm">Experience luxury and comfort in our boutique hotel, offering spacious rooms and suites with stunning views and exceptional service.</p>
            </div>
            
            <div>
              <h3 className="text-amber-500 mb-4 uppercase text-sm tracking-wider">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+250 788 123 456</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>reservations@akageralivelodge.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Reception</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-amber-500 mb-4 uppercase text-sm tracking-wider">Accommodations</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500">Saba Suite</a></li>
                <li><a href="#" className="hover:text-amber-500">Kaws Room</a></li>
                <li><a href="#" className="hover:text-amber-500">Special Offers</a></li>
                <li><a href="#" className="hover:text-amber-500">Gift Vouchers</a></li>
                <li><a href="#" className="hover:text-amber-500">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-amber-500 mb-4 uppercase text-sm tracking-wider">Guest Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500">Dining</a></li>
                <li><a href="#" className="hover:text-amber-500">Spa & Wellness</a></li>
                <li><a href="#" className="hover:text-amber-500">Experiences</a></li>
                <li><a href="#" className="hover:text-amber-500">Transportation</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-amber-500 mb-4 uppercase text-sm tracking-wider">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive special offers and updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:border-amber-500"
              />
              <button 
                type="button" 
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex justify-center mb-6">
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} Akagera Live Lodge. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HotelFooter;