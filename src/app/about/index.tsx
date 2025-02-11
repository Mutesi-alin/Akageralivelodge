

import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <div id='about' className="w-full max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl  text-yellow mb-16 text-center">About Us</h1>

      <div className="flex flex-wrap gap-6">
       
        <div className="relative w-full md:w-[45%]">

          <div className="relative w-full h-[300px] mb-6">
            <Image
              src="/images/about 2.jpeg"
              alt="Team collaboration"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 668px) 100vw, 45vw"
            />
          </div>
          
         
          <div className="relative w-[80%] h-[200px] ml-auto -mt-12">
            <Image
              src="/images/lion.jpeg"
              alt="Modern building"
              fill
              className="object-cover rounded-2xl shadow-lg"
              sizes="(max-width: 868px) 80vw, 35vw"
            />
          </div>
        </div>

        <div className="flex-1">           
  <div className="bg-white rounded-3xl p-9 border border-teal-600 shadow-sm">             
    <p className="text-gray-800 mb-6">               
      Akagera Live Lodge (<span className="font-semibold">ALL</span>) is a stunning safari lodge nestled in the heart of 
      Akagera National Park, Rwanda. We offer an immersive wildlife experience combined with luxurious accommodation 
      and exceptional service.
    </p>                          

    <p className="text-gray-800 mb-6">               
      Our lodge features three types of accommodation: {' '}               
      <span className="text-teal-600">Luxury Tented Suites</span>, {' '}               
      <span className="text-teal-600">Family Cottages</span>, and {' '}               
      <span className="text-teal-600">Premium Safari Rooms</span>.             
    </p>                          

    <p className="text-gray-800">               
      Akagera Live Lodge is located on the eastern edge of Rwanda, overlooking the scenic landscapes of 
      Akagera National Park, just a 2.5-hour drive from Kigali. Each accommodation option offers stunning views 
      of the savannah and lake.
    </p>           
  </div>         
</div>
      </div>
    </div>
  );
};

export default AboutUsSection;