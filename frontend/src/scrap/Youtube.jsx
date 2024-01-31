// Updated Youtube.jsx

import React, { useState } from 'react';
import { searchYoutubeByTitle } from './api';

const Youtube = () => {
  const [videoTitle, setVideoTitle] = useState('');
  const [youtubeInfo, setYoutubeInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await searchYoutubeByTitle(videoTitle);
      setYoutubeInfo(response.video_info);
      setError(null);
    } catch (error) {
      setYoutubeInfo(null);
      setError('Error fetching YouTube info.');
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-8 bg-gray-100 rounded-md shadow-md my-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Discover YouTube Videos</h1>
      <p className="text-gray-600 mb-6">
        Welcome to our YouTube Video Information tool! Enter the title of a video, and we'll provide
        you with details like the author, channel, likes, and a convenient download link.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-800">Enter Video Title:</label>
        <input
          type="text"
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
          className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-gray-500 text-gray-800"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {youtubeInfo && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Title: {youtubeInfo.title}</h2>
          <p className="text-gray-600 mb-2">Author: {youtubeInfo.author}</p>
          <p className="text-gray-600 mb-2">Channel: {youtubeInfo.channel}</p>
          <p className="text-gray-600 mb-2">Likes: {youtubeInfo.likes}</p>
          <div className="bg-white rounded border border-gray-300 p-4">
            <p className="text-gray-600">
              Download Link:{' '}
              <a
                href={youtubeInfo.url}
                className="text-blue-500 underline hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {youtubeInfo.url}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Youtube;
