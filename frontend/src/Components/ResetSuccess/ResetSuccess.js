import logo from "../assets/logo-img.png";

export default function ResetSuccess() {
  function toggleHomePage() {
    const resetSuccess = document.querySelector("#resetSuccess");
    const Scrape = document.querySelector("#Scrape");

    Scrape.classList.toggle("hidden");
    resetSuccess.classList.toggle("hidden");
  }
  function login() {
    toggleHomePage();
  }
  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden bg-slate-900 h-screen text-white md:flex items-center justify-center">
        <img src={logo} alt="logo-img" />
      </div>
      <div className="flex justify-center h-screen items-center bg-slate-900 md:bg-white">
        <div className="h-1/2 w-3/4 flex flex-col items-between">
          <div className="grid justify-center">
            <svg
              width="150"
              height="150"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 50L45.8333 58.3333L62.5 41.6667M87.5 50C87.5 70.7107 70.7107 87.5 50 87.5C29.2893 87.5 12.5 70.7107 12.5 50C12.5 29.2893 29.2893 12.5 50 12.5C70.7107 12.5 87.5 29.2893 87.5 50Z"
                stroke="#34A853"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-center font-bold text-xl text-white md:text-black">
            Password reset Successfully
          </p>

          <button
            className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
