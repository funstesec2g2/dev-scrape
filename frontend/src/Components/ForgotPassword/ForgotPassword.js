import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-img.png';
import { CCloseButton } from '@coreui/react';

function ForgotPassword() {
  const [verificationStatus, setVerificationStatus] = useState(false);
  const API = 'http://localhost:5500/auth/verify-resetcode';
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email || ''

  const handleVerification = async (verificationCode) => {
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verificationCode }),
      });

      if (response.ok) {
        console.log('The reset code is verified');
        setVerificationStatus(true);
        setError('');
        console.log(email, 'this is the email');
        navigate("/resetPassword", { state: { email } });

      } else {
        setError('Wrong code. Please check and try again.');
        setVerificationStatus(false);
      }
    } catch (error) {
      console.error('Error during verification:', error);
      setError('An error occurred. Please try again.');
      setVerificationStatus(false);
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
                Enter The Reset Code
              </h2>

              <span className="text-sm text-white md:text-black">
                Enter the password reset code we have sent you
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

              {/* Display error message */}
              {error && <p className="text-red-500">{error}</p>}

              {/* Button to trigger verification */}
              <button
                onClick={() => {
                  handleVerification(verificationCode);
                }}
                className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500"
              >
                Verify Reset Code
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

export default ForgotPassword;
