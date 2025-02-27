import React from 'react';
import { Review } from './type/reviews';
import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="relative flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full z-0"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-50 rounded-full opacity-50 z-0"></div>
      
      {/* Quote icon */}
      <div className="absolute top-3 right-3 text-blue-400 opacity-30 z-10">
        <Quote size={24} />
      </div>
      
      <div className="p-6 flex flex-col h-full z-10">
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16}
              className={`${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-200'}`} 
            />
          ))}
        </div>
        
        {/* Comment */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-700 italic leading-relaxed">"{review.comment}"</p>
        </div>
        
        {/* Customer info */}
        <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
          {review.avatarUrl && (
            <div className="mr-3 ring-2 ring-blue-100 rounded-full">
              <img 
                src={review.avatarUrl} 
                alt={review.customerName} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-bold text-gray-800">{review.customerName}</h4>
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;