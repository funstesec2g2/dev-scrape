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
import { Routes, Route, Switch } from "react-router-dom";
import {UserAlreadyExist} from "./Components/CreateYourAccount/UserAlreadyExist";
import Heading from "./Components/Heading/Heading.jsx";
function App() {
  return (
    <div className="App">
      <div>
        <Heading />
        <Routes>
          {/* <CreateYourAccount path='/createYourAccount'/> */}
          
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/favorites' element={<FavoritesPage/>}/>
          <Route path='/help' element={<HelpPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/createYourAccount' element={<CreateYourAccount/>}/>
          <Route path='/verifyEmail' element={<VerifyEmail/>}/>
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>
          <Route path='/checkYourEmail' element={<CheckYourEmail/>}/>
          <Route path='/resetPassword' element={<ResetPassword/>}/>
          <Route path='/resetSuccess' element={<ResetSuccess/>}/>
          <Route path='/userAlreadyExist' element={<UserAlreadyExist/>}/>
        
        </Routes>
        {/* <UserAlreadyExist>

        </UserAlreadyExist> */}
     
        {/* <div className="" id="login">
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
