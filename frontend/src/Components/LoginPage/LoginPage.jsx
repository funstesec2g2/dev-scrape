import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./LoginPage.css";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import logo from "../assets/logo-img.png";

import { useLogin } from "../../hooks/useLogin";



function passwordToggler() {


  let icon = document.getElementById("pass");
  if (icon.type === "password") {
    icon.type = "text";
  } else {
    icon.type = "password";
  }
}


 

function LoginPage() {
  // const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState('');
  const navigate = useNavigate();

  const [action, setAction] = useState("Login");
  const [button, setButton] = useState("Login");
  const { error, isLoading, signInWithGitHub, signInWithGoogle } = useLogin();
  const handleGoogle = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };
  const handleGithub = async (e) => {
    e.preventDefault();
    await signInWithGitHub();
  };


  const signInUser = async (event) => {
    event.preventDefault();

    let response;
    try{
      response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // credentials: 'include',
        body: JSON.stringify({
          email, password
        })
      })
      console.log(response);
    }
    
    catch(error){
      console.log(error);
      throw new Error('Something went wrong in the request');
    }
    
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    if (jsonResponse.message === 'success') {
      navigate('/');
    }

    else if (jsonResponse.message === 'no user found') {
      console.log('the user doesn\'t sfsdfsd;ljfksdl;');
      navigate('/userNotExist');
    }

    else if  (jsonResponse.message === 'wrong password') {
      setWrongPassword('You have entered a wrong password');
    }



  }

  function passwordToggler() {
    let icon = document.getElementById("passLogin");
    if (icon.type === "password") {
      icon.type = "text";
    } else {
      icon.type = "password";
    }
  }

  // function toggleForgotPassword() {
  //   const loginPage = document.querySelector("#login");
  //   const forgotPassword = document.querySelector("#forgotPassword");

  //   forgotPassword.classList.toggle("hidden");
  //   loginPage.classList.toggle("hidden");
  // }

  const login = () => {
    navigate("/");
    
  }

  function toggleCreatYourAccount() {
    const loginPage = document.querySelector("#login");
    const createYourAccount = document.querySelector("#createYourAccount");

    createYourAccount.classList.toggle("hidden");
    loginPage.classList.toggle("hidden");
  }


  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden bg-slate-900 text-white md:flex items-center justify-center">
        <img src={logo} alt="logo-img" />
      </div>

      <div className="flex flex-col justify-center items-center bg-slate-900 md:bg-white h-screen">
        <div className="card w-3/4">
          <div className="title mb-7">
            <h1 className="text-xl font-bold h-10 text-white md:text-black text-center">
              Log in
            </h1>
            <span className="text-sm pr-2 text-black md:text-black ml-5">
              Don't have an account?
            </span>
            <Link to="/createYourAccount">
              <button className="text-yellow-500 text-[1rem]">Sing Up</button>
            </Link>
          </div>
          <div className="inputs">
            <form onSubmit={signInUser}>
              {/* <div className="input md:border-2 md:border-gray-400 rounded-xl mb-4"> */}
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  className=" input w-full  py-3 px-3 focus:outline-none focus:ring-2 md:border-2 md:border-gray-400 rounded-xl mb-4 outline-none"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              

              <div className="input pass py-0 md:border-5 md:border-gray-400 rounded-xl mb-7 flex items-center justify-between bg-white">
                <input
                  id="passLogin"
                  name="pwd"
                  value={password}
                  className="w-full  py-3 rounded-xl px-3  "
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
              <div className="text-red-500 text-sm">{wrongPassword}</div>

              <div className="forgot-password ">
                <a
                  className="text-sm cursor-pointer text-cyan-500"
                  onClick={() => {
                    navigate("/forgotPassword");
                   
                  }}
                >
                  Forgot password?
                </a>


              
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500 flex justify-center mt-2"
                  // onClick={(e)=>{
                  //   e.preventDefault()
                  //   login();
                  // }}
                >
                  Login
                </button>
             
              </div>

            </form>
          </div>

          <div className="text-center text-gray-400 my-4">- OR -</div>
          <div className="buttons flex flex-wrap justify-around">
            <div className="button my-1 bg-blue-900 md:bg-white border border-gray-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black">
            <button
    className="button my-1 bg-blue-900 md:bg-white border border-gray-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
    onClick={handleGoogle} // Attach the handleGoogle method to the onClick event
  >
    <img
      src={google}
      alt="google"
      className="w-8 mx-2 my-3 inline-block"
    />
    Sign up with Google
  </button>
              
            </div>
            <div className="button my-1 bg-blue-900 md:bg-white border border-gray-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black">
            <button
    className="button my-1 bg-blue-900 md:bg-white border border-gray-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
    onClick={handleGithub} // Attach the handleGithub method to the onClick event
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
}


export default LoginPage;
