import React from 'react';
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    }).catch((error) => {
      console.error("Google Sign-In Error: ", error);
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="google-login" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
