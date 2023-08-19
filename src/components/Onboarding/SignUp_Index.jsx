import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BusinessInfo from "./BusinessInfo";
import SignUpPage from "./SignUpPage";
import "./Onboarding.css";
import OtpValidationPage from "./OtpValidationPage";
import CongratulationPage from "./CongratulationPage";
import axios from "axios";
import OnboardingUrl from "./OnboardingUrl";

export default function SignUp_Index() {
  const [page, setPages] = useState(1);

  const baseURL = "https://localhost:62403/api/business/";
  // States for checking the errors
  const [signup, setSignup] = useState({
    LastName: "",
    FirstName: "",
    Email: "",
    PhoneNumber: "",
    ContactName: "",
    Name: "",
    ContactTel: "",
    Address: "",
    Businesstype: "",
    State: "",
    Country: "",
    Password: "",
  });

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactName, setContactName] = useState("");
  const [name, setName] = useState("");
  const [contactTel, setContactTel] = useState("");
  const [address, setAddress] = useState("");
  const [businesstype, setBusinesstype] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  const instance = axios.create({
    baseURL: "",
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
  const SuccessMessage = (event) => {
    toast.success(event, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const ErrorMessage = (event) => {
    toast.error(event, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  function numberOff(event) {
    const newpage = [event];
    console.log(newpage);
    setPages(newpage);
  }

  function addPersonalInfo(onboard) {
    console.log(onboard, "personal");
    const ContactName = onboard.lastName + " " + onboard.firstName;
    const user = JSON.stringify({
      Email: onboard.email,
      PhoneNumber: onboard.phone,
      ContactName: ContactName,
    });
    setLastName(onboard.lastName);
    setFirstName(onboard.firstName);
    setEmail(onboard.email);
    setPhoneNumber(onboard.phone);
    setContactName(ContactName);
    
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = baseURL + OnboardingUrl.personalInfo;

    instance
      .post(url, user, customConfig)
      .then((response) => {
        console.log(response, response.code, response.description);
        if (response.data.code === 1) {
          SuccessMessage(response.data.description);
          numberOff(2);
        } else {
          
          ErrorMessage(response.data.description);
        }
      })
      .catch((error) => {
        console.log(error);
        ErrorMessage(error.response.data.description);
      });
  }

  function addBusinessInfo(onboard) {
    const business = JSON.stringify({
      Name: onboard.businessName,
      ContactTel: onboard.businesPhone,
      Country: onboard.businessCountry,
      City: onboard.businessState,
      Address: onboard.businessAddress,
      CategoryOfBusiness: onboard.businessType,
      NatureOfBusiness: onboard.phone,
    });
    setName(onboard.businessName);
    setContactTel(onboard.businesPhone);
    setAddress(onboard.businessAddress);
    setBusinesstype(onboard.businessType);
    setState(onboard.businessState);
    setCountry(onboard.businessCountry);
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(onboard);
    let url = baseURL + OnboardingUrl.businessInfo;
    instance
      .post(url, business, customConfig)
      .then((response) => {
        console.log(response, response.code, response.description);
        if (response.data.code === 1) {
          SuccessMessage(response.data.description);
          numberOff(3);
        } else {
          ErrorMessage(response.data.description);
        }
      })
      .catch((error) => {
        console.log(error);
        ErrorMessage(error.response.data.description);
      });
  }
  function addPasswordInfo(onboard) {
    console.log(onboard, "signup");
    
    setPassword(onboard.password);

    const signup = JSON.stringify({
      LastName: lastName,
      FirstName: firstName,
      Email:email,
      PhoneNumber:phoneNumber,
      ContactName: contactName,
      Name: name,
      ContactTel: contactTel,
      Address: address,
      Businesstype: businesstype,
      State: state,
      Country: country,
      Password:onboard.password
    });
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = baseURL + OnboardingUrl.signUp;
    console.log(signup)
    instance
      .post(url, signup, customConfig)
      .then((response) => {
        console.log(response, response.code, response.description);
        if (response.data.code === 1) {
          SuccessMessage(response.data.description);
          numberOff(4);
        } else {
          ErrorMessage(response.data.description);
        }
      })
      .catch((error) => {
        console.log(error);
        ErrorMessage(error.response.data.description);
      });
  }

  function validateOtp(onboard) {
    console.log(onboard, "otp");
    //  showToastMessage("otp");
    numberOff(5);
  }
  function handleCongrat(onboard) {
    console.log(onboard, "congrat");
  }
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      {/* <OnboardingNav/> */}

      <div className="onboarding_body">
        <div className="onboarding_content">
          <div className={page != 5 ? "top_smg" : "isPagehide"}>
            <div className="progress_number">{page} of 4</div>
            <div className="progress_bar">
              <div
                className={
                  page >= 1 ? "progress_bar_item" : "progress_bar_empty"
                }
              ></div>
              <div
                className={
                  page >= 2 ? "progress_bar_item" : "progress_bar_empty"
                }
              ></div>
              <div
                className={
                  page >= 3 ? "progress_bar_item" : "progress_bar_empty"
                }
              ></div>
              <div
                className={
                  page >= 4 ? "progress_bar_item" : "progress_bar_empty"
                }
              ></div>
            </div>
          </div>
          <div className={page != 1 ? "isPagehide" : ""}>
            <PersonalInfo onSubmit={addPersonalInfo} />
          </div>
          <div className={page != 2 ? "isPagehide" : ""}>
            <BusinessInfo onSubmit={addBusinessInfo} />
          </div>

          <div className={page != 3 ? "isPagehide" : ""}>
            <SignUpPage onSubmit={addPasswordInfo} />
          </div>
          <div className={page != 4 ? "isPagehide" : ""}>
            <OtpValidationPage onSubmit={validateOtp} />
          </div>

          <div className={page != 5 ? "isPagehide" : ""}>
            <CongratulationPage onSubmit={handleCongrat} />
          </div>
        </div>
      </div>
    </>
  );
}
