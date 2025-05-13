import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const DashboardLayout = () => {
  const user = useAppSelector(useCurrentUser);
  //@ts-ignore
  const isAdmin = user?.role;

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const commonLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive ? "bg-[#1f855a] text-white" : "hover:bg-[#1f855a] hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my_profile"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive ? "bg-[#1f855a] text-white" : "hover:bg-[#1f855a] hover:text-white"
            }`
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage_orders"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive ? "bg-[#1f855a] text-white" : "hover:bg-[#1f855a] hover:text-white"
            }`
          }
        >
          Manage Orders
        </NavLink>
      </li>
    </>
  );

  const adminLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/add_product"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive ? "bg-[#1f855a] text-white" : "hover:bg-[#1f855a] hover:text-white"
            }`
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage_users"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive ? "bg-[#1f855a] text-white" : "hover:bg-[#1f855a] hover:text-white"
            }`
          }
        >
          Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage_product"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive ? "bg-[#1f855a] text-white" : "hover:bg-[#1f855a] hover:text-white"
            }`
          }
        >
          Manage Product
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen container mx-auto">
      {/* Topbar (Mobile Only) */}
      <div className="md:hidden bg-[#1E3A8A] text-white p-4 flex justify-between items-center">
        <Link to="/dashboard">
          <h1 className="text-xl font-bold">Bike Dashboard</h1>
        </Link>
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="focus:outline-none"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-[#1E3A8A] text-white md:w-64 shadow-lg transition-all duration-300 ease-in-out z-20 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="p-6 border-b border-[#1f855a]">
          <Link to="/dashboard">
            <h1 className="text-2xl font-bold text-center hidden md:block">
              Bike Dashboard
            </h1>
          </Link>
        </div>
        <ul className="menu p-4 space-y-3">
          {(isAdmin === "admin" || isAdmin === "customer") && commonLinks}
          {isAdmin === "admin" && adminLinks}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
