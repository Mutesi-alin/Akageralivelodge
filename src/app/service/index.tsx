'use client'
import React from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const GallerySection: React.FC = () => {
  const images: GalleryImage[] = [
    { id: 1, src: '/images/a.jpeg', alt: 'Riad hallway with wooden railing' },
    { id: 2, src: '/images/b.jpeg', alt: 'Cozy seating area with arch' },
    { id: 3, src: '/images/c.jpeg', alt: 'Living room with candles' },
    { id: 4, src: '/images/d.jpeg', alt: 'Room with shelves and daybed' },
    { id: 5, src: '/images/f.jpeg', alt: 'Courtyard with plants' },
    { id: 6, src: '/images/g.jpeg', alt: 'Traditional architecture exterior' }
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-24">
          <p className="text-gray-500 uppercase tracking-wider mb-4">IMAGES & VIDEOS</p>
          <h1 className="text-5xl font-serif text-gray-900">Our Gallery</h1>
        </div>

        {/* Sub Header */}
        <div className="mb-12">
          <p className="text-gray-500 uppercase tracking-wider mb-4">IMAGES</p>
          <h2 className="text-4xl font-serif text-gray-900">Image Gallery</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;