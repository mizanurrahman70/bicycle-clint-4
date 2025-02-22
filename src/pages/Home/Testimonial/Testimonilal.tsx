import React from 'react';

const reviews = [
  {
    id: 1,
    brand: "TrailBlazer",
    model: "Mountain Explorer",
    review: "Best mountain bike I've ever owned! Perfect for rough terrain.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    id: 2,
    brand: "SpeedKing",
    model: "Road Master",
    review: "Incredible speed and handling. A true performance machine!",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    id: 3,
    brand: "UrbanRider",
    model: "City Cruiser",
    review: "Comfortable and stylish. Perfect for city commuting.",
    rating: "⭐⭐⭐⭐½"
  },
  {
    id: 4,
    brand: "TrailBlazer",
    model: "Mountain Explorer Pro",
    review: "Handles any trail with ease. Exceptional build quality!",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    id: 5,
    brand: "SpeedKing",
    model: "Road Master Elite",
    review: "Professional grade performance. Worth every penny!",
    rating: "⭐⭐⭐⭐⭐"
  }
];

const Testimonilal = () => {
    return (
        <div className="bg-gray-900 py-8 overflow-hidden">
          <div className="relative" aria-label="Reviews carousel">
            <div className="flex animate-marquee whitespace-nowrap">
              {(reviews?.length ? [...reviews, ...reviews] : []).map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="mx-4 max-w-xs sm:max-w-md md:max-w-lg bg-white rounded-lg p-6 shadow-lg"
                >
                  <div className="mb-2">
                    <h3 className="font-bold text-gray-900">{review.brand}</h3>
                    <p className="text-gray-600">{review.model}</p>
                  </div>
                  <p className="text-gray-700 mb-2 break-words">
                    &quot;{review.review}&quot;
                  </p>
                  <p className="text-yellow-400">{review.rating}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
};

export default Testimonilal;