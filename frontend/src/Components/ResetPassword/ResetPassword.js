import { Link } from "react-router-dom";
import logo from "../assets/logo-img.png";

export default function ResetPassword() {
  // function toggleLogin() {
  //   const loginPage = document.querySelector("#login");
  //   const resetPassword = document.querySelector("#resetPassword");

  //   resetPassword.classList.toggle("hidden");
  //   loginPage.classList.toggle("hidden");
  // }
  function toggleResetSuccess() {
    const resetSuccess = document.querySelector("#resetSuccess");
    const resetPassword = document.querySelector("#resetPassword");

    resetPassword.classList.toggle("hidden");
    resetSuccess.classList.toggle("hidden");
  }
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
              <div className="md:border-2 md:border-gray-400 rounded-xl mb-7 flex items-center justify-between bg-white">
                <input
                  name="pwd"
                  className="w-full h-full py-3 rounded-xl px-3 "
                  type="password"
                  placeholder="Your New Password"
                />
                <span id="eye-holder">
                  <svg
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

              <div className="md:border-2 md:border-gray-400 rounded-xl mb-7 flex items-center justify-between bg-white">
                <input
                  name="pwd"
                  className="w-full h-full py-3 rounded-xl px-3 "
                  type="password"
                  placeholder="Confirm Your New Password"
                />
                <span id="eye-holder">
                  <svg
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
            <div>
              <button
                className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500"
                onClick={toggleResetSuccess}
              >
                Reset Password
              </button>
              <Link to='login'>
              <button
                className="bg-blue-900 md:bg-white w-full py-3 border border-black rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
                >
                Back to Login
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
