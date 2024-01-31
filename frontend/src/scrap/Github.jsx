// Github.jsx

import React, { useState } from 'react';
import { searchGithubReposByTopic } from './api';

const Github = () => {
  const [topic, setTopic] = useState('');
  const [repositories, setRepositories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const reposPerPage = 5;

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await searchGithubReposByTopic(topic);
      setRepositories(response.repositories);
      setError(null);
      setCurrentPage(1);
    } catch (error) {
      setRepositories(null);
      setError('Error fetching GitHub repositories.');
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil((repositories?.length || 0) / reposPerPage);
  const startIndex = (currentPage - 1) * reposPerPage;
  const endIndex = startIndex + reposPerPage;

  const displayedRepos = repositories?.slice(startIndex, endIndex) || [];

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-md shadow-md my-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">GitHub Repositories by Topic</h1>
      <div className="mb-6 flex items-center">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter Topic"
          className="p-2 border rounded-l focus:outline-none focus:border-blue-500 text-gray-800 flex-grow"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded-r p-2 hover:bg-blue-600 transition duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {loading && <p className="text-gray-500 mt-4">Loading...</p>}

      {repositories && repositories.length === 0 && (
        <p className="text-gray-500 mt-4">No repositories found for the given topic.</p>
      )}

      {repositories && repositories.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Repositories:</h2>

          {displayedRepos.map((repo) => (
            <div key={repo.id} className="bg-white border rounded-md p-4 mb-4">
              <h3 className="text-lg font-semibold text-blue-500 hover:underline">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.full_name}
                </a>
              </h3>
              <p className="text-gray-600 mb-2">{repo.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <p className='text-blue-400'>Stars: {repo.stargazers_count}</p>
                  <p className='text-blue-400'>Forks: {repo.forks_count}</p>
                  <p className='text-blue-400'>Issues: {repo.open_issues_count}</p>
                </div >
                <div className="flex items-center space-x-4">
                  <p className='text-blue-400'>Language: {repo.language}</p>
                  <p className='text-blue-400'>License: {repo.license?.name || 'N/A'}</p>
                  <p className='text-blue-400'>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}

          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              {[...Array(totalPages)].map((_, page) => (
                <span
                  key={page}
                  onClick={() => setCurrentPage(page + 1)}
                  className={`px-2 py-1 cursor-pointer hover:bg-gray-200 ${
                    page + 1 === currentPage ? 'bg-gray-300' : ''
                  }`}
                >
                  {page + 1}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Github;
