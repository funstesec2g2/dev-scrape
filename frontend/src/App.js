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
import Profile from "./Components/Profile-dropdown/Profile-dropdown.jsx";
import EditProfile from "./Components/EditProfile/EditProfile.jsx";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Layout>
            {/* <Heading /> */}
            <Routes>
              <Route path="/editProfile" element={<EditProfile />} />
              <Route path="/profile" element={<Profile />} />
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
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
