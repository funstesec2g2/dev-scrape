import logo from "../assets/logo-img.png";
import { useNavigate } from "react-router-dom";

export const UserAlreadyExist = (props) => {

  const navigate = useNavigate();
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="hidden md:flex h-screen justify-center items-center bg-slate-900">
          <img src={logo} alt="logo-img" />
        </div>
        <div className="flex justify-center items-center h-screen bg-slate-900 md:bg-white">
          <div className="w-3/4 h-1/2 grid items-between">
            <div>
              <h2 className="text-xl font-bold h-10 text-white md:text-black">
                User Already Exists
              </h2>

              <span className="text-sm text-white md:text-black">
                Please go to the login page to login.
              </span>
            </div>
            <div className="flex justify-center">
            
              <button className="w-[100px] py-3 h-8 bg-blue-900 md:bg-slate-800 text-white my-4 rounded transition-colors duration-300 ease-in-out hover:bg-blue-700 active:bg-blue-500 flex items-center justify-center  " onClick={()=>navigate('/login')}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

