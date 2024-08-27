// FilmSearch.js
import React, { useState, useEffect } from "react";
import { searchImdbByTitle } from "./api"; 

import "./film.css"; 

const FilmSearch = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("filmFavorites")) || [];
    const isMovieFavorite = favorites.some(
      (fav) => fav.title === movieInfo?.title
    );
    setIsFavorite(isMovieFavorite);
  }, [movieInfo]);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const result = await searchImdbByTitle(movieTitle);
      setMovieInfo(result.movie_info);
      setError(null);
    } catch (error) {
      setMovieInfo(null);
      setError("Error searching IMDb. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFavorite = () => {
    if (!movieInfo) {
      return; // Prevent toggling favorites if movieInfo is not available
    }
  
    const favorites = JSON.parse(localStorage.getItem("filmFavorites")) || [];
    const isMovieFavorite = favorites.some((fav) => fav.title === movieInfo.title);
  
    if (isMovieFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav.title !== movieInfo.title);
      localStorage.setItem("filmFavorites", JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const newFavorite = {
        title: movieInfo.title,
        posterPath: movieInfo.poster_path,
      };
      localStorage.setItem("filmFavorites", JSON.stringify([...favorites, newFavorite]));
    }
  
    setIsFavorite(!isMovieFavorite);
  };
  
  return (
    <div className="container mx-auto p-8">
      <div className="mb-6 flex items-center">
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter Topic"
          className="p-2 border rounded-l focus:outline-none focus:border-blue-500 text-gray-800 flex-grow"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 text-white rounded-r p-2 hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>

      <div className="mx-4 bg-white rounded-lg overflow-hidden shadow-md">
        {isLoading && (
          <div className="flex justify-center items-center p-8">
            <div className="loading-spinner"></div>
          </div>
        )}

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
                {isFavorite ? "❤️" : "🤍"}
              </span>
            </div>
            <p className="mb-2 text-gray-700">{movieInfo.overview}</p>
            <p className="mb-2 text-gray-700">
              Release Date:
              <span className="font-semibold">
                {" "}
                {new Date(movieInfo.release_date).toLocaleDateString()}
              </span>
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
