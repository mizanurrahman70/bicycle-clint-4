Bicycle Store Application
Overview
The Bicycle Store application is a user-friendly, responsive e-commerce platform designed to showcase bicycles, handle user registrations, provide secure authentication, and manage product inventories. This project allows users to register, log in, and purchase bicycles. Admins can manage users, products, and orders with role-based access control.

Live URL: https://bi-cycle-client-six.vercel.app/

Main Functionalities
1. User Registration & Authentication (Role-Based)
Secure Registration and Login:

Users can register by providing their name, email, and password. Default user role is "customer."
Admin roles can be updated manually.
Passwords are securely hashed before being stored in the database.
Users log in using their email and password.
JWT (JSON Web Token):

A JWT token is generated upon login to authenticate the user.
The token is stored in local storage to maintain user sessions.
Logout:

The token is removed from local storage upon logout, and users are redirected to the login page.
2. Public Routes
Home Page
Navbar: Includes logo, navigation items, and buttons for login/signup.
Banner: Displays special offers or features using a carousel.
Featured Bicycles: Shows up to 6 featured bicycles with a "View All" button redirecting to the All Bicycles Page.
Extra Section: Contains content like testimonials.
Footer: Includes links, social media icons, and contact details.
All Bicycles Page
Search Functionality: Search by brand, name, or category.
Filters: Price range, model, brand, category, and availability filters.
Dynamic Results: Updates results based on selected filters or search queries.
Bicycle Cards: Displays bicycle details, including name, brand, price, and category with a "View Details" button.
Bicycle Details Page
Displays the bicycle image and specifications.
A "Buy Now" button redirects to the checkout page.
About Page
A page describing the bicycle shop's mission and other relevant information.
3. Private Routes
Checkout Page
Order Process: Users can order bicycles, ensuring that the quantity ordered does not exceed available stock.
Order Form: Includes product details, user information, and payment method.
Payment Integration: Supports SurjoPay, Stripe, or any other chosen payment gateway.
Order Confirmation: Includes an "Order Now" button to finalize the purchase.
Dashboard (Role-Based Access)
Admin Dashboard: Manage users, products (CRUD), and orders (CRUD).
User Dashboard: View orders and manage profile settings. Users can update passwords (requiring the current password for security).
UI/UX Design
Responsive Design: The application is fully responsive, ensuring optimal performance on all screen sizes.
Error Handling: Provides user-friendly error messages for login failures, registration issues, or failed operations.
Loading States: Displays loaders or spinners during API calls like login or data fetching.
Toasts: Notify users of actions such as "Login successful" or "Order placed."
Optional Recommendation Functionalities
User Side
Bicycle Comparison Tool: Allows users to compare up to three bicycles side by side, showing specifications, pricing, and features.
Admin Side
Sales Dashboard: A visual summary of sales data using charts (bar, line, pie).
Total Sales Revenue: Shows total revenue for a selected period.
Units Sold: Displays the number of bicycles sold.
Top-Selling Bicycles: Highlights the most popular models.
Backend Requirements
Database (MongoDB)
Users: Includes roles such as "customer" and "admin."
Bicycles: Contains attributes like name, brand, price, model, and stock.
Orders: Links users to products, tracks total price, and status.
Authentication
Implements user registration, login, JWT token management, and logout.
Passwords are securely hashed, and sessions are handled using JWT.
Product Management
Implements CRUD operations for bicycles (create, read, update, delete).
Order Management
Executes CRUD operations for orders while ensuring stock levels before placing an order.
Payment Integration
Supports SurjoPay, AmaarPay, SSLCommerz, or Stripe for payment processing.
Error Handling
Consistent and user-friendly error messaging for login attempts, out-of-stock bicycles, and more.
Additional Changes
Backend APIs support pagination for bicycle listings and order retrieval.
Authentication middleware protects private routes like checkout and the dashboard.
Installation and Setup
To run the project locally, follow these steps:

Clone the repository:

bash
Copy
Edit
git clone <repository_url>
Install dependencies: Navigate to the project directory and install the dependencies:

bash
Copy
Edit
cd <project_folder>
npm install
Setup environment variables: Ensure you have all the required environment variables (like API keys, database connection strings) in a .env file.

Run the application:

bash
Copy
Edit
npm start