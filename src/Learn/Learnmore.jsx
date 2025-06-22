import React from "react";
import reactLogo from "../assets/react.svg";
const Learnmore = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white/90 rounded-xl shadow-lg mt-10 mb-10">
      <div className="flex items-center mb-6">
        <img src={reactLogo} alt="React Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-3xl font-bold text-gray-800">
          Learn More About Ethiopian Weather App
        </h1>
      </div>
      <p className="text-lg text-gray-700 mb-6">
        The{" "}
        <span className="font-semibold text-blue-600">
          Ethiopian Weather App
        </span>{" "}
        is a modern, user-friendly application designed to provide real-time
        weather information for cities across Ethiopia. Whether you're planning
        a trip, checking the weather for your hometown, or just curious about
        the climate in different regions, this app has you covered!
      </p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🌟 Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Real-time weather data for Ethiopian cities</li>
          <li>Search for any city with instant results</li>
          <li>Responsive design for all devices</li>
          <li>Dynamic backgrounds that reflect current weather</li>
          <li>Detailed info: temperature, humidity, wind speed, and more</li>
          <li>Sunrise and sunset times</li>
          <li>Quick access to popular Ethiopian cities</li>
          <li>Retry mechanism for failed requests</li>
          <li>Optimized and secure API calls</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🛠️ Technologies Used
        </h2>
        <div className="flex flex-wrap gap-4 mt-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            React 19
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            Vite
          </span>
          <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
            Tailwind CSS
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Axios
          </span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
            OpenWeatherMap API
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            React Router DOM
          </span>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🚀 Why Use This App?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Stay updated with accurate, real-time weather data</li>
          <li>Plan your day or travels with confidence</li>
          <li>Enjoy a visually appealing and easy-to-use interface</li>
          <li>
            Access weather info for both major and smaller Ethiopian cities
          </li>
          <li>Experience fast performance and reliable error handling</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🌍 Popular Ethiopian Cities
        </h2>
        <p className="text-gray-700 mb-2">
          Quickly check the weather in these cities:
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Addis Ababa",
            "Dire Dawa",
            "Mekelle",
            "Gondar",
            "Bahir Dar",
            "Jimma",
            "Dessie",
            "Hawassa",
            "Adama",
            "Jijiga",
            "Shashamane",
            "Bishoftu",
            "Arba Minch",
            "Hosaena",
            "Harar",
          ].map((city) => (
            <span
              key={city}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm font-medium"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🔒 API & Security
        </h2>
        <p className="text-gray-700">
          All weather data is fetched securely from the OpenWeatherMap API. Your
          API key is kept safe using environment variables, and the app is
          optimized for both speed and reliability.
        </p>
      </div>
      <div className="text-center mt-8">
        <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow font-semibold text-lg">
          Thank you for using the Ethiopian Weather App!
        </span>
      </div>
    </div>
  );
};

export default Learnmore;
