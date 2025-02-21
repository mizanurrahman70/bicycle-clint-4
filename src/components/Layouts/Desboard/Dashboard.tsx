import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
const isAdmin ="admin"

  return (
    <div className="flex container mx-auto">
      <div className=" md:w-64 min-h-screen bg-[#27a072]">
        <div>
          <h1 className="text-2xl text-white text-center">Bi Cycle Dashboard</h1>
         
        </div>
        <ul className="menu space-y-2 ml-3 mt-3">
         
          {isAdmin  ? (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add_product">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="">My Products</NavLink>
              </li>{" "}
              <li>
                <NavLink to="">
                Manage users
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                Manage Orders
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add_product">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="t">My Products</NavLink>
              </li>
            </>
          )}
        



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