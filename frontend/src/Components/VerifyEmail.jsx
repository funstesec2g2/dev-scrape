import "./LoginPage.css";
import logo from "./assets/logo-img.png";
function LoginPage(props) {
  return (
    <>
      <div className="w-10/12 m-auto flex flex-col justify-center items-center">
        <div class="flex wrap justify-center items-center">
          <div id="imageHolder">
            <img src={logo} alt="logo-img" className="" />
          </div>
          <div className="text-holder rounded-3xl h-full">
            <h2 className="text-3xl text-start px-4 font-extrabold">
              Verify Your Email
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>

            <span className="px-4 pb-6 text-xs">
              We have sent a verification email to {props.email}.
            </span>
            <p className="px-4 pt-6 text-xs">
              Didn’t receive the email? Check spam or promotion folder or
            </p>
            <div className="button text-center my-6">
              <a className="bg-cyan-950 font-bold px-8 py-3 justify-self-center rounded-lg w-full text-white">
                Resend Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
