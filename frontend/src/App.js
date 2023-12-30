import CheckYourEmail from "./Components/CheckYourEmail/CheckYourEmail";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import LoginPage from "./Components/LoginPage/LoginPage";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ResetSuccess from "./Components/ResetSuccess/ResetSuccess";

function App() {
  return (
    <div className="App">
      <div>
        <ForgotPassword />
        <CheckYourEmail />
        <LoginPage />
        <VerifyEmail />
        <ResetPassword />
        <ResetSuccess />
      </div>
    </div>
  );
}

export default App;
