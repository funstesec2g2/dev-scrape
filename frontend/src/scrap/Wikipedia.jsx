// SearchComponent.js

import React, { useState } from 'react';
import { searchWikipediaByTitle } from './api';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await searchWikipediaByTitle(searchTerm);
      const wikipediaResults = response.page_info;

      setSearchResults({
        wikipedia: wikipediaResults,
      });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
       {/* Promotional Text */}
       <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 mb-8 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Explore and Discover Information</h2>
        <p className="text-lg">Your gateway to knowledge and insights from various sources.</p>
      </div>
      <div className="flex items-center justify-center mb-6">
  <input
    className="border rounded-l p-4 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 focus:outline-none focus:border-blue-500"
    type="text"
    placeholder="Enter search term"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button
    onClick={handleSearch}
    className="bg-blue-500 text-white rounded-r p-4 hover:bg-blue-600 transition duration-300 ease-in-out"
  >
    Search
  </button>
</div>

      {searchResults && (
        <div className="mt-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">
            Wikipedia Results
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4">{searchResults.wikipedia.title}</h3>

            <div className="mb-6">
  <h4 className="text-2xl font-semibold mb-4">Summary</h4>
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <p className="text-gray-900 mb-4 leading-relaxed">
      {searchResults.wikipedia.summary.substring(0, 1300)}
    </p>
    <p className="text-gray-600 mb-4 leading-relaxed">
      {searchResults.wikipedia.summary.substring(1300)}
    </p>
  </div>
</div>


            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-4">Sections</h4>
              <div className="flex overflow-x-auto">
                {searchResults.wikipedia.sections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 text-white px-4 py-2 mr-4 rounded-md cursor-pointer hover:bg-blue-600"
                  >
                    {section}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-6">
              <div className="flex items-center space-x-4">
                <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <a
                  href={`https://en.wikipedia.org/wiki/${searchResults.wikipedia.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  Read More on Wikipedia
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
