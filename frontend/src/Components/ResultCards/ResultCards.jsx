import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ResultCards({ resultContent }) {
  const handleClick = (event) => {
    // if (event.target.classList.contains("icon")) {
    //   alert("Item removed from favorites");
    // } else {
    //   alert("Item added to favorites");
    // }
    event.target.classList.toggle("icon");
    event.target.classList.toggle("icon-active");
  };

  return (
    <div className="item-box" id={`result-${resultContent.id}`}>
      <div className="flex items-end justify-end">
        <FontAwesomeIcon
          className="icon"
          onClick={(event) => handleClick(event)}
          icon={faHeart}
        />
      </div>
      <div className="content text-start grid gap-4">
        <p>{resultContent.description}</p>
        <p>
          Link:{" "}
          <a
            className="text-blue-500 underline hover:text-purple-500"
            href={resultContent.html_url}
          >
            {resultContent.html_url}
          </a>
        </p>
      </div>
    </div>
  );
}
