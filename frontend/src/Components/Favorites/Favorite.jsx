// Favorites.jsx

import React, { useState, useEffect } from 'react';


const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Retrieve favorites from local storage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    console.log(storedFavorites);
  }, []);

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-md shadow-md my-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">You have no favorite videos yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((favorite, index) => (
            <div key={index} className="bg-white p-6 rounded-md border border-gray-300">
              <h2 className="text-lg font-semibold mb-2">{favorite.title}</h2>
              {/* <p className="text-sm text-gray-600 mb-2">Channel: {favorite.channel}</p> */}
              <a
                href={favorite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
             Link to the source
              </a>
            </div>
          ))}
        </div>
      )}

    
    </div>
  );
};

export default Favorites;
