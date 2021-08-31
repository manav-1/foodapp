import "../styles/login.css";
import back from "../../assets/back.png";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Login({ navigation }) {
  const [loginEmail, setLoginEmail] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const [signUpName, setSignUpName] = useState(null);
  const [signUpPassword, setSignUpPassword] = useState(null);
  const [signUpEmail, setSignUpEmail] = useState(null);

  useEffect(() => {
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");

    loginBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode.parentNode;
      Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
          parent.classList.add("slide-up");
        } else {
          signupBtn.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
        return null;
      });
    });

    signupBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
          parent.classList.add("slide-up");
        } else {
          loginBtn.parentNode.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
        return null;
      });
    });
  });

  function handleSignUpClick() {
    console.log(signUpEmail, signUpPassword, signUpName);
  }
  function handleLoginClick() {
    console.log(loginEmail, loginPassword);
  }
  return (
    <div className="form-container">
      <button className="btn-back" onClick={() => navigation.goBack()}>
        <img src={back} alt="back"></img>
      </button>
      <Helmet>
        <title>Customer SignUp</title>
      </Helmet>
      <div className="form-structor">
        <div className="signup">
          <h2 className="form-title" id="signup">
            <span>or</span>Sign up
          </h2>
          <div className="form-holder">
            <input
              value={signUpName}
              onInput={(e) => setSignUpName(e.target.value)}
              type="text"
              className="input"
              placeholder="Name"
            />
            <input
              value={signUpEmail}
              onInput={(e) => setSignUpEmail(e.target.value)}
              type="email"
              className="input"
              placeholder="Email"
            />
            <input
              value={signUpPassword}
              onInput={(e) => setSignUpPassword(e.target.value)}
              type="password"
              className="input"
              placeholder="Password"
            />
          </div>
          <button onClick={handleSignUpClick} className="submit-btn">
            Sign up
          </button>
        </div>
        <div className="login slide-up">
          <div className="center">
            <h2 className="form-title" id="login">
              <span>or</span>Log in
            </h2>
            <div className="form-holder">
              <input
                value={loginEmail}
                onInput={(e) => setLoginEmail(e.target.value)}
                type="email"
                className="input"
                placeholder="Email"
              />
              <input
                value={loginPassword}
                onInput={(e) => setLoginPassword(e.target.value)}
                type="password"
                className="input"
                placeholder="Password"
              />
            </div>
            <button onClick={handleLoginClick} className="submit-btn">
              Log in
            </button>
          </div>
        </div>
      </div>
      <button
        className="r-button"
        onClick={() => navigation.push("Restraunt SignUp")}
      >
        SignUp/Login as Restraunt
      </button>
    </div>
  );
}
