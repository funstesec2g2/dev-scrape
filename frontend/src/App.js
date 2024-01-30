import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../src/layout/Layout";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";
import CheckYourEmail from "./Components/CheckYourEmail/CheckYourEmail";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import LoginPage from "./Components/LoginPage/LoginPage";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ResetSuccess from "./Components/ResetSuccess/ResetSuccess";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage";
import HelpPage from "./Components/HelpPage/HelpPage";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import CreateYourAccount from "./Components/CreateYourAccount/CreateYourAccount";
import { UserAlreadyExist } from "./Components/CreateYourAccount/UserAlreadyExist";
import Heading from "./Components/Heading/Heading.jsx";
import { UserNotExist } from "./Components/LoginPage/UserNotExist";
import EditProfile from "./Components/EditProfile/EditProfile.jsx";
import ProfileDropdown from "./Components/ProfileDropdown/ProfileDropdown.jsx";
import AdminHome from "./AdminPages/adminHome.jsx"; // Import your AdminHome component
import AdminApp from "./AdminPages/adminApp.jsx";
import AdminHeader from "./AdminPages/adminHeader.jsx";
import AdminSidebar from "./AdminPages/adminSidebar.jsx";
import RequireAuth from "./AuthComponent/RequireAuth.jsx";
import { AdminPrivateRoute } from "./AdminPages/adminAuthContext.js";
import { ProtectedRoute } from "./Routs/protectedRoute.jsx";
import { authContext } from "./context/authContext.js";
import { deleteCookie, getCookie, getUserEmail } from "./Components/LoginPage/LoginHelper.js";
import PlayStore from './scrap/playstore/PlayStore.jsx'
import TwitterSearch from "./Components/Twitter/Twitter.jsx";
import SearchComponent from "./scrap/playstore/Wikipedia.jsx";
import FilmSearch from "./scrap/playstore/Film.jsx";
function App() {
  // deleteCookie('user');
  // const user = getCookie('user');
  // console.log(user);
  // const useEmail = getUserEmail();
  // console.log(useEmail);

  const { user } = useAuthContext();

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Layout>
            {/* <Heading /> */}
            <Routes>
              <Route path="/editProfile" element={<EditProfile />} />
              <Route path="/" element={<HomePage />} />
              <Route
                path="/login"
                element={!user ? <LoginPage /> : <Navigate to="/" />}
              />
              <Route
                path="/favorites"
                element={user ? <FavoritesPage /> : <Navigate to="/login" />}
              />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/createYourAccount"
                element={<CreateYourAccount />}
              />
              <Route path="/verifyEmail" element={<VerifyEmail />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/checkYourEmail" element={<CheckYourEmail />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/resetSuccess" element={<ResetSuccess />} />
              <Route path="/userAlreadyExist" element={<UserAlreadyExist />} />
              <Route path="/userNotExist" element={<UserNotExist />} />
              <Route path="/playstore" element={<PlayStore  />} />
              <Route path="/twitter" element={<TwitterSearch  />} />
              <Route path="/wikipedia" element={<SearchComponent  />} />
              <Route path="/film" element={<FilmSearch />} />
              
              {/* Admin protected pages  */}

              <Route path="" element={<ProtectedRoute role='admin'/>}>
                  <Route path="/admin" element={<AdminApp/>} />
              </Route>

              {/* <Route element={
                <AdminPrivateRoute>
              <Route path="/admin" element={<AdminApp/>} />
              <Route path="/adminHome" element={<AdminHome/>} />
              <Route path="/adminHeader" element={<AdminHeader/>} />
              <Route path="/adminSidebar" element={<AdminSidebar/>} />
                </AdminPrivateRoute>
              }>
              </Route> */}

              
              
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
