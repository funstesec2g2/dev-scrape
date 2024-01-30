import React, { useState } from 'react';
import { searchYoutubeByTitle } from '../../scrap/playstore/api'; // Replace with the correct path

const YoutubeSearch = () => {
  const [query, setQuery] = useState('');
  const [youtubeResults, setYoutubeResults] = useState([]);
  const [error, setError] = useState('');

  const handleYoutubeSearch = async () => {
    try {
      const youtubeResponse = await searchYoutubeByTitle(query);
      setYoutubeResults(youtubeResponse.video_info);
      setError('');
    } catch (error) {
      setError('Error fetching YouTube data');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleYoutubeSearch}>Search on YouTube</button>

      {/* Display YouTube results */}
      <div>
        <h2>YouTube Results</h2>
        {youtubeResults && (
          <div>
            <p>Title: {youtubeResults.title}</p>
            <p>Author: {youtubeResults.author}</p>
            <p>Video ID: {youtubeResults.video_id}</p>
          </div>
        )}
      </div>

      {/* Display error message if there's an error */}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default YoutubeSearch;
