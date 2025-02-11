import React from "react";
import Image from "next/image"; // Import Image from next/image
import { Wifi, Users, Wind, Coffee, ArrowRight, Star, Bed, Square } from "lucide-react";

const HotelRooms = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-neutral-900">
        <Image
          src="/images/f.jpeg"
          alt="Hotel interior"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-1 justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-sm md:text-base text-neutral-200 tracking-widest">
            AKAGERA LIVE LODGE
          </h2>
          <h1 className="text-3xl md:text-4xl text-white mt-4 font-serif">Rooms</h1>
        </div>
      </div>

      {/* Room Cards */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="space-y-24">
          {/* Room Card Component */}
          {[ 
            { title: "SABA SUITE", price: "112€", img: "/images/e.jpeg", persons: "1-3", size: "56 sqft", bed: "Twin Bed" },
            { title: "KAWS Room", price: "92€", img: "/images/d.jpeg", persons: "1-4", size: "95 sqft", bed: "Twin Bed" }
          ].map((room, index) => (
            <div key={index} className="relative flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Room Text Content */}
              <div className="p-6 md:p-8 w-full md:w-1/2">
                <div className="text-amber-600 mb-2">{room.price} / Night</div>
                <h3 className="text-2xl font-serif mb-4">{room.title}</h3>
                <p className="text-neutral-600 mb-6">
                  Spacious, bright guestrooms with tasteful furnishing, wooden floors, and panoramic windows.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">{room.persons} Persons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Free Wifi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">{room.size} Room</span>
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

              {/* Room Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image
                  src={room.img}
                  alt={room.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
