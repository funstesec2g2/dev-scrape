// SearchComponent.js

import React, { useState } from 'react';
import { searchWikipediaByTitle } from './api'; // Update the import

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      const wikipediaResults = await searchWikipediaByTitle(searchTerm);

      setSearchResults({
        wikipedia: wikipediaResults.page_info,
        
      });
      console.log(wikipediaResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults && (
        <div>
          <h2>Wikipedia Results</h2>
          <pre>{JSON.stringify(searchResults.wikipedia, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
