import React from 'react';
import { Link } from 'react-router-dom';

const DashboardWelcome = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                    Welcome to the Bike Dashboard 🚴‍♂️
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                    Manage products, orders, users, and your profile—all from one place.
                </p>

                <div className="my-10">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3097/3097134.png"
                        alt="Dashboard Illustration"
                        className="mx-auto w-44 h-44 md:w-56 md:h-56"
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Link
                        to="/dashboard/add_product"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                    >
                        Add Product
                    </Link>
                    <Link
                        to="/dashboard/manage_orders"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
                    >
                        Manage Orders
                    </Link>
                    <Link
                        to="/dashboard/my_profile"
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                    >
                        My Profile
                    </Link>
                </div>

                <p className="text-sm text-gray-400 mt-10">
                    Need help? Contact support or check the documentation.
                </p>
            </div>
        </div>
    );
};

export default DashboardWelcome;

