// src/App.js
import React, { useState } from 'react';
import { search } from './api';

const SearchApp = () => {
  const [keyword, setKeyword] = useState('');
  const [appDetails, setAppDetails] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await search(keyword);
      console.log('API Response:', response);

      if (response && response.results) {
        setAppDetails(response.results);
        console.log('Mapped Results:', response.results);
      } else {
        console.error('Invalid API response structure:', response);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const styles = {
    appContainer: {
      textAlign: 'center',
      padding: '20px',
    },
    card: {
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      marginTop: '20px',
      maxWidth: '400px',
      margin: '0 auto',
    },
    playStoreLink: {
      color: 'blue',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    reviews: {
      marginTop: '20px',
      textAlign: 'left',
    },
  };

  return (
    <div style={styles.appContainer}>
      <h1>PlayStore</h1>
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button style={{ backgroundColor: 'red' }} onClick={handleSearch}>
        Search
      </button>

      {appDetails && (
        <div style={styles.card}>
          <h3>{appDetails.title}</h3>
          <p>{appDetails.description}</p>
          <img src={appDetails.icon} alt={`${appDetails.title} Icon`} />

          <p style={styles.reviews}>User Reviews:</p>
          <ul style={styles.reviews}>
            {appDetails.comments &&
              appDetails.comments.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
          </ul>

          <p>
            <a
              style={styles.playStoreLink}
              href={appDetails.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Play Store
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchApp;
