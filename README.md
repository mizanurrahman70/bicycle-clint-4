# Bicycle Store Application

**Bicycle Store**

**Live URL:** [Bicycle Store](https://bi-cycle-client-six.vercel.app/)
**Live URL:** [Back end Repo]([https://bi-cycle-client-six.vercel.app/](https://github.com/mizanurrahman70/bicycle-server-4))

## Overview

The Bicycle Store is a user-friendly, responsive e-commerce platform designed to showcase bicycles, handle user registrations, provide secure authentication, and manage product inventories. Users can register, log in, and purchase bicycles, while admins can manage users, products, and orders with role-based access control.

## Main Functionalities

### 1. User Registration & Authentication (Role-Based)

**Secure Registration and Login:**
- Users can register by providing their name, email, and password.
- Default user role is "customer." Admin roles can be updated manually.
- Passwords are securely hashed before being stored in the database.

**JWT (JSON Web Token):**
- A JWT token is generated upon login to authenticate the user.
- The token is stored in local storage to maintain user sessions.
- Logout: The token is removed from local storage upon logout, and users are redirected to the login page.

### 2. Public Routes

**Home Page:**
- **Navbar:** Includes logo, navigation items, and buttons for login/signup.
- **Banner:** Displays special offers or features using a carousel.
- **Featured Bicycles:** Shows up to 6 featured bicycles with a "View All" button redirecting to the All Bicycles Page.
- **Extra Section:** Contains content like testimonials.
- **Footer:** Includes links, social media icons, and contact details.

**All Bicycles Page:**
- **Search Functionality:** Search by brand, name, or category.
- **Filters:** Price range, model, brand, category, and availability filters.
- **Dynamic Results:** Updates results based on selected filters or search queries.
- **Bicycle Cards:** Displays bicycle details, including name, brand, price, and category with a "View Details" button.

**Bicycle Details Page:**
- Displays the bicycle image and specifications.
- A "Buy Now" button redirects to the checkout page.

**About Page:**
- A page describing the bicycle shop's mission and other relevant information.

### 3. Private Routes

**Checkout Page:**
- **Order Process:** Users can order bicycles, ensuring that the quantity ordered does not exceed available stock.
- **Order Form:** Includes product details, user information, and payment method.
- **Payment Integration:** Supports SurjoPay, Stripe, or any other chosen payment gateway.
- **Order Confirmation:** Includes an "Order Now" button to finalize the purchase.

**Dashboard (Role-Based Access):**
- **Admin Dashboard:** Manage users, products (CRUD), and orders (CRUD).
- **User Dashboard:** View orders and manage profile settings. Users can update passwords (requiring the current password for security).

## UI/UX Design

- **Responsive Design:** The application is fully responsive, ensuring optimal performance on all screen sizes.
- **Error Handling:** Provides user-friendly error messages for login failures, registration issues, or failed operations.
- **Loading States:** Displays loaders or spinners during API calls like login or data fetching.
- **Toasts:** Notify users of actions such as "Login successful" or "Order placed."



## Installation and Setup

To run the project locally, follow these steps:

**Clone the repository:**

```bash
git clone <repository_url>
cd <project_folder>
npm install
npm start

### Instructions

1. **Save the Content:** Save the above content into a file named `README.md` in the root directory of your project.
2. **Update Placeholders:** Replace `<repository_url>` and `<project_folder>` with the actual URL and folder name of your project.
3. **Review and Customize:** Review the content to ensure it accurately reflects your project's features and setup instructions. Customize any sections as needed.

This `README.md` file provides a comprehensive overview of your Bicycle Store Application, making it easier for users and developers to understand and set up your project.

