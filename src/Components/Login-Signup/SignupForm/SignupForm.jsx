import React from "react";
import "./SignupForm.css";
import InputBox from "../Form Elements/InputBox/InputBox";
import Button from "../Button/Button";

const SignupForm = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="details">
        <InputBox
          id="fname"
          label="first name"
          placeholder="Enter your first name"
        />
        <InputBox
          id="lname"
          label="last name"
          placeholder="Enter your last name"
        />
      </div>

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

      <Button text="sign up" />
    </form>
  );
};

export default SignupForm;
