import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false); // State to manage theme

  const fetchWeather = async () => {
    const API_KEY = '572e4deaf32b78a814f6c08de60caff1'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      setError(''); // Clear previous errors
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      setError('City not found or an error occurred.');
      setWeather(null);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-blue-100 text-gray-900'
      }`}
    >
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1 className="text-3xl font-bold mb-8">Weather App</h1>
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg p-6 w-11/12 sm:w-96">
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
        <WeatherDisplay weather={weather} error={error} />
      </div>
    </div>
  );
};


export default App;
