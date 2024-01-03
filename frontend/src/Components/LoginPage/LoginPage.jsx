import "./LoginPage.css";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import logo from "../assets/logo-img.png";
import { useState } from "react";

function passwordToggler() {
  let icon = document.getElementById("pass");
  if (icon.type === "password") {
    icon.type = "text";
  } else {
    icon.type = "password";
  }
}

function toggleForgotPassword() {
  const loginPage = document.querySelector("#login");
  const forgotPassword = document.querySelector("#forgotPassword");

  forgotPassword.classList.toggle("hidden");
  loginPage.classList.toggle("hidden");
}
function toggleVerifyEmail() {
  const loginPage = document.querySelector("#login");
  const verifyEmail = document.querySelector("#verifyEmail");

  verifyEmail.classList.toggle("hidden");
  loginPage.classList.toggle("hidden");
}
function login() {
  var email = document.getElementById("email").value;
  console.log(email);
  var pass = document.getElementById("pass").value;
  console.log(pass);
}
const  createAccount = () => {
  var pass = document.getElementById("pass").value;
  console.log(pass);
  toggleVerifyEmail();
}

const  LoginPage = () => {
  const [action, setAction] = useState("Login");
  const [button, setButton] = useState("Login");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const registerForm = (e) =>{
    e.preventDefault();
    console.log({
      name,
      password,
      email
    })
  }

  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden bg-slate-900 text-white md:flex items-center justify-center">
        <img src={logo} alt="logo-img" />
      </div>

      <div className="flex flex-col justify-center items-center bg-slate-900 md:bg-white  h-screen">
        <div className="card w-3/4">
          <div className="title mb-7">
            <h1 className="text-xl font-bold h-10 text-white md:text-black">
              Log in
            </h1>
            <span className="text-sm pr-2 text-white md:text-black">
              Don't have an account?
            </span>
            <a
              className="text-sm text-cyan-500 cursor-pointer"
              href="#"
              onClick={toggleCreatYourAccount}
            >
              Sign Up
            </a>
          </div>


          <div className="inputs">
            <form>
              {action === "Sign Up" ? (
                <label htmlFor="email">
                  <p className="text-white md:text-gray-400">E-Mail </p>
                </label>
              ) : (
                <div></div>
              )}
              <div className="input md:border-2 md:border-gray-400 rounded-xl mb-4">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full h-full py-3 rounded-xl px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>
            </form>
            <form>
              {action === "Sign Up" ? (
                <label htmlFor="pass">
                  <p className="text-white md:text-gray-400">Password</p>
                </label>
              ) : (
                <div></div>
              )}

              <div className="input pass md:border-2 md:border-gray-400 rounded-xl mb-7 flex items-center justify-between bg-white">
                <input
                  id="passLogin"
                  name="pwd"
                  className="w-full h-full py-3 rounded-xl px-3 "
                  type="password"
                  placeholder={
                    action === "Sign Up" ? "Enter New Password" : "Password"
                  }
                  placeholder="Password"
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
            </form>
          </div>

          <div className="forgot-password ">
            <a
              href="#"
              className="text-sm cursor-pointer text-cyan-500"
              onClick={() => {
                toggleForgotPassword();
                return false;
              }}
            >
              Forgot password?
            </a>
          </div>

          <div className="flex justify-center mt-2">
            <button
              className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500"
              onClick={login}
            >
              Login
            </button>
          </div>

          <div className="text-center text-gray-400 my-4">- OR -</div>
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
              <a href="" className="mx-2 cursor-pointer my-3">
                Sign up with Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
