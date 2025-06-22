# Ethiopian Weather App

A beautiful weather application that provides real-time weather information for Ethiopian cities using the OpenWeatherMap API with React and Axios.

## Live Demo

You can view the live application here: [https://abye12345.github.io/weather-app/](https://abye12345.github.io/weather-app/)

## Features

- 🌍 Real-time weather data for Ethiopian cities
- 🔍 Search functionality for any city
- 📱 Responsive design with modern UI
- 🌤️ Dynamic weather backgrounds
- 📊 Detailed weather information (temperature, humidity, wind speed, etc.)
- 🌅 Sunrise and sunset times
- 🎯 Quick access to popular Ethiopian cities
- 🔄 Retry mechanism for failed requests
- ⚡ Optimized API calls with Axios
- 🛡️ Better error handling and timeout management

## Setup Instructions

### 1. Get OpenWeatherMap API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to "My API Keys" section
4. Copy your API key

### 2. Configure Environment Variables

Create a `.env` file in the root directory (`weather_app/.env`) and add your API key:

```env
VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
```

**Important:** Replace `your_actual_api_key_here` with your actual OpenWeatherMap API key.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Popular Ethiopian Cities

The app includes quick access to these popular Ethiopian cities:

- Addis Ababa (Capital)
- Dire Dawa
- Mekelle
- Gondar
- Bahir Dar
- Jimma
- Dessie
- Hawassa
- Adama
- Jijiga
- Shashamane
- Bishoftu
- Arba Minch
- Hosaena
- Harar

## API Usage

The app uses the OpenWeatherMap Current Weather API with Axios:

- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Units:** Metric (Celsius)
- **Rate Limit:** 60 calls/minute for free tier
- **Timeout:** 10 seconds per request
- **HTTP Client:** Axios for better error handling and request management

## Benefits of Using Axios

- **Better Error Handling**: Automatic parsing of error responses
- **Request/Response Interceptors**: Easy to add global error handling
- **Timeout Management**: Built-in timeout configuration
- **Request Cancellation**: Ability to cancel ongoing requests
- **Automatic JSON Parsing**: No need to call `.json()` manually
- **Progress Monitoring**: Track upload/download progress
- **Request/Response Transformation**: Easy data transformation

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- Axios (HTTP client)
- OpenWeatherMap API
- React Router DOM

## Troubleshooting

### API Key Issues

- Make sure your API key is correctly added to the `.env` file
- Ensure the API key starts with `VITE_` prefix
- Check that your OpenWeatherMap account is activated

### City Not Found

- Verify the city name spelling
- Try using the English name of the city
- Some smaller cities might not be available in the API

### Network Issues

- The app includes automatic retry functionality
- Check your internet connection
- API requests timeout after 10 seconds

### Build Issues

- Run `npm install` to ensure all dependencies are installed
- Clear node_modules and reinstall if needed: `rm -rf node_modules && npm install`
