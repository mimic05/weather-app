import React from 'react';

const WeatherDisplay = ({ weather, error }) => {
  return (
    <div>
      {error && <p className="text-red-600 dark:text-red-400 text-center">{error}</p>}
      {weather && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="text-lg">
            Temperature: <span className="font-bold">{weather.main.temp}°C</span>
          </p>
          <p className="text-lg">
            Condition: <span className="capitalize">{weather.weather[0].description}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
