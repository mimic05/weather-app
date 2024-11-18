import React from 'react';
import SearchLogo from './SearchLogo';

const SearchBar = ({ city, setCity, fetchWeather }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <div className='flex flex-row'>
            <input type="text" placeholder="Enter city" value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded-l-full 
                px-4 py-2 w-full sm:w-auto flex-grow bg-gray-50 dark:bg-gray-700 
                text-gray-900 dark:text-gray-100"/>

            <button
                onClick={city !== "" ? fetchWeather : true}
                className="bg-blue-600 text-white px-4 py-2 
                rounded-r-full hover:bg-blue-700 dark:bg-blue-500 
                dark:hover:bg-blue-600 transition duration-300">
                <SearchLogo />
            </button>
        </div>
    </div>
  );
};

export default SearchBar;
