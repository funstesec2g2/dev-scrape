import CheckYourEmail from "./Components/CheckYourEmail/CheckYourEmail";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import LoginPage from "./Components/LoginPage/LoginPage";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ResetSuccess from "./Components/ResetSuccess/ResetSuccess";
import HelpPage from "./Components/HelpPage/HelpPage";
import Heading from "./Components/Heading/Heading";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <div>
        <HomePage/>
        {/* <ForgotPassword />
        <CheckYourEmail />
        <LoginPage />
        <VerifyEmail />
        <ResetPassword />
        <ResetSuccess />
        <HelpPage />
        <Heading />
        <FavoritesPage /> */}
      </div>
    </div>
  );
}

export default App;
