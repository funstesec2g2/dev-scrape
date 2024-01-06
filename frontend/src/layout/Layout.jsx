import React from "react";

import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Layout = ({ children }) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
            <div className="flex gap-4">
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
            <Link to="/profile" className="ml-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-9OvBU3eVMJZbGbQ84dAqW8XdebaXNyqpyV3tO_x5TJyfbEkbf29ATX55L_Ws2UbdxQ&usqp=CAU" // Replace with your profile image URL
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </Link>
            <button onClick={handleClick}>Log Out</button>
          </>
        )}
      </header>
      <div className="container mx-auto p-4">
        <nav className="bg-white p-4 shadow-md">
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
            <div className="self-end">
              {true && (
                <ul>
                  <li>
                    <Link to="/profile" className="text-blue-500">
                      Profile
                    </Link>
                  </li>
                </ul>
              )}
            </div>
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
