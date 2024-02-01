import profilePic from "../assets/photo.jpg";
import { getUserEmail, getUserName } from "../LoginPage/LoginHelper";
import { getCookie } from "../LoginPage/LoginHelper";
import { useEffect } from "react";
import { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useLogin } from "../../hooks/useLogin";

// ... other imports

export default function EditProfile() {
  const { login } = useLogin();
  const [userName, setUserName] = useState("");
  const email = getUserEmail();
  console.log(email, "the email");
  const [password, setPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  const API = "http://localhost:5500/auth/change-name";

  const handleChange = async () => {
    try {
      console.log("this method is being called");
      const response = await fetch(API, {
        method: "POST",
        body: JSON.stringify({ email, password, newName }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("user")}`,
        },
      });

      if (response.ok) {
        const json = await response.json();
        if (json?.message === "Success") {
          console.log(email, "this is the email");
          login(email, password);
        } else {
          setError(json?.message);
        }
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setError("An unexpected error occurred");
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const user = getUserName();
      setUserName(user);
    };

    window.addEventListener("storage", handleStorageChange);
    const user = getUserName();
    setUserName(user);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <main className="bg-[#02222e] flex flex-col md:flex-row h-[85vh] justify-center gap-8 py-3">
        <aside className="rounded-xl w-full md:w-1/5 h-5/6 bg-slate-400 p-5">
          <figure className="text-center my-5">
            <img
              className="mx-auto border-4 w-48 rounded-full"
              src={profilePic}
              alt="Profile Picture"
            />
            <figcaption className="text-2xl text-cyan-800" id="username">
              {userName}
            </figcaption>
          </figure>
          <div className="flex justify-center">
            <table className="text-left w-100 text-white ">
              <tr className="w-100">
                <th>Join date</th>
                <td className="text-right ">Jul 11, 2023</td>
              </tr>
              <tr>
                <th>Times Visited</th>
                <td className="text-right " id="played-games-count">
                  13
                </td>
              </tr>
            </table>
          </div>
          <button
            className="w-full mx-auto mt-12 text-xl border rounded-3xl bg-slate-900 py-1 hover:bg-red-500 hover:text-white text-grey-500"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            Log out
          </button>
        </aside>
        <div className=" w-full md:w-3/5 h-5/6 rounded-xl bg-slate-600 text-slate-300">
          <form className="m-3 p-24" action="" method="post">
            <div className="flex justify-center">
              <label className="w-1/2 text-2xl" htmlFor="newName">
                New Name
              </label>
              <input
                placeholder="New name"
                className="p-2 w-1/2 h-10 rounded-xl text-gray-600 border-2 border-slate-500 focus:border-slate-700"
                name="newName"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="flex justify-center my-4">
              <label className="w-1/2 text-2xl" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Password"
                className="p-2 w-1/2 h-10 text-gray-600 rounded-xl border-2 border-slate-500 focus:border-slate-700"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              className="border-2 bg-slate-800 hover:bg-slate-300 hover:font-semibold hover:text-slate-800 rounded-3xl px-8 py-2 text-xl"
              onClick={(e) => {
                e.preventDefault();
                handleChange();
              }}
            >
              Edit Profile
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
