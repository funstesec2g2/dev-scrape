// WikipediaFavorites.jsx

import React, { useState, useEffect } from 'react';

const WikipediaFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Retrieve favorites from local storage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const wikipediaFavorites = storedFavorites.filter((fav) => fav.url.includes('wikipedia'));
    setFavorites(wikipediaFavorites);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Favorite Wikipedia Articles</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">You have no favorite Wikipedia articles yet.</p>
      ) : (
        <ul className="list-disc pl-6">
          {favorites.map((favorite, index) => (
            <li key={index} className="text-blue-500 mb-2">
              <a href={favorite.url} target="_blank" rel="noopener noreferrer">
                {favorite.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WikipediaFavorites;
