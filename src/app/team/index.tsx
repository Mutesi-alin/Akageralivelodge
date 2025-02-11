import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Wifi, Users, Wind, Coffee, ArrowRight, Star, Bed, Square } from 'lucide-react';

const HotelRooms = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-neutral-900">
        <Image 
          src="/images/f.jpeg" 
          alt="Hotel interior" 
          layout="fill" // Automatically scales the image
          objectFit="cover" 
          className="opacity-60"
          priority // Ensures faster loading for important images
        />
        <div className="absolute inset-0">
          <div className="container mx-auto px-6 py-24">
            <div className="flex items-center gap-1 justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-sm text-center text-neutral-200 tracking-widest">
              AKAGERA LIVE LODGE
            </h2>
            <h1 className="text-4xl text-center text-white mt-4 font-serif">Rooms</h1>
          </div>
        </div>
      </div>

      {/* Room Cards */}
      <div className="container mx-auto px-6 py-12">
        <div className="space-y-24">
          {/* Saba Suite */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="p-8 md:w-1/2">
                <div className="text-amber-600 mb-2">112€ / Night</div>
                <h3 className="text-2xl font-serif mb-4">SABA SUITE</h3>
                <p className="text-neutral-600 mb-6">
                  Spacious, bright guestrooms with tasteful furnishing, wooden floor and
                  panoramic windows from the ceiling to the floor.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">1-3 Persons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Twin Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Free Wifi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">56 sqft room</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Breakfast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Air conditioning</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="text-neutral-500 text-sm flex items-center gap-1">
                    DETAILS <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-2 bg-amber-500 text-white text-sm rounded">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full rounded-3xl overflow-hidden">
              <Image 
                src="/images/e.jpeg" 
                alt="Saba Suite" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          </div>

          {/* Kaws Room */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="p-8 md:w-1/2">
                <div className="text-amber-600 mb-2">92€ / Night</div>
                <h3 className="text-2xl font-serif mb-4">KAWS Room</h3>
                <p className="text-neutral-600 mb-6">
                  Spacious, bright guestrooms with tasteful furnishing, wooden floor and
                  panoramic windows from the ceiling to the floor.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">1-4 Persons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Twin Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Free Wifi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">95 sqft Room</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Breakfast</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="text-neutral-500 text-sm flex items-center gap-1">
                    DETAILS <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-2 bg-amber-500 text-white text-sm rounded">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full rounded-3xl overflow-hidden">
              <Image 
                src="/images/d.jpeg" 
                alt="Kaws Room" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
