import React from "react";
import { Link } from "react-router-dom";
import Rain from "./Rain";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 sm:p-8 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 relative overflow-hidden">
      <Rain />
      <div className="text-center bg-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-md max-w-2xl w-full border border-white/20">
        <img
          src="https://www.shutterstock.com/image-illustration/3d-rendering-blue-umbrella-icon-600nw-2425193383.jpg"
          alt="Weather Icon"
          className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-6 rounded-full shadow-lg border-4 border-blue-200 object-cover bg-white/30"
        />
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow mb-3 tracking-tight">
          Ethiopian Regional Weather App
        </h1>
        <p className="text-gray-200 text-base sm:text-lg mb-10 font-medium">
          Get accurate weather forecasts for all regions of Ethiopia
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/view"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md outline-none"
          >
            View Weather
          </Link>
          <Link
            to="/learn"
            className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 focus:ring-4 focus:ring-gray-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md outline-none"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
