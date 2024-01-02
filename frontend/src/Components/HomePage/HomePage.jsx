import "./HomePage.css";
import Heading from "../Heading/Heading";
function Liked() {
  let like = document.getElementById("like-icon");
  if (like.classList.contains("none")) {
    like.setAttribute("fill", "red");
    like.setAttribute("stroke", "red");
    like.classList.remove("none");
  } else {
    like.setAttribute("fill", "none");
    like.setAttribute("stroke", "white");
    like.classList.add("none");
  }
}
function HomePage(props) {
  return (
    <>
      <header>
        <Heading />
      </header>
      <main>
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12 sidebar">
            <div className="w-9/12 m-auto">
              <h2 className="my-5 text-white">Choose the website to scrape</h2>
              <div className="dropdown text-black text-center ">
                <select
                  name="website"
                  className="decorated p-2 rounded-xl w-full text-center"
                  id="website"
                >
                  <option value="GitHub">GitHub</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Play Store">Play Store</option>
                </select>
              </div>
            </div>
            <div className="w-100 h-1 line my-10"></div>
            <div className="w-9/12 m-auto">
              <h2 className="my-5 text-white">Enter terms to scrap</h2>
              <div className="text-black text-center ">
                <form>
                  <label htmlFor="terms"> </label>

                  <input
                    id="terms"
                    type="text"
                    name="name"
                    className="w-full p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter terms here"
                  />
                </form>
              </div>
            </div>
            <div className="w-100 h-1 line mb-5 mt-10"></div>
            <div className="suggestions-container grid md:grid-cols-1 grid-cols-2 ">
              <div className="col-span-1 suggestion"></div>
              <div className="col-span-1 suggestion"></div>
              <div className="col-span-1 suggestion"></div>
              <div className="col-span-1 suggestion"></div>
            </div>
          </div>
          <div className="textbox md:col-span-8 col-span-12 flex flex-col items-center w-full">
            <div className="data flex  w-full">
              <div className="cirlce rounded-full w-16 mx-10 mt-10 text-white flex text-3xl items-center justify-center h-16 border-2 border-white">
                32
              </div>
              <div className="mx-10 mb-10 px-3 text-white">Data</div>
            </div>
            <div className="result-box w-10/12"></div>
            <div className="icons mr-4 flex justify-end w-10/12 gap-3 my-3">
              <svg
                onClick={Liked}
                id="like-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <svg
                id="Broom-icon"
                className="w-5 h-5 none"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6831 23.6887L23.0397 14.2127H23.5947C24.0412 14.2127 24.4009 13.853 24.4009 13.4065V7.45297C24.4009 7.00646 24.0412 6.64677 23.5947 6.64677H15.9668V1.00335C15.9668 0.556834 15.6071 0.197144 15.1606 0.197144H10.1993C9.75283 0.197144 9.39314 0.556834 9.39314 1.00335V6.64677H1.76521C1.31869 6.64677 0.959003 7.00646 0.959003 7.45297V13.4065C0.959003 13.853 1.31869 14.2127 1.76521 14.2127H2.32025L0.676832 23.6887C0.66753 23.7352 0.664429 23.7817 0.664429 23.8251C0.664429 24.2716 1.02412 24.6313 1.47063 24.6313H23.8893C23.9358 24.6313 23.9823 24.6282 24.0257 24.6189C24.466 24.5445 24.7606 24.1259 24.6831 23.6887ZM3.12955 8.81732H11.5637V2.36769H13.7963V8.81732H22.2304V12.0421H3.12955V8.81732ZM17.6412 22.4608V17.6235C17.6412 17.4871 17.5296 17.3755 17.3932 17.3755H15.9048C15.7683 17.3755 15.6567 17.4871 15.6567 17.6235V22.4608H9.70321V17.6235C9.70321 17.4871 9.59159 17.3755 9.45515 17.3755H7.96678C7.83034 17.3755 7.71871 17.4871 7.71871 17.6235V22.4608H3.09234L4.4908 14.3987H20.866L22.2645 22.4608H17.6412Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
