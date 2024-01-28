import "./HomePage.css";
import { useState } from "react";
import ResultCards from "../ResultCards/ResultCards.jsx";
import Suggestion from "../Suggestions/Suggestions.jsx";

function HomePage(props) {
  const [result, setResult] = useState({
    items: [{ id: "", html_url: "", description: "" }],
  });
  const [location, setLocation] = useState("GitHub");
  const [numOfResults, setnumOfResults] = useState(0);
  let counter = 0;

  function generateSuggestions() {
    const lst = [];
    for (let i = 0; i < 4; i++) {
      lst.push(<Suggestion key={i} func={handleSearch} />);
    }
    return lst;
  }

  function handleSearch(term) {
    switch (location) {
      case "GitHub":
        fetch(`https://api.github.com/search/repositories?q=${term}`, {
          headers: {
            Authorization: "Token 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",
          },
        })
          .then((res) => res.json())
          .then((data) => setResult(data))
          .catch((err) => console.log(err));
        break;
      case "Twitter":
        console.log("Twitter is loaded");
        break;
      case "Play Store":
        console.log("Play Store is loaded");
        break;
      default:
        break;
    }
  }

  return (
    <>
      {/* <header>
        <Heading />
      </header> */}
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
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  <option value="GitHub">GitHub</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Play Store">Play Store</option>
                </select>
              </div>
            </div>

            <div className="w-100 h-1 line my-10"></div>

            <div className="w-9/12 m-auto">
              <h2 className="my-5 text-white">Enter terms to scrape</h2>

              <div className="text-black text-center ">
                <form>
                  <label htmlFor="name"> </label>

                  <input
                    id="term"
                    type="text"
                    name="name"
                    className="w-full p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter terms here"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSearch(e.target.value || "null");
                      }
                    }}
                  />
                </form>
              </div>
            </div>

            <div className="w-100 h-1 line mb-5 mt-10"></div>

            <div className="suggestions-container grid md:grid-cols-1 grid-cols-2 ">
              {generateSuggestions()}
            </div>
          </div>
          <div className="textbox md:col-span-8 col-span-12 flex flex-col items-center w-full">
            <div className="data flex  w-full">
              <div className="cirlce rounded-full w-16 mx-10 mt-10 text-white flex text-3xl items-center justify-center h-16 border-2 border-white">
                {numOfResults}
              </div>
              <div className="mx-10 mb-10 px-3 text-white">Data</div>
            </div>

            <div
              className="result-box flex flex-col items-center p-7 w-10/12 rounded-3xl"
              id="result-box"
            >
              {result.items.map((item) => {
                if (item.description) {
                  counter++;
                  return <ResultCards key={item.id} resultContent={item} />;
                }
                return <div key={item.id}></div>;
              })}

              {!counter ? (
                <div className="font-bold text-slate-900 text-xl">
                  Empty/No Results
                </div>
              ) : null}

              {counter !== numOfResults ? setnumOfResults(counter) : null}
            </div>

            <div className="icons mr-4 flex justify-end w-10/12 gap-3 my-3">
              <svg
                id="Broom-icon"
                className="w-8 h-5 none hover:bg-red-600"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setnumOfResults(0);
                  setResult({
                    items: [{ id: "", html_url: "", description: "" }],
                  });
                }}
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
