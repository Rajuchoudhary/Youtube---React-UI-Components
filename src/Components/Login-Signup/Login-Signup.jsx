import React, { useState } from "react";
import "./Login-Signup.css";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";

const renderText = [
  {
    heading: "Welcome Back!",
    description:
      "Sem nunc aliquet tellus bibendum, iaculis aliquam curabitur vitae porttitor, ligula mi voluptatum feugiat sapien lacus.",
  },
  {
    heading: "Create your Account!",
    description:
      "Sem nunc aliquet tellus bibendum, iaculis aliquam curabitur vitae porttitor, ligula mi voluptatum feugiat sapien lacus.",
  },
];

const LoginSignup = () => {
  const [form, setForm] = useState(false);

  const switchForm = () => {
    setForm(!form);
  };

  const renderForm = form === false ? <LoginForm /> : <SignupForm />;
  const btnText = form === false ? "signup" : "login";

  return (
    <div className="container">
      <section className="content">
        {/* Header Text - Start */}
        <header className="header">
          <section className="text">
            <h1 className="heading">
              {renderText[form === false ? 0 : 1].heading}
            </h1>
            <p className="description">
              {renderText[form === false ? 0 : 1].description}
            </p>
          </section>
        </header>
        {/* Header Text - End */}

        {/* User Form - Start */}
        <div className="userForm">{renderForm}</div>
        {/* User Form - End */}

        {/* Switch Form Button - Start   */}
        <button className="switch" onClick={switchForm}>
          {btnText}
        </button>
        {/* Switch Form Button - End   */}
      </section>
    </div>
  );
};

export default LoginSignup;
