import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "../Components/ProfileDropdown/ProfileDropdown";
const Layout = ({ children }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  const navigate = useNavigate();

  const handleAdminClick = (e) => {
    e.preventDefault();
    console.log("admin clicked");
    navigate("/admin");
   

  }


  return (
    <div className="min-h-screen">
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <div className="container mx-auto">
          <Link to="/">
            {" "}
            <h1 className="text-2xl font-semibold">DevScrape</h1>
          </Link>
        </div>
        {!user ? (
          <>
            {" "}
            <div className="flex px-4 gap-4">
              <Link to="/register" className="text-white">
                Signup
              </Link>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-9OvBU3eVMJZbGbQ84dAqW8XdebaXNyqpyV3tO_x5TJyfbEkbf29ATX55L_Ws2UbdxQ&usqp=CAU" // Replace with your profile image URL
                alt="Profile"
                className="w-8 h-8  rounded-full"
              />
            </div>
            <button onClick={handleAdminClick}>admin page</button>
            <button onClick={handleClick}>Log Out</button>
          </>
        )}
      </header>
      <div className="mx-auto">
        <nav className="p-4 px-10 flex flex-col justify-center shadow-md">
          <div className="flex">
            <ul className="flex space-x-4 w-full">
              <li>
                <Link to="/" className="text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-blue-500">
                  Favorites
                </Link>
              </li>
              {user && (
                <li>
                  <Link to="/dashboard" className="text-blue-500">
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link to="/about" className="text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-blue-500">
                  Help
                </Link>
              </li>
              {/* Add more menu items as needed */}
            </ul>
            <div className="self-end">{true && <ProfileDropdown />}</div>
          </div>
        </nav>
        <main>{children}</main>
      </div>
      <footer className="bg-gray-200 p-4 text-gray-700">
        <div className="container mx-auto">© 2023 Dev scrape</div>
      </footer>
    </div>
  );
};

export default Layout;
