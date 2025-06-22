import React, { useState } from "react";
import axios from "axios";
// It's recommended to use environment variables for your API key
const API_KEY =
  import.meta.env.VITE_WEATHER_API_KEY || "0075de45dcbe406a8b290325252106";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

const View = () => {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchWeather = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: query,
        },
      });
      setWeatherData(response.data);
    } catch (err) {
      setError(
        "Could not fetch weather data. Please check the city name or your API key."
      );
      console.error(err);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setSelectedCity("");
  };

  const handleSelectChange = (e) => {
    const cityValue = e.target.value;
    setSelectedCity(cityValue);
    setCity(cityValue);
    if (cityValue) {
      fetchWeather(cityValue);
    } else {
      setWeatherData(null);
    }
  };

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] p-4 md:p-8 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center tracking-tight drop-shadow-lg">
              <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 text-transparent bg-clip-text">
                Weather Forecast
              </span>
            </h2>

            {/* Search Section */}
            <form onSubmit={handleSearch} className="mb-10 space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <input
                  type="text"
                  placeholder="Search any city of ethiopia or region..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full md:w-2/3 p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300 focus:outline-none transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className=" cursor-pointer w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Search
                </button>
              </div>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={handleSelectChange}
                  className="w-full p-4 rounded-xl bg-black text-white border border-white/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300 focus:outline-none transition-all shadow-inner appearance-none"
                >
                  <option value="">Select from popular cities...</option>
                  <option value="addis-ababa">Addis Ababa</option>
                  <option value="gondar">Gondar</option>
                  <option value="bahir-dar">Bahir Dar</option>
                  <option value="dessie">Dessie</option>
                  <option value="gojam">Gojjam</option>
                  <option value="semera">Semera</option>
                  <option value="mekelle">Mekelle</option>
                  <option value="dire-dawa">Dire Dawa</option>
                  <option value="wolkite">Wolkite</option>
                  <option value="hawassa">Hawassa</option>
                  <option value="jimma">Jimma</option>
                  <option value="harar">Harar</option>
                  <option value="shashamane">Shashamane</option>
                  <option value="arba-minch">Arba Minch</option>
                  <option value="dilla">Dilla</option>
                  <option value="hosanna">Hosanna</option>
                  <option value="debre markos">Debra Markos</option>
                  <option value="axum">Axum</option>
                  <option value="lalibela">Lalibela</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white text-lg">
                  ▼
                </span>
              </div>
            </form>

            {/* Weather Display Section */}
            {loading && (
              <div className="text-center text-white text-lg animate-pulse">
                Loading weather...
              </div>
            )}
            {error && (
              <div className="text-center text-red-400 font-semibold">
                {error}
              </div>
            )}
            {weatherData && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center shadow-xl border border-white/30">
                  <h3 className="text-2xl font-bold text-white mb-3 text-center flex flex-col items-center gap-1">
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="w-6 h-6 text-cyan-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71"
                        />
                      </svg>
                      {weatherData.location.name},{" "}
                      {weatherData.location.country}
                    </span>
                  </h3>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-5xl font-extrabold text-cyan-200 drop-shadow-lg">
                      {weatherData.current.temp_c}°C
                    </span>
                    <img
                      src={`https:${weatherData.current.condition.icon}`}
                      alt={weatherData.current.condition.text}
                      className="w-16 h-16 drop-shadow-md"
                    />
                  </div>
                  <p className="text-lg text-white mt-4 font-medium text-center">
                    {weatherData.current.condition.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
