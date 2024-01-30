import React, { useState } from 'react';
import { searchImdbByTitle } from './api';  // Replace with the actual path

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
    <div>
      <input
        type="text"
        placeholder="Enter movie title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      
      />
      <button 
      
      onClick={handleSearch}   style={{color:'yellow'}}>Search IMDb</button>

      {error && <p>{error}</p>}

      {movieInfo && (
        <div>
          <h2>{movieInfo.title}</h2>
          <p>{movieInfo.overview}</p>
          <p>Release Date: {movieInfo.release_date}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={movieInfo.title} />
        </div>
      )}
    </div>
  );
};

export default FilmSearch;
