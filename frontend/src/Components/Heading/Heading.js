import "./Heading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Heading() {
  function activation(event) {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
  }

  function dropDown() {
    const navMenu = document.querySelector("#nav-menu");

    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("flex");
  }

  return (
    <>
      <header>
        <div className="flex justify-center items-center flex-col logo py-3">
          <img src="favicon.ico" alt="Logo" />
          <p className="text-gray-400 uppercase text-lg">Dev-scape</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 containe items-center">
          <button className="md:justify-self-end md:order-last m-3">
            <img
              src="logo192.png"
              alt="dynamic image"
              className="border rounded-full size-14 md:size-16 hover:bg-blue-700 active:bg-blue-500 transition-colors duration-300 ease-in-out"
            />
          </button>

          <button
            className="mr-3 justify-self-end hover:bg-blue-700 active:bg-blue-500 transition-colors duration-300 ease-in-out md:hidden"
            onClick={dropDown}
          >
            <FontAwesomeIcon icon={faBars} className="px-2 size-6" />
          </button>

          <div
            className="flex-col md:flex-row md:col-start-2 justify-center items-center col-span-2 md:col-span-1 hidden md:flex"
            id="nav-menu"
          >
            <a
              href="#"
              className="menu-item text-gray-300 hover:text-white px-4 hover:bg-blue-700 active:bg-blue-500 transition-colors duration-300 ease-in-out"
              onClick={(event) => activation(event)}
            >
              About
            </a>
            <a
              href="#"
              className="menu-item text-gray-300 hover:text-white px-4 md:ml-4 hover:bg-blue-700 active:bg-blue-500 transition-colors duration-300 ease-in-out"
              onClick={(event) => activation(event)}
            >
              Help
            </a>
            <a
              href="#"
              className="menu-item text-gray-300 hover:text-white px-4 md:ml-4 hover:bg-blue-700 active:bg-blue-500 transition-colors duration-300 ease-in-out"
              onClick={(event) => activation(event)}
            >
              Scrape
            </a>
            <a
              href="#"
              className="menu-item text-gray-300 hover:text-white px-4 md:ml-4 hover:bg-blue-700 active:bg-blue-500 transition-colors duration-300 ease-in-out active"
              onClick={(event) => activation(event)}
            >
              Favorites
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
