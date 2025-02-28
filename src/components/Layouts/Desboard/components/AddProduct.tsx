import React, { useState } from 'react';
import { Bike, DollarSign, Package, ShoppingCart, Tag, Type } from 'lucide-react';
import { useCreateProductMutation } from '../../../../redux/features/products/productApi';
import { z } from 'zod';
import { ProductValidation } from './productValidation/ProductValidation';
import { toast } from 'react-toastify';

// Import Zod schema for validation

interface ProductForm {
  name: string;
  brand: string;
  price: number;
  type: string;
  description: string;
  quantity: number;
  inStock: boolean;
}

const AddProduct = () => {
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    brand: '',
    price: 0,
    type: 'Road',
    description: '',
    quantity: 0,
    inStock: true,
  });

  const [createProduct, { isLoading, isError, isSuccess, error }] = useCreateProductMutation();
  const [formErrors, setFormErrors] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    // Convert price and quantity to numbers before validation
    const validatedFormData = {
      ...formData,
      price: parseFloat(formData.price.toString()), // Convert to number
      quantity: parseInt(formData.quantity.toString(), 10), // Convert to integer
    };
  
    try {
      ProductValidation.parse(validatedFormData);  // Validate form data
      const response = await createProduct(validatedFormData).unwrap();

       toast.success("Product deleted successfully",{position:'top-center'});
      
      // Reset form after success
      setFormData({
        name: '',
        brand: '',
        price: 0,
        type: 'Road',
        description: '',
        quantity: 0,
        inStock: true,
      });
      setFormErrors({});
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Handle validation errors
        const errors: { [key: string]: string } = {};
        err.errors.forEach((error) => {
          errors[error.path[0]] = error.message;
        });
        setFormErrors(errors);
      } else {
        console.error(err);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="w-full h-screen mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Bike className="h-6 w-6" />
            Add New Product
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Tag className="h-4 w-4" />
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formErrors.name && <p className="text-sm text-red-500">{formErrors.name}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Type className="h-4 w-4" />
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${formErrors.brand ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formErrors.brand && <p className="text-sm text-red-500">{formErrors.brand}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <DollarSign className="h-4 w-4" />
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className={`w-full px-3 py-2 border ${formErrors.price ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formErrors.price && <p className="text-sm text-red-500">{formErrors.price}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Package className="h-4 w-4" />
                Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${formErrors.type ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="Road">Road</option>
                <option value="Mountain">Mountain</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
              {formErrors.type && <p className="text-sm text-red-500">{formErrors.type}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className={`w-full px-3 py-2 border ${formErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formErrors.description && <p className="text-sm text-red-500">{formErrors.description}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <ShoppingCart className="h-4 w-4" />
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="0"
                className={`w-full px-3 py-2 border ${formErrors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formErrors.quantity && <p className="text-sm text-red-500">{formErrors.quantity}</p>}
            </div>

            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">In Stock</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Adding Product...' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
