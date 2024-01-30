import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import logo from "../assets/logo.png";
import Eyeclosed from "../assets/Eyeclosed";
import Eyeopened from "../assets/Eyeopened";
import { useLogin } from "../../hooks/useLogin";
const  LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  const [onUserBlocked, setOnUserBlocked] = useState(false);  
  const navigate = useNavigate();
  
  const [eye, setEye] = useState("closed");
  const { login,  error, isLoading, signInWithGitHub, signInWithGoogle } = useLogin();


  const handleGoogle = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };
  const handleGithub = async (e) => {
    e.preventDefault();
    await signInWithGitHub();
  };

  const Login = async (event) => {
    console.log("this funciton is called")
    event.preventDefault();
    try {
      await login({email, password, onWrongPassword: setWrongPassword, onUserBlocked: setOnUserBlocked});
    } catch (error) {
      console.log(error);
      setWrongPassword('Sever Error, please try again')
      return 
    }
  };

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
            <span className="text-sm pr-2 text-white md:text-black ml-5">
              Don't have an account?
            </span>
            <Link to="/createYourAccount">
              <button className="text-yellow-500 hover:text-yellow-800">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="inputs">
            <form onSubmit={Login}>
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

              <div className="input input w-full  py-3 px-3 focus:outline-none focus:ring-2 md:border-2 md:border-gray-400 rounded-xl mb-4 outline-none py-0 md:border-5 md:border-gray-400 mb-7 flex items-center justify-between bg-white">
                <input
                  id="passLogin"
                  name="pwd"
                  value={password}
                  type={eye == "closed" ? "password" : "text"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  id="eye-holder"
                  onClick={() => setEye(eye == "open" ? "closed" : "open")}
                >
                  {eye == "closed" ? <Eyeclosed /> : <Eyeopened />}
                </span>
              </div>
              <div className="text-red-500 text-sm">{wrongPassword}</div>

              <div className="forgot-password flex justify-end mb-6">
                <a
                  className="text-sm cursor-pointer text-cyan-500 hover:text-cyan-700"
                  onClick={() => {
                    navigate("/forgotPassword");
                  }}
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500 flex justify-center mt-2"
                // onClick={(e)=>{
                //   e.preventDefault()
                //   login();
                // }}
              >
                Login
              </button>
            </form>
          </div>

          <div className="text-center text-gray-400 my-4">- OR -</div>
          <div className="buttons flex flex-wrap justify-around">
            <div>
              <button
                className="button my-1 bg-blue-900 md:bg-white rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
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
            <div>
              <button
                className="button my-1 bg-blue-900 md:bg-white rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
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
