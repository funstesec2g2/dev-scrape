import "./CreateYourAccount.css";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import { useState } from "react";
import logo from "../assets/logo-img.png";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
const  CreateYourAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate  = useNavigate();
  const [userBlockedErrorMessage, setUserBlockedErrorMessage] = useState('');

  function passwordToggler() {
    let icon = document.getElementById("passSignup");
    if (icon.type === "password") {
      icon.type = "text";
    } else {
      icon.type = "password";
    }
  }
  const createAccount = async (event) => {
    event.preventDefault();
    let response;

    try {
      response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName, email, password
        })
      })
    } catch (error) {
      console.log(error);
      return;
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);

    if ('message' in jsonResponse){

      if (jsonResponse.message === 'User already exists') {
        // Redirect to login
        navigate('/userAlreadyExist');
    } 
    if (jsonResponse.message === 'user is blocked'){
      setUserBlockedErrorMessage('You are blocked you cant register');

    }
    } else {
      // Redirect to verify email
      navigate('/verifyEmail');
    }
  };


  
  

  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden bg-slate-900 text-white md:flex items-center justify-center">
        <img src={logo} alt="logo-img" />
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
                <p className="text-white md:text-gray-400">Full Name</p>
              </label>
              {/* <div className=""> */}
                <input
                  id="fullname"
                  type="text"
                  name="name"
                  value={fullName}
                  required
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-5 py-5  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 input md:border-2 md:border-gray-400 rounded-xl mb-4"
                  placeholder="Enter your Full Name here"
                />
              {/* </div> */}

              <label htmlFor="email">
                <p className="text-white md:text-gray-400">E-Mail</p>
              </label>
              {/* <div className="input md:border-2 md:border-gray-400 rounded-xl mb-4"> */}
                <input
                  // type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-3 py-5  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 input md:border-6 md:border-gray-400 rounded-xl mb-4"
                  placeholder="Enter your E-mail Address here"
                />
              {/* </div> */}

              <label htmlFor="passSignup">
                <p className="text-white md:text-gray-400">Password</p>
              </label>
              <div className="input md:border-2 md:border-gray-400 rounded-xl mb-7 flex items-center justify-between bg-white">
                <input
                  id="passSignup"
                  name="pwd"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-3 py-3 rounded-xl px-3 "
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
            <button className='text-blue-700 font-bold hover:bg-black'>
              Sign In
            </button>
            </Link>

            <div className="text-red-700">{userBlockedErrorMessage}</div>

            <div className="text-center text-gray-400 my-1">- OR -</div>
            <div className="buttons flex flex-wrap justify-around">
              <div className="button my-1 bg-blue-900 md:bg-white border border-gray-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black">
                <img
                  src={google}
                  alt="google"
                  className="w-8 mx-2 my-3 inline-block"
                />
                <a href="" className="mx-2 cursor-pointer my-3">
                  Sign up with Google
                </a>
              </div>
              <div className="button my-1 bg-blue-900 md:bg-white border border-gray-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black">
                <img
                  src={github}
                  alt="google"
                  className="w-8 mx-2 my-3 inline-block"
                />
                <a href="" className="mx-1 cursor-pointer my-1">
                  Sign up with Github
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </div>
  );
}

export default CreateYourAccount;
