import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen w-full relative">
      <nav className="relative z-20 bg-gray-800/80 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white hover:text-gray-300 font-semibold text-xl"
          >
            Ethiopian Weather
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-gray-300 font-medium">
              Home
            </Link>
            <Link
              to="/view"
              className="text-white hover:text-gray-300 font-medium"
            >
              View Weather
            </Link>
          </div>
        </div>
      </nav>
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
