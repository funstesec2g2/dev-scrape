import React, { useState } from 'react';
import logo from '../assets/logo-img.png';
import { CCloseButton } from '@coreui/react';

function VerifyEmail(props) {
  const [verificationStatus, setVerificationStatus] = useState('');
  const API = 'http://localhost:5000/auth/verify'
  const [verificationCode, setVerificationCode] = useState(null);

  const handleVerification = async (verificationCode) => {
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ verificationCode }),
     
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseData = await response.json();
      console.log(responseData); 
      setVerificationStatus(responseData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 relative">
        <div className="hidden md:flex h-screen justify-center items-center bg-slate-900">
          <img src={logo} alt="logo-img" />
        </div>
        <div className="flex justify-center items-center h-screen bg-slate-900 md:bg-white">
          <div className="w-3/4 h-1/2 grid items-between">
            <div>
              <h2 className="text-xl font-bold h-10 text-white md:text-black">
                Verify Your Email
              </h2>

              <span className="text-sm text-white md:text-black">
                We have sent a verification code to your email.
              </span>
            </div>
            <div>
              {/* Input field for verification code */}
              <input
                type="text"
                placeholder="Enter Verification Code"
                className="w-full h-10 border rounded-md p-2 my-2"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />

              {/* Button to trigger verification */}
              <button
                onClick={handleVerification}
                className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500"
              >
                Verify Email
              </button>
            </div>
          </div>
        </div>
        <div className="close-btn absolute top-1 right-1 bg-black h-10 w-10 rounded-lg">
          <CCloseButton white />
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
