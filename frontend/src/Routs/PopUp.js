import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopUp.css';
const PopUp = ({ message }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back in history, equivalent to clicking the browser's back button
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
