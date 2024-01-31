import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import { useAuthContext } from "./hooks/useAuthContext.js";
import "./App.css";
import CheckYourEmail from "./Components/CheckYourEmail/CheckYourEmail.js";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword.js";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail.jsx";
import ResetPassword from "./Components/ResetPassword/ResetPassword.js";
import ResetSuccess from "./Components/ResetSuccess/ResetSuccess.js";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage.js";
import HelpPage from "./Components/HelpPage/HelpPage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import AboutPage from "./Components/AboutPage/AboutPage.jsx";
import CreateYourAccount from "./Components/CreateYourAccount/CreateYourAccount.jsx";
import { UserAlreadyExist } from "./Components/CreateYourAccount/UserAlreadyExist.jsx";
import { UserNotExist } from "./Components/LoginPage/UserNotExist.jsx";
import EditProfile from "./Components/EditProfile/EditProfile.jsx"; // Import your AdminHome component
import AdminApp from "./AdminPages/adminApp.jsx";
import { ProtectedRoute } from "./Routs/protectedRoute.jsx";
import Github from "./scrap/Github.jsx";
import Youtube from "./scrap/Youtube.jsx";
import PlayStore  from './scrap/PlayStore.jsx'
import Wikipedia from './scrap/Wikipedia.jsx'
import Film from './scrap/Film.jsx'

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
              <Route path="/github" element={<Github />} />
              <Route path="/youtube" element={<Youtube />} />
              <Route path="/playstore" element={<PlayStore />} />
              <Route path="/wikipedia" element={<Wikipedia />} />
              <Route path="/film" element={<Film />} />

              {/* <Route path="/playstore" element={<PlayStore  />} />
              <Route path="/twitter" element={<TwitterSearch  />} />
              <Route path="/wikipedia" element={<SearchComponent  />} />
              <Route path="/film" element={<FilmSearch />} /> */}
              
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
