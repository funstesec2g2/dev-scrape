import logo from "../assets/logo-img.png";

const ForgotPassword = () => {
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

            <div className="flex flex-col gap-4">
              {/* email text box */}
              <input
                type="text"
                placeholder="Email"
                className="md:border-2 md:border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></input>
              {/* send button */}
              <button className="md:bg-slate-900 bg-blue-900 hover:bg-blue-700 active:bg-blue-500 text-white px-6 rounded transition-colors duration-300 ease-in-out py-3">
                Send
              </button>
              {/* back to login button */}
              <button className="md:border md:border-slate-900 bg-blue-900 md:bg-white active:bg-blue-500 rounded px-6 hover:bg-blue-700 hover:text-white md:text-black text-white transition-colors duration-300 ease-in-out py-3">
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
