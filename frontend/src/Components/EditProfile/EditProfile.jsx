import profilePic from "./image/profile-pic.jpg";
export default function EditProfile() {
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
            <figcaption className="text-2xl" id="username">
              User Name
            </figcaption>
          </figure>
          <table className="text-left w-100 ">
            <tr className="w-100">
              <th>Join date</th>
              <td className="text-right">Jul 11, 2023</td>
            </tr>
            <tr>
              <th>Times Visited</th>
              <td className="text-right " id="played-games-count">
                13
              </td>
            </tr>
          </table>
          <button className="w-full mx-auto mt-12 text-xl border rounded-3xl bg-pink-200 py-1 hover:bg-red-500 hover:text-white text-red-500">
            Log out
          </button>
        </aside>
        <div className=" w-full md:w-3/5 h-5/6 rounded-xl bg-slate-600 text-slate-300">
          <form className="m-3 p-24" action="" method="post">
            <div className="flex justify-center">
              <label className="w-1/2 text-2xl" for="">
                Username
              </label>
              <input
                placeholder="User name"
                className="p-2 w-1/2 h-10 rounded-xl text-gray-600 border-2 border-slate-500 focus:border-slate-700"
                name="username"
                type="text"
              />
            </div>
            <div className="flex justify-center my-4">
              <label className="w-1/2 text-2xl" for="">
                Password
              </label>
              <input
                placeholder="Password"
                className="p-2 w-1/2 h-10 text-gray-600 rounded-xl border-2 border-slate-500 focus:border-slate-700"
                name="username"
                type="password"
              />
            </div>
            <p className="text-center my-5">
              <input
                className="border-2 bg-slate-800 hover:bg-slate-300 hover:font-semibold hover:text-slate-800 rounded-3xl px-8 py-2 text-xl"
                value="Update"
                type="submit"
              />
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
