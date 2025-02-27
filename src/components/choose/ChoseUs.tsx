
import {  Shield, Clock, Award, Truck, Headphones, RefreshCw } from 'lucide-react';
const ChoseUs = () => {
    return (
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-md">
        <div className="p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose CycleShop</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're committed to providing the best cycling experience with premium products and exceptional service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All our bicycles undergo rigorous quality testing to ensure durability and performance.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Truck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Enjoy free shipping on all orders over $500. Fast and secure delivery to your doorstep.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Headphones className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Support</h3>
              <p className="text-gray-600">Our team of cycling enthusiasts is always ready to help with any questions or concerns.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <RefreshCw className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">30-Day Returns</h3>
              <p className="text-gray-600">Not completely satisfied? Return your bicycle within 30 days for a full refund.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Selection</h3>
              <p className="text-gray-600">We carefully curate our collection to offer only the best bicycles from top brands.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lifetime Service</h3>
              <p className="text-gray-600">Enjoy lifetime maintenance service on all bicycles purchased from our shop.</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors duration-300">
              Learn More About Our Services
            </button>
          </div>
        </div>
      </section>
    );
};

export default ChoseUs;