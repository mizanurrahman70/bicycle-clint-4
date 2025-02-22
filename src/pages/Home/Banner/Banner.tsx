import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=3540&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Discover Your Perfect Ride
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            From mountain trails to city streets, find the bicycle that matches your adventure
          </p>
          <div className="space-x-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;