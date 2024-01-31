import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-img.png';
import { CCloseButton } from '@coreui/react';

function SendResetCode(props) {
  const [email, setEmail] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(false);
  const API = 'http://localhost:5500/auth/reset-password';
  const navigate = useNavigate();

  const handlePasswordResetRequest = async () => {
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Password reset code sent to the email');
        setVerificationStatus(true);

        // Use the useNavigate hook to navigate and pass email in state
        navigate('/forgotPassword', { state: { email } });
      }
    } catch (error) {
      console.error('Error during password reset request:', error);
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
                Password Reset Request
              </h2>

              <span className="text-sm text-white md:text-black">
                Enter your email, and we will send you a verification code.
              </span>
            </div>
            <div>
              {/* Input field for user's email */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-10 border rounded-md p-2 my-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Button to trigger password reset request */}
              <button
                onClick={handlePasswordResetRequest}
                className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500"
              >
                Send Verification Code
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

export default SendResetCode;
