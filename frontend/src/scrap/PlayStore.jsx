// src/App.js

import React, { useState, useEffect } from "react";
import { search } from "./api";

const SearchApp = () => {
  const [keyword, setKeyword] = useState("");
  const [appDetails, setAppDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Check local storage to set initial favorite state
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);

    if (appDetails) {
      const isAppFavorite = storedFavorites.some(
        (fav) => fav.title === appDetails.title
      );
      setIsFavorite(isAppFavorite);
    }
  }, [appDetails]);

  const handleSearch = async () => {
    try {
      const response = await search(keyword);

      if (response && response.results) {
        setAppDetails(response.results);
      } else {
        console.error("Invalid API response structure:", response);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleToggleFavorite = () => {
    if (!appDetails) {
      return;
    }

    const updatedFavorites = [...favorites];
    const existingFavoriteIndex = updatedFavorites.findIndex(
      (fav) => fav.title === appDetails.title
    );

    if (existingFavoriteIndex !== -1) {
      // Remove from favorites
      updatedFavorites.splice(existingFavoriteIndex, 1);
    } else {
      // Add to favorites
      updatedFavorites.push({
        title: appDetails.title,
        icon: appDetails.icon,
        url: appDetails.url,
      });
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
  };

  const styles = {
    appContainer: "text-center p-8",
    card: "bg-white border rounded-lg shadow-md p-6 mt-8 mx-auto max-w-6xl relative overflow-hidden",
    title: "text-3xl font-bold mb-4 text-blue-600",
    description: "text-gray-800 mb-4 italic", // Updated description style
    input: "border rounded p-2 w-full focus:outline-none focus:border-blue-500",
    searchButton:
      "bg-red-500 text-white rounded p-2 mt-2 w-full hover:bg-red-600",
    reviewsContainer: "mt-4 text-left",
    reviewsList: "divide-y divide-gray-300",
    reviewItem: "py-2 text-lg font-semibold", // Updated review style
    pagination: "mt-4 flex justify-center",
    paginationItem: "px-2 py-1 cursor-pointer hover:bg-gray-200 rounded-full", // Added rounded styling
    playStoreLink: "text-blue-500 underline cursor-pointer block mt-4",
    logo: "w-12 h-12 mx-auto mb-4 rounded-full absolute top-0 left-0 right-0", // Adjusted logo position
    beautifulCard:
      "bg-gradient-to-br from-purple-300 to-pink-200 border rounded-lg shadow-md p-6 mb-4",
    appImage: "w-25 h-20 object-cover rounded-lg mx-auto mb-4", // Adjusted image width and height
  };

  const reviewsPerPage = 5;
  const totalReviews = appDetails?.comments?.length || 0;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;

  const displayedReviews =
    appDetails?.comments?.slice(startIndex, endIndex) || [];

  return (
    <div className="container w-9/12 mx-auto p-8 bg-gray-100 rounded-md shadow-md my-10">
      {/* {styles.appContainer} */}
      <img
        src={appDetails?.icon}
        alt={`${appDetails?.title} Icon`}
        className={styles.logo}
      />
      <h1 className={styles.title}>PlayStore</h1>

      <div className="mb-6 flex items-center">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter Keyword"
          className="p-2 border rounded-l focus:outline-none focus:border-blue-500 text-gray-800 flex-grow"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 text-white rounded-r p-2 hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>

      {/* <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button> */}

      {appDetails && (
        <div className={styles.card}>
          <h2 className={styles.title}>{appDetails.title}</h2>
          <div className={styles.beautifulCard}>
            <p className={styles.description}>{appDetails.description}</p>
          </div>

          <img
            src={appDetails.icon}
            alt={`${appDetails.title} Icon`}
            className={styles.appImage}
          />
          <h1>Logo</h1>

          <div className={styles.reviewsContainer}>
            <p className="text-xl font-bold mb-2">User Reviews:</p>
            {displayedReviews.map((review, index) => (
              <div key={index} className={styles.beautifulCard}>
                <p className={styles.reviewItem}>{`${
                  startIndex + index + 1
                }. ${review}`}</p>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.pagination}>
              {[...Array(totalPages)].map((_, page) => (
                <span
                  key={page}
                  onClick={() => handlePaginationClick(page + 1)}
                  className={`${styles.paginationItem} ${
                    page + 1 === currentPage ? "bg-gray-300" : ""
                  }`}
                >
                  {page + 1}
                </span>
              ))}
            </div>
          )}

          <a
            href={appDetails.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.playStoreLink}
          >
            View on Play Store
          </a>

          <button
            href="#"
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.favoriteIcon : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleToggleFavorite();
            }}
            style={{ textDecoration: "none", color: isFavorite ? "red" : "" }}
          >
            &#10084;
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchApp;
