import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import AllProducts from "../pages/AllProducts/AllProducts";
import About from "../pages/About/About";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Dashboard from "../components/Layouts/Desboard/Dashboard";
import AddProduct from "../components/Layouts/Desboard/components/AddProduct";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <AllProducts />
            },
            {
                path: '/about_us',
                element: <About />
            },
            {
                path: '/products/:id',
                element: <ProductDetails />
            }
        ]
    },
    // Auth routes
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    // Dashboard route
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/add_product',
                element: <AddProduct />
            },
        ] // Keep this if you plan to add nested routes inside Dashboard
    }
]);
export default router;