import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const search = async (keyword) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?keyword=${keyword}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchImdbByTitle = async (movieTitle) => {
  try {
    const response = await axios.get(`${BASE_URL}/tmdb_search_title?movie_title=${movieTitle}`);
    return response.data;
  } catch (error) {
    console.error('Error searching IMDb:', error);
    throw error;
  }
};






export const searchWikipediaByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}//wikipedia_search_title?page_title=${title}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchYoutubeByTitle = async (videoTitle) => {
  try {
    const response = await axios.get(`${BASE_URL}/youtube_search_title?video_title=${videoTitle}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchGithubReposByTopic = async (topic) => {
  try {
    const response = await axios.get(`${BASE_URL}/github_search_topic?topic=${topic}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};