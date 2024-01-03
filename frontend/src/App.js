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
function App() {
  return (
    <div className="App">
      <div>
        <div className="" id="login">
          <HomePage />
          <LoginPage />
        </div>

        <div className="hidden" id="createYourAccount">
          <CreateYourAccount />
        </div>

        <div className="hidden" id="verifyEmail">
          <VerifyEmail />
        </div>

        <div className="hidden" id="forgotPassword">
          <ForgotPassword />
        </div>

        <div className="hidden" id="checkYourEmail">
          <CheckYourEmail />
        </div>

        <div className="hidden" id="resetPassword">
          <ResetPassword />
        </div>

        <div className="hidden" id="resetSuccess">
          <ResetSuccess />
        </div>

        <div className="active-page" id="Scrape">
          <HomePage />
        </div>

        <div className="hidden" id="Favorites">
          <FavoritesPage />
        </div>

        <div className="hidden" id="Help">
          <HelpPage />
        </div>

        <div className="hidden" id="About">
          <AboutPage />
        </div>
      </div>
    </div>
  );
}

export default App;
