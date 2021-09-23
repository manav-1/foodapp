import "../styles/login.css";
import back from "../../assets/back.png";
import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Login() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [hiddenSignUp, setHiddenSignUp] = useState(true);
  const [hiddenlogin, setHiddenLogin] = useState(true);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarType, setSnackBarType] = useState("error");
  const [type, setType] = useState("customer");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("Ztoken");
      axios
        .post("http://127.0.0.1:3001/verifyUser", { token })
        .then((response) => {
          if (response.status === 200 && response.data) {
            history.push("/dashboard");
          }
        })
        .catch((error) => {
          var resp = error.response;
          if (resp.status === 406) {
            setOpen(true);
            setSnackBarMessage("Token Has Expired Please Login/SignUp Again");
            setSnackBarType("error");
          }
        });
    })();
  }, [history]);
  var loginBtnClick = (e) => {
    const signupBtn = document.getElementById("signup");
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
  };

  var signUpBtnClick = (e) => {
    const loginBtn = document.getElementById("login");
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
  };
  function handleSignUpClick() {
    console.log(signUpEmail, signUpPassword, signUpName);
    if (signUpName.length < 2) {
      setOpen(true);
      setSnackBarMessage("Please Enter a Proper Name");
      setSnackBarType("warning");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpEmail)) {
      setOpen(true);
      setSnackBarMessage("Wrong Email, Enter a proper Email");
      setSnackBarType("warning");
      return;
    }
    if (
      !(
        /[a-z]/g.test(signUpPassword) &&
        /[A-Z]/g.test(signUpPassword) &&
        /[0-9]/g.test(signUpPassword) &&
        signUpPassword.length > 8
      )
    ) {
      setOpen(true);
      setSnackBarMessage(
        "Wrong Password, Lowercase, Uppercase, a Digit, >8 length required"
      );
      setSnackBarType("warning");
      return;
    }
    if (signUpEmail.trim() && signUpPassword.trim() && signUpName.trim()) {
      axios
        .post("http://127.0.0.1:3001/api/signup", {
          type,
          email: signUpEmail,
          name: signUpName,
          password: signUpPassword,
        })
        .then(async (response) => {
          console.log(response.data);
          if (response.status === 200 && response.data) {
            await AsyncStorage.setItem("Ztoken", response.data.token);

            setOpen(true);
            setSnackBarMessage("Signed Up Successfully");
            setSnackBarType("success");
            history.push("/dashboard");
          }
        })
        .catch((error) => {
          console.log("response", error.response);

          var resp = error.response;

          if (resp.status === 406) {
            setOpen(true);
            setSnackBarMessage("User Already Exists, Please Login");
            setSnackBarType("error");
          } else if (resp.status === 400) {
            setOpen(true);
            setSnackBarMessage("Something went wrong, Please Try Again Later");
            setSnackBarType("error");
          }
        });
    } else {
      setOpen(true);
      setSnackBarMessage("Please fill in all fields.");
      setSnackBarType("warning");
    }
  }
  function handleLoginClick() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail)) {
      setOpen(true);
      setSnackBarMessage("Wrong Email, Enter a proper Email");
      setSnackBarType("warning");
      return;
    }
    if (
      !(
        /[a-z]/g.test(loginPassword) &&
        /[A-Z]/g.test(loginPassword) &&
        /[0-9]/g.test(loginPassword) &&
        loginPassword.length > 8
      )
    ) {
      setOpen(true);
      setSnackBarMessage(
        "Wrong Password, Lowercase, Uppercase, a Digit, >8 length required"
      );
      setSnackBarType("warning");
      return;
    }

    console.log(loginEmail, loginPassword);
    if (loginEmail.trim() && loginPassword.trim()) {
      axios
        .post("http://127.0.0.1:3001/api/login", {
          type,
          email: loginEmail,
          password: loginPassword,
        })
        .then(async (response) => {
          console.log(response.data);
          if (response.status === 200 && response.data) {
            console.log(response.data);
            await AsyncStorage.setItem("Ztoken", response.data.token);
            setOpen(true);
            setSnackBarMessage("Logged In Successfully");
            setSnackBarType("success");
            history.push("/dashboard");
          }
        })
        .catch((error) => {
          var resp = error.response;
          if (resp.status === 401) {
            setOpen(true);
            setSnackBarMessage("Wrong Email/Password, Please Try Again");
            setSnackBarType("error");
          } else if (resp.status === 400) {
            setOpen(true);
            setSnackBarMessage("Something went wrong, Please Try Again Later");
            setSnackBarType("error");
          }
        });
    } else {
      setOpen(true);
      setSnackBarMessage("Please fill in all fields.");
      setSnackBarType("warning");
    }
  }
  return (
    <div
      className={`${
        type === "customer" ? "form-container" : "form-container-restraunt"
      }`}
    >
      <button className="btn-back" onClick={() => history.push("/")}>
        <img src={back} alt="back"></img>
      </button>
      <Helmet>
        <title>Customer SignUp</title>
      </Helmet>
      <div className="form-structor">
        <div className="signup">
          <h2 onClick={signUpBtnClick} className="form-title" id="signup">
            <span>or</span>Sign up
            {`${type === "customer" ? "" : " as Restraunt"}`}
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
              type={`${hiddenSignUp ? "password" : "text"}`}
              className="input"
              placeholder="Password"
            />

            <input
              type="checkbox"
              id="showPass"
              style={{ margin: "1rem" }}
              onChange={(e) => {
                setHiddenSignUp(!e.target.checked);
              }}
            />
            <label htmlFor="showPass" style={{ fontSize: "0.8rem" }}>
              Show Password
            </label>
          </div>
          <button onClick={handleSignUpClick} className="submit-btn">
            Sign up
          </button>
        </div>
        <div className="login slide-up">
          <div className="center">
            <h2 onClick={loginBtnClick} className="form-title" id="login">
              <span>or</span>Log in
              {`${type === "customer" ? "" : " as Restraunt"}`}
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
                type={`${hiddenlogin ? "password" : "text"}`}
                className="input"
                placeholder="Password"
              />
              <input
                id="showPassLogin"
                type="checkbox"
                style={{ margin: "1rem" }}
                onChange={(e) => {
                  setHiddenLogin(!e.target.checked);
                }}
              />
              <label htmlFor="showPassLogin" style={{ fontSize: "0.8rem" }}>
                Show Password
              </label>
            </div>
            <button onClick={handleLoginClick} className="submit-btn">
              Log in
            </button>
          </div>
        </div>
      </div>
      <button
        className="r-button"
        onClick={() => setType(type === "customer" ? "Restraunt" : "customer")}
      >
        SignUp/Login as {`${type === "customer" ? "Restraunt" : "as Customer"}`}
      </button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity={snackBarType}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
