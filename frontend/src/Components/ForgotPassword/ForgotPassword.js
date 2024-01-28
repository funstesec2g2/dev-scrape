// import { Link } from "react-router-dom";
import logo from "../assets/logo-img.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  // function toggleLogin() {
  //   const loginPage = document.querySelector("#login");
  //   const forgotPassword = document.querySelector("#forgotPassword");

  //   forgotPassword.classList.toggle("hidden");
  //   loginPage.classList.toggle("hidden");
  // }
  // function toggleCheckYourEmail() {
  //   const checkYourEmail = document.querySelector("#checkYourEmail");
  //   const forgotPassword = document.querySelector("#forgotPassword");

  //   forgotPassword.classList.toggle("hidden");
  //   checkYourEmail.classList.toggle("hidden");
  // }
  return (
    // forgot password page
    <>
      <div className="flex" id="forgot-password-side">
        {/* logo side */}
        <div className="hidden md:flex w-1/2 h-screen md:bg-slate-900 items-center justify-center text-white">
          <img src={logo} alt="logo-img" />
        </div>

        {/* form side  */}
        <div className="flex justify-center items-center h-screen w-screen md:w-1/2 bg-slate-900 md:bg-white">
          <div className="flex flex-col w-3/4 gap-20">
            {/* the top texts */}
            <div>
              <h1 className="h-10 text-xl font-bold text-white md:text-black">
                Forgot Password
              </h1>
              <p className="text-sm text-white md:text-black">
                Enter the email you used to create your account so we can send
                you instructions on how to reset your Password
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* email text box */}
              <input
                type="text"
                placeholder="Email"
                className="md:border-2 md:border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></input>
              {/* send button */}
              <button
                className="md:bg-slate-900 bg-blue-900 hover:bg-blue-700 active:bg-blue-500 text-white px-4 rounded transition-colors duration-300 ease-in-out py-3"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/checkYourEmail");
                }}
              >
                Send
              </button>
              {/* back to login button */}
              {/* <Link to='/login'> */}
              <button
                className="md:border md:border-slate-900 bg-blue-900 md:bg-white active:bg-blue-500 rounded px-4 hover:bg-blue-700 hover:text-white md:text-black text-white transition-colors duration-300 ease-in-out py-3"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Back to Login
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
