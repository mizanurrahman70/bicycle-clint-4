import React, { useRef, useEffect, useState } from 'react';
import { Review } from '../types/review';
import ReviewCard from './ReviewCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewMarqueeProps {
  reviews: Review[];
  speed?: number;
  autoScroll?: boolean;
}

const ReviewMarquee: React.FC<ReviewMarqueeProps> = ({ 
  reviews, 
  speed = 30,
  autoScroll = true
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  // Handle scroll position detection
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    // Show/hide navigation arrows based on scroll position
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };
  
  // Auto-scrolling functionality
  useEffect(() => {
    if (!autoScroll || isPaused) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let animationId: number;
    let startTime: number | null = null;
    
    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!container) return;
      
      const elapsed = timestamp - startTime;
      container.scrollLeft += 0.5; // Smooth scroll speed
      
      // Reset scroll position when reaching the end to create infinite effect
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
        container.scrollLeft = 0;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [autoScroll, isPaused]);
  
  // Scroll by a specific amount
  const scrollBy = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: amount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div 
      className="relative w-full bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-8 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left scroll button */}
      {showLeftArrow && (
        <button 
          onClick={() => scrollBy(-300)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-blue-600 hover:bg-blue-50 transition-all duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      
      {/* Right scroll button */}
      {showRightArrow && (
        <button 
          onClick={() => scrollBy(300)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-blue-600 hover:bg-blue-50 transition-all duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}
      
      {/* Scroll container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-2 snap-x scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        {reviews.map((review) => (
          <div 
            key={review.id}
            className="flex-shrink-0 w-[320px] snap-start"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
      
      {/* Scroll indicator dots */}
      <div className="flex justify-center mt-6 gap-1.5">
        {Array.from({ length: Math.min(5, Math.ceil(reviews.length / 2)) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = index * 640;
              }
            }}
            className="w-2 h-2 rounded-full bg-blue-200 hover:bg-blue-400 transition-colors duration-200"
            aria-label={`Go to review group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewMarquee;