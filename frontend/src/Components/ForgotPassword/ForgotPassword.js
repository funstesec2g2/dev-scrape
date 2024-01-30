import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo-img.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // TODO: Add error message to display if the email is not found in the database. 
  const API = 'http://localhost:5000/auth/forgot-password'; 

  const handleSendPassword = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
       
        navigate('/checkYourEmail');
      } else {
        
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
     
    }
  };

  return (
    <>
      {/* your existing JSX */}
      <div className="flex flex-col gap-5">
        {/* email text box */}
        <input
          type="text"
          placeholder="Email"
          className="md:border-2 md:border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>

        {/* send button */}
        <button
          className="md:bg-slate-900 bg-blue-900 hover:bg-blue-700 active:bg-blue-500 text-white px-4 rounded transition-colors duration-300 ease-in-out py-3"
          onClick={handleSendPassword}
        >
          Send
        </button>
        <div className='text-red-800'>{errorMessage}</div>

        {/* back to login button */}
        <button
          className="md:border md:border-slate-900 bg-blue-900 md:bg-white active:bg-blue-500 rounded px-4 hover:bg-blue-700 hover:text-white md:text-black text-white transition-colors duration-300 ease-in-out py-3"
          onClick={() => navigate('/login')}
        >
          Back to Login
        </button>
      </div>
    </>
  );
};

export default ForgotPassword;
