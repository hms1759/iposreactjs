import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/Landingpages/HomePage';
import Feature from './components/Landingpages/Feature';
import Contact from './components/Landingpages/Contact';
import SignUp_Index  from './components/Onboarding/SignUp_Index'
import './style.css';
import BusinessInfo from './components/Onboarding/BusinessInfo';
import OtpValidationPage from './components/Onboarding/OtpValidationPage';
import SignUpPage from './components/Onboarding/SignUpPage';

function App() {
  return <div className="App">
    <Router>
      <Routes> 
       <Route path= "/signup" element={<SignUp_Index />}/>
       <Route path= "/businessInfo" element={<BusinessInfo />}/>
       <Route path= "/password" element={<SignUpPage />}/>
       <Route path= "/otp" element={<OtpValidationPage />}/>
       <Route path= "/" element={<HomePage />} />
      <Route path= "/feature" element={<Feature />}/>
      <Route path= "/contact" element={<Contact />}/>
      <Route path= "/pricing" />
      <Route path= "/login" />
      </Routes>
     </Router>  </div>;
}

export default App;
