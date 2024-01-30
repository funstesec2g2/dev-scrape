import React from 'react';

const SearchResults = ({ appDetails }) => {
  const { name, description, headerImage } = appDetails;

  return (
    <div>
      <h2 style={{ color: 'red', fontSize: '24px' }}>Search Results:</h2>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: 'red', fontSize: '20px' }}>{name}</h3>
        <p style={{ color: 'red', fontSize: '16px' }}>{description}</p>
        <img src={headerImage} alt={name} style={{ width: '100%', maxWidth: '300px', borderRadius: '5px' }} />
      </div>
    </div>
  );
};

export default SearchResults;
