import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import Eyeclosed from "../assets/Eyeclosed";
import Eyeopened from "../assets/Eyeopened";
import github from "../assets/github.svg";
import google from "../assets/google.svg";
import logo from "../assets/logo.png";
import "./LoginPage.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  const [onUserBlocked, setOnUserBlocked] = useState(false);
  const navigate = useNavigate();

  const [eye, setEye] = useState("closed");
  const { login, error, isLoading, signInWithGitHub, signInWithGoogle } = useLogin();

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

  const Login = async (event) => {
    event.preventDefault();

    // Validate email and password
    validateEmail();
    validatePassword();

    // If there are validation errors, return without attempting login
    if (emailError || passwordError) {
      return;
    }

    try {
      await login({
        email,
        password,
        onWrongPassword: setWrongPassword,
        onUserBlocked: setOnUserBlocked,
      });
    } catch (error) {
      console.log(error);
      setWrongPassword("Server Error, please try again");
      return;
    }
  };

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden text-white md:flex items-center justify-center">
        <img src={logo} alt="logo-img" className="w-8/12" />
      </div>
      <div className="flex cont flex-col justify-center items-center md:bg-white">
        <div className="card w-3/4">
          <div className="title mb-7">
            <h1 className="text-xl font-bold h-10 text-white md:text-black text-center">
              Log in
            </h1>
            <span className=" pr-2 text-white md:text-slate-900 ml-5">
              Don't have an account?
            </span>
            <Link to="/createYourAccount">
              <button className="text-blue-700 text-sm hover:text-black">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="inputs">
            <form onSubmit={Login}>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                className={`input w-full  py-3 px-3 focus:outline-none focus:ring-2 md:border-2 md:border-gray-400 rounded-xl mb-4 outline-none ${emailError ? 'border-red-500' : ''}`}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              {emailError && (
                <div className="text-red-500 text-sm mt-1">
                  {emailError}
                </div>
              )}

              <div className="input input w-full  py-3 px-3 focus:outline-none focus:ring-2 md:border-2 md:border-gray-400 rounded-xl mb-4 outline-none py-0 md:border-5 md:border-gray-400 mb-7 flex items-center justify-between bg-white">
                <input
                  id="passLogin"
                  name="pwd"
                  value={password}
                  type={eye == "closed" ? "password" : "text"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                />
                <span
                  id="eye-holder"
                  onClick={() => setEye(eye == "open" ? "closed" : "open")}
                >
                  {eye == "closed" ? <Eyeclosed /> : <Eyeopened />}
                </span>
              </div>
              {passwordError && (
                <div className="text-red-700 text-sm mt-1">
                  {passwordError}
                </div>
              )}

              <div className="text-red-700 text-sm">{wrongPassword}</div>

              <div className="forgot-password flex justify-end mb-6">
                <a
                  className="text-sm cursor-pointer text-gray-500 hover:text-slate-800 "
                  onClick={() => {
                    navigate("/sendResetCode");
                  }}
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500 flex justify-center mt-2"
              >
                Login
              </button>
            </form>
          </div>

          <div className="text-center text-gray-300 my-4">- OR -</div>
          <div className="buttons flex flex-wrap justify-around">
            <div>
              <button
                className="button my-1 bg-blue-900 md:bg-white rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
                onClick={handleGoogle}
              >
                <img
                  src={google}
                  alt="google"
                  className="w-8 mx-2 my-3 inline-block"
                />
                Sign up with Google
              </button>
            </div>
            <div>
              <button
                className="button my-1 bg-blue-900 md:bg-white rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
                onClick={handleGithub}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-8 mx-2 my-3 inline-block"
                />
                Sign up with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
