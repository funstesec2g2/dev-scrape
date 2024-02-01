import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import github from "../assets/github.svg";
import google from "../assets/google.svg";
import logo from "../assets/logo.png";
import { useLogin } from "../../hooks/useLogin";
import "./CreateYourAccount.css";


const CreateYourAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userBlockedErrorMessage, setUserBlockedErrorMessage] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { login,  error, isLoading, signInWithGitHub, signInWithGoogle } = useLogin();



  function passwordToggler() {
    let icon = document.getElementById("passSignup");
    if (icon.type === "password") {
      icon.type = "text";
    } else {
      icon.type = "password";
    }
  }

  const validateName = () => {
    if (!fullName) {
      setNameError('Name is required.');
    } else {
      setNameError('');
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };
  const handleGithub = async (e) => {
    e.preventDefault();
    await signInWithGitHub();
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required.');
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{8,}$/;
  
    if (!password) {
      setPasswordError('Password is required.');
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password should contain at least one digit, one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const createAccount = async (event) => {
    event.preventDefault();

    // Validate name, email, and password
    validateName();
    validateEmail();
    validatePassword();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match.');
      return;
    }

    // Reset password match error if passwords match
    setPasswordMatchError('');

    // Check if there are any validation errors
    if (nameError || emailError || passwordError) {
      return;
    }

    try {
      const response = await fetch('http://localhost:5500/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName, email, password
        })
      });
      console.log('this method is being reached')
      const jsonResponse = await response.json();
      console.log(jsonResponse);

      if ('message' in jsonResponse) {
        if (jsonResponse.message === 'User already exists') {
          // Redirect to login
          navigate('/userAlreadyExist');
        } else if (jsonResponse.message === 'user is blocked') {
          setUserBlockedErrorMessage('You are blocked; you cannot register');
        }
      } else {
        // Redirect to verify email
        navigate('/verifyEmail');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden text-white md:flex items-center justify-center">
        <img src={logo} alt="logo-img" className="w-8/12" />
      </div>

      <div className="flex flex-col justify-center items-center bg-slate-900 md:bg-white h-screen">
        <div className="card">
          <div className="title mb-7">
            <h1 className="text-xl font-bold h-10  text-center text-white md:text-black mt-6">
              Create your Free Account
            </h1>
          </div>
          <div className="inputs">
            <form onSubmit={createAccount}>
              <label htmlFor="fullname">
                <p className="text-white md:text-gray-900 text-left">Full Name</p>
              </label>
              <input
                id="fullname"
                type="text"
                name="name"
                value={fullName}
                onBlur={validateName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 input md:border-2 md:border-gray-400 rounded-xl mb-4 ${nameError ? 'border-red-500' : ''}`}
                placeholder="Enter your Full Name here"
              />
              {nameError && (
                <div className="text-red-500 text-sm mt-1">
                  {nameError}
                </div>
              )}

              <label htmlFor="email">
                <p className="text-white md:text-gray-900 text-left">E-Mail</p>
              </label>
              <input
                name="email"
                onBlur={validateEmail}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 input md:border-6 md:border-gray-400 rounded-xl mb-4 ${emailError ? 'border-red-500' : ''}`}
                placeholder="Enter your E-mail Address here"
              />
              {emailError && (
                <div className="text-red-500 text-sm mt-1">
                  {emailError}
                </div>
              )}

              <label htmlFor="passSignup">
                <p className="text-white md:text-gray-900 text-left">Password</p>
              </label>
              <div className={`input md:border-2 md:border-gray-400 rounded-xl mb-4 flex items-center justify-between bg-white ${passwordError ? 'border-red-500' : ''}`}>
                <input
                  id="passSignup"
                  name="pwd"
                  onBlur={validatePassword}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 rounded-xl px-3 "
                  type="password"
                  placeholder="Enter New Password"
                />
                <span id="eye-holder">
                  <svg
                    onClick={passwordToggler}
                    id="eye-closed"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="grey"
                    className="w-5 text-red h-5 mr-4 text-end inline-block "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                </span>
              </div>
              {passwordError && (
                <div className="text-red-700 text-sm mt-1">
                  {passwordError}
                </div>
              )}

              <label htmlFor="confirmPass">
                <p className="text-white md:text-gray-900 text-left">Confirm Password</p>
              </label>
              <div className={`input md:border-2 md:border-gray-400 rounded-xl mb-4 flex items-center justify-between bg-white ${passwordMatchError ? 'border-red-500' : ''}`}>
                <input
                  id="confirmPass"
                  name="confirmPwd"
                  onBlur={() => {
                    if (password !== confirmPassword) {
                      setPasswordMatchError('Passwords do not match.');
                    } else {
                      setPasswordMatchError('');
                    }
                  }}
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full py-2 rounded-xl px-3 "
                  type="password"
                  placeholder="Confirm Password"
                />
                <span id="eye-holder">
                  <svg
                    onClick={passwordToggler}
                    id="eye-closed"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="grey"
                    className="w-5 text-red h-5 mr-4 text-end inline-block "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                </span>
              </div>
              {passwordMatchError && (
                <div className="text-red-700 text-sm mt-1">
                  {passwordMatchError}
                </div>
              )}

              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-300 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500"
                >
                  Create Account
                </button>
              </div>
            </form>

            <span className="text-sm pr-2 md:text-black text-white">
              Already have an account?
            </span>

            <Link to='/login'>
              <button className='text-white font-bold hover:text-black'>
                Sign In
              </button>
            </Link>

            <div className="text-red-700">{userBlockedErrorMessage}</div>

            <div className="text-center text-white my-1">- OR -</div>
            <div className="buttons flex flex-wrap justify-around">
              <div className="button bg-blue-900 text-sm md:bg-white border border-gray-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black" onClick={(e)=>{
                e.preventDefault();
                signInWithGoogle();
              }}>
                <img
                  src={google}
                  alt="google"
                  className="w-8 mx-2 inline-block h-6"
                />
                <a href="" className="mx-2 cursor-pointer ">
                  Sign up with Google
                </a>
              </div>
              <button className="button my-1 bg-blue-900 md:bg-white border border-gray-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black" onClick={(e)=>{
                e.preventDefault();
                signInWithGitHub();
              }}>
                <img
                  src={github}
                  alt="google"
                  className="w-8 mx-2  inline-block"
                />
                <a href="" className="mx-1 cursor-pointer my-1">
                  Sign up with Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateYourAccount;
