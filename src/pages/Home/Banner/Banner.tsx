import React from 'react';
import { ArrowRight, ShoppingCart, Award, Truck } from 'lucide-react';

interface BannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  title = "Ride Into Adventure",
  subtitle = "Premium bicycles for every journey, crafted with precision and passion",
  ctaText = "Shop Collection",
  onCtaClick = () => {},
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-20" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500 rounded-full opacity-20" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">{subtitle}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[{ Icon: Award, text: "Premium Quality" }, { Icon: Truck, text: "Free Shipping" }].map(({ Icon, text }, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-blue-700 bg-opacity-40 p-2 rounded-full mr-3">
                    <Icon className="w-5 h-5 text-blue-200" />
                  </div>
                  <span className="text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onCtaClick}
              className="group flex items-center bg-white text-blue-900 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-blue-50 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {ctaText}
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Premium bicycle"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  <span className="text-white font-bold">New Collection 2025</span>
                </div>
              </div>
            </div>

            {/* Price Tag */}
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-blue-900 rounded-full w-20 h-20 flex flex-col items-center justify-center transform rotate-12 shadow-lg z-20">
              <span className="text-xs font-bold">FROM</span>
              <span className="text-xl font-bold">$899</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
