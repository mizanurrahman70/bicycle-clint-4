import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";



const Dashboard = () => {

const user = useSelector(useCurrentUser)
// const isAdmin =user?.role 
const isAdmin = 'admin'
  return (
    <div className="flex container mx-auto">
      <div className=" md:w-64 min-h-screen bg-[#27a072]">
        <div>
          <h1 className="text-2xl text-white text-center">Bi Cycle Dashboard</h1>
         
        </div>
        <ul className="menu space-y-2 ml-3 mt-3">
        {(isAdmin === 'admin' || isAdmin === "user") && (
            <>
               <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my_profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my_products">My Products</NavLink>
              </li>{" "}
            </>
          )}
          {isAdmin === 'admin' && (
            <>
              <li>
                <NavLink to="/dashboard/add_product">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage_users">
                Manage users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage_orders">
                Manage Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage_product">
                Manage Product
                </NavLink>
              </li>
            </>
          ) }
        
        



          <div className="divider divider-horizontal"></div>
        </ul>
      </div>
      <div className="md:flex-1 p-8 container mx-auto">
        <Outlet></Outlet>
      </div>
     
    </div>
  );
};

export default Dashboard;