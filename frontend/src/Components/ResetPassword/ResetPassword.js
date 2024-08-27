import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-img.png';

export default function ResetPassword() {
  const location = useLocation();
  const email = location?.state?.email || '';
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [message, setMessage] = useState('');

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{8,}$/;

    if (!password) {
      setPasswordError('Password is required.');
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password should contain at least one digit, one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.'
      );
    } else {
      setPasswordError('');
    }
  };

  const handleResetPassword = async () => {
    // Validate password and confirmPassword
    validatePassword();

    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5500/auth/reset-password-newpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Password reset successfully');
        setMessage('Password reset successfully');
      } else {
        console.error('Error resetting password:', response.statusText);
      }
    } catch (error) {
      console.error('Error resetting password:', error.message);
      
      setPasswordError('Error resetting password');
    }
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden md:flex h-screen justify-center items-center bg-slate-900">
        <img src={logo} alt="logo-img" />
      </div>
      <div className="flex justify-center items-center h-screen bg-slate-900 md:bg-white ">
        <div className="w-3/4 h-1/2 grid items-between">
          <div className="mb-7">
            <h2 className="text-xl font-bold h-10 text-white md:text-black">
              Reset Password
            </h2>

            <span className="text-sm text-white md:text-black">
              Choose a new password for your account.
            </span>
          </div>
          <div>
            <form>
              <div className={`md:border-2 md:border-gray-400 rounded-xl mb-7 flex items-center justify-between bg-white ${passwordError ? 'border-red-500' : ''}`}>
                <input
                  name="password"
                  className="w-full h-full py-3 rounded-xl px-3"
                  type="password"
                  placeholder="Your New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                />
                {/* ... (eye icon remains unchanged) */}
              </div>

              <div className={`md:border-2 md:border-gray-400 rounded-xl mb-7 flex items-center justify-between bg-white ${passwordError ? 'border-red-500' : ''}`}>
                <input
                  name="confirmPassword"
                  className="w-full h-full py-3 rounded-xl px-3"
                  type="password"
                  placeholder="Confirm Your New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* ... (eye icon remains unchanged) */}
              </div>

              {/* Display error messages */}
              {passwordError && (
                <p className="text-red-500 mb-2">{passwordError}</p>
              )}
              {passwordMatchError && (
                <p className="text-red-500 mb-2">{passwordMatchError}</p>
              )}
              {message && <p className="text-green-500 mb-2">{message}</p>}

              <div>
                <button
                  type="button"
                  className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
                <Link to="/login">
                  <button
                    className="bg-blue-900 md:bg-white w-full py-3 border border-black rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
                  >
                    Back to Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
