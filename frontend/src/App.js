// import CheckYourEmail from "./Components/CheckYourEmail/CheckYourEmail";
// import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import LoginPage from "./Components/LoginPage/LoginPage";
// import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";
// import ResetPassword from "./Components/ResetPassword/ResetPassword";
// import ResetSuccess from "./Components/ResetSuccess/ResetSuccess";
// import HelpPage from "./Components/HelpPage/HelpPage";
// import Heading from "./Components/Heading/Heading";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import  Layout  from  '../src/layout/Layout'
import HomePage from "./Components/HomePage";
import { useAuthContext } from "./hooks/useAuthContext";




function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {" "}
          <Route path="/" element={<HomePage/> } />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
         
         <Route
            path="/favorites"
            element={user ? <FavoritesPage /> : <Navigate to="/login" />}
          />
        </Routes>
       

      </Layout>
    </BrowserRouter>
  );
};


export default App;
