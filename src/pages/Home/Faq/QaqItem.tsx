import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  category: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0 flex items-center">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-blue-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-4 pt-0">
          <div className="text-sm text-gray-500 mb-3">
            Category: <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">{category}</span>
          </div>
          <div className="prose prose-sm max-w-none text-gray-600">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;