import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [selectedWebsite, setSelectedWebsite] = useState("");
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.target.classList.toggle("icon");
    event.target.classList.toggle("icon-active");
  };

  const handleWebsiteChange = (event) => {
    setSelectedWebsite(event.target.value);
  };

  useEffect(() => {
    // Redirect to the selected website page when the selectedWebsite changes
    navigate(`/${selectedWebsite.toLowerCase()}`);
  }, [selectedWebsite, navigate]);

  return (
    <>
      <main className="flex flex-wrap justify-center items-center flex-col md:flex-row">
        <div className="md:col-span-4 col-span-12 sidebar">
          <div className="w-9/12 m-auto">
            <h2 className="my-5 text-white">Choose the website to scrape</h2>
            <div className="dropdown text-black text-center">
              <select
                name="website"
                className="decorated p-2 rounded-xl w-full text-center"
                id="website"
                value={selectedWebsite}
                onChange={handleWebsiteChange}
              >
                <option value="">Select a website</option>
                <option value="GitHub">GitHub</option>
                <option value="YouTube">YouTube</option>
                <option value="Play Store">Play Store</option>
                <option value="Wikipedia">Wikipedia</option>
                <option value="Film">Film</option>
              </select>
            </div>
          </div>

          <div className="w-9/12 m-auto mt-10">
          
            <div className=" text-white text-center">
              <p className="text-lg">
                Welcome to our website! Discover amazing content and explore the latest trends.
              </p>
              <p className="text-lg mt-4">
                Join us on a journey of knowledge and entertainment.
              </p>
            </div>
          </div>

          <div className="w-100 h-1 line mb-5 mt-10"></div>

          <div className="suggestions-container grid md:grid-cols-1 grid-cols-2 ">
            {/* Suggestions content (if any) goes here */}
          </div>
        </div>

      
         
   

<div className="result-box flex flex-col items-center p-7 w-10/12 rounded-3xl">
  <div className="cards-container flex flex-wrap justify-around">
    {/* First Row */}
    <div className="card bg-white-500 text-white p-5 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-bold mb-2">GitHub</h3>
      <p>
        GitHub is a platform where developers can collaborate on projects, share code, and build amazing software together.
      </p>
    </div>
    <div className="card bg-blue-500 text-white p-5 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-bold mb-2">YouTube</h3>
      <p>
        YouTube is a video-sharing platform where users can discover, watch, and upload videos on various topics and interests.
      </p>
    </div>
    <div className="card bg-blue-500 text-white p-5 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-bold mb-2">Play Store</h3>
      <p>
        Play Store is Google's official app store where users can find and download a wide range of Android applications for their devices.
      </p>
    </div>

    {/* Second Column */}
    <div className="card bg-blue-500 text-white p-5 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-bold mb-2">Wikipedia</h3>
      <p>
        Wikipedia is a free online encyclopedia where users can find information on various topics contributed by volunteers from around the world.
      </p>
    </div>
    <div className="card bg-blue-500 text-white p-5 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-bold mb-2">Film</h3>
      <p>
        Explore the world of cinema and discover information about your favorite movies, actors, and directors on our Film website.
      </p>
    </div>
  </div>
</div>


      </main>
    </>
  );
};

export default HomePage;
