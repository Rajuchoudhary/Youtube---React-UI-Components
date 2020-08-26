import React from "react";
import "./LoginForm.css";
import InputBox from "../Form Elements/InputBox/InputBox";
import Button from "../Button/Button";

const LoginForm = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <InputBox
        id="email"
        label="email"
        type="email"
        placeholder="Enter your email"
      />
      <InputBox
        id="password"
        label="password"
        type="password"
        placeholder="Enter your password"
      />
      <div className="login-extra">
        <div className="login-checkbox">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="rememberme">
            remember me
          </label>
        </div>
        <a href="localhost:3000" className="login-link">
          forgot password?
        </a>
      </div>
      <Button text="login" />
    </form>
  );
};

export default LoginForm;
