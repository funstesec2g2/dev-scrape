// FilmSearch.js

import React, { useState } from 'react';
import { searchImdbByTitle } from './api'; // Replace with the actual path

const FilmSearch = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);

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
            <h2 className="text-2xl font-bold mb-2">{movieInfo.title}</h2>
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
