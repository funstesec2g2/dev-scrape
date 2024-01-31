// FilmSearch.js

import React, { useState, useEffect } from 'react';
import { searchImdbByTitle } from './api'; // Replace with the actual path

const FilmSearch = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check local storage to set initial favorite state
    const favorites = JSON.parse(localStorage.getItem('filmFavorites')) || [];
    const isMovieFavorite = favorites.some((fav) => fav.title === movieInfo?.title);
    setIsFavorite(isMovieFavorite);
  }, [movieInfo]);

  const handleSearch = async () => {
    try {
      const result = await searchImdbByTitle(movieTitle);
      setMovieInfo(result.movie_info);
      setError(null);
    } catch (error) {
      setMovieInfo(null);
      setError('Error searching IMDb. Please try again.');
    }
  };

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('filmFavorites')) || [];

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav.title !== movieInfo.title);
      localStorage.setItem('filmFavorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const newFavorite = { title: movieInfo.title, posterPath: movieInfo.poster_path };
      const updatedFavorites = [...favorites, newFavorite];
      localStorage.setItem('filmFavorites', JSON.stringify(updatedFavorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mx-4 bg-white rounded-lg overflow-hidden shadow-md">
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Enter movie title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button
          className="bg-yellow-500 text-white rounded p-2 mt-2 w-full"
          onClick={handleSearch}
        >
          Search IMDb
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {movieInfo && (
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold mb-2">{movieInfo.title}</h2>
              <span
                className="cursor-pointer text-xl"
                role="img"
                aria-label="Favorite"
                onClick={handleToggleFavorite}
              >
                {isFavorite ? '❤️' : '🤍'}
              </span>
            </div>
            <p className="mb-2 text-gray-700">{movieInfo.overview}</p>
            <p className="mb-2 text-gray-700">
              Release Date:
              <span className="font-semibold"> {new Date(movieInfo.release_date).toLocaleDateString()}</span>
            </p>
            <img
              className="rounded-lg shadow-md w-full mt-4"
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmSearch;
