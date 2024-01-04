import logo from "../assets/logo-img.png";
import { CCloseButton } from '@coreui/react'

function VerifyEmail(props) {
  return (
    <>
      <div className="grid md:grid-cols-2 relative">
        <div className="hidden md:flex h-screen justify-center items-center bg-slate-900">
          <img src={logo} alt="logo-img" />
        </div>
        <div className="flex justify-center items-center h-screen bg-slate-900 md:bg-white">
          <div className="w-3/4 h-1/2 grid items-between">
            <div>
              <h2 className="text-xl font-bold h-10 text-white md:text-black">
                Verify Your Email
              </h2>

              <span className="text-sm text-white md:text-black">
                We have sent a verification email to {props.email}.
              </span>
            </div>
            <div>
              <p className="text-sm text-white md:text-black">
                Didn’t receive the email? Check spam or promotion folder or
              </p>
              <button className="w-full py-3 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500">
                Resend Email 
              </button> 
            </div>
          </div>
        </div>
        <div className="close-btn absolute top-1 right-1 bg-black h-10 w-10 rounded-lg ">
        <CCloseButton white/>

      </div>
      </div>
     
    </>
  );
}
export default VerifyEmail;
