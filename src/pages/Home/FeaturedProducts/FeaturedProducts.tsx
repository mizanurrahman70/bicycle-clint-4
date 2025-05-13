// @ts-nocheck

import { Link } from 'react-router-dom';
import ProductCard from '../../../components/ProductsCard/ProductsCard';
import { useGetAllProductsQuery } from '../../../redux/features/products/productApi';

const FeaturedProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const products = data?.data;

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Bicycles</h2>
          <p className="text-xl text-gray-600">
            Discover our most popular and newest additions
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center text-gray-500 text-lg">Loading products...</div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-500 text-lg">Failed to load products.</div>
        )}

        {/* Product Grid */}
        {!isLoading && !error && Array.isArray(products) && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors duration-300">
              View all Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

