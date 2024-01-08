import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import logo from "../assets/logo-img.png";
import Eyeclosed from "../assets/Eyeclosed";
import Eyeopened from "../assets/Eyeopened";
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
  const [wrongPassword, setWrongPassword] = useState("");
  const navigate = useNavigate();
  const [eye, setEye] = useState("closed");
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
    try {
      response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong in the request");
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);

    if (jsonResponse.message === "success") {
      navigate("/");
    } else if (jsonResponse.message === "no user found") {
      console.log("the user doesn't sfsdfsd;ljfksdl;");
      navigate("/userNotExist");
    } else if (jsonResponse.message === "wrong password") {
      setWrongPassword("You have entered a wrong password");
    }
  };

  function passwordToggler() {
    setEye();
  }

  // function toggleForgotPassword() {
  //   const loginPage = document.querySelector("#login");
  //   const forgotPassword = document.querySelector("#forgotPassword");

  //   forgotPassword.classList.toggle("hidden");
  //   loginPage.classList.toggle("hidden");
  // }

  const login = () => {
    navigate("/");
  };

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
              <button className="text-yellow-500 hover:text-yellow-800">
                Sign Up
              </button>
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
