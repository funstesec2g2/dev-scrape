import "./HomePage.css";
import logo from "./assets/favicon.png";
function HomePage(props) {
  return (
    <>
      <header>
        <nav className="flex flex-col">
          <div className="title-bar p-3 w-full flex flex-col items-center">
            <div className="logo-bar flex justify-center text-center w-full m-auto">
              <img src={logo} className="w-16" alt="logo" />
            </div>
            <div className="text-2xl">DevScrape</div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HomePage;
