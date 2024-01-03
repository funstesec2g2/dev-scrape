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

function App() {
  return (
    <div className="App">
      <div>
        <div id="login">
          <LoginPage />
        </div>

        <div className="hidden" id="forgotPassword">
          <ForgotPassword />
        </div>

        <div className="hidden" id="resetPassword">
          <ResetPassword />
        </div>

        <div className="hidden" id="resetSuccess">
          <ResetSuccess />
        </div>

        <div className="hidden" id="verifyEmail">
          <VerifyEmail />
        </div>

        <div className="hidden" id="checkYourEmail">
          <CheckYourEmail />
        </div>

        <div className="hidden" id="homePage">
          <HomePage />
        </div>

        <div className="hidden" id="favoritesPage">
          <FavoritesPage />
        </div>

        <div className="hidden" id="helpPage">
          <HelpPage />
        </div>

        <div className="hidden" id="aboutPage">
          <AboutPage />
        </div>
      </div>
    </div>
  );
}

export default App;
