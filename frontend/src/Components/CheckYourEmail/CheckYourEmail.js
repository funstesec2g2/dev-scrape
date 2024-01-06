import logo from "../assets/logo-img.png";
import { useNavigate } from "react-router-dom";

export default function CheckYourEmail() {
    const navigate = useNavigate();
  const  toggleLogin = (e) => {
    e.preventDefault();
    navigate('/login'); 
  }
  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden bg-slate-900 text-white md:flex items-center justify-center">
        <img src={logo} alt="logo-img" />
      </div>
      <div className="flex justify-center items-center h-screen bg-slate-900 md:bg-white">
        <div className="h-1/2 w-3/4 grid items-between">
          <div>
            <h1 className="h-10 text-xl font-bold text-white md:text-black">
              Check Your Email
            </h1>
            <p className="text-sm text-white md:text-black">
              We have sent an email with password reset information to
              <span>"Email-address"</span>.
            </p>
            <form>
              <input type="type" name="verification code" />
            </form>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm text-white md:text-black">
              Didn't receive the email? Check spam or promotion folder or
            </p>
            <button className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500">
              Resend Email
            </button>
            <button
              className="bg-blue-900 md:bg-white w-full py-3 border border-black rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white active:bg-blue-500 text-white md:text-black"
              onClick={toggleLogin}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
