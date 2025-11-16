import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../styles/Login.css";

export default function Signup() {

  const navigate = useNavigate(); 
  const handleClose = () => {
    navigate(-1); 
  };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // The sign-in was successful
      await signInWithPopup(auth, provider); 
      
      // Navigate to the home page ('/') after successful login
      navigate("/profile"); 
    } catch (error) {
      // Handle Errors here.
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Also navigate to home on successful Facebook login
      navigate("/profile");
    } catch (error) {
      // Handle Errors here.
      console.error("Error during Facebook sign-in:", error);
    }
  };

  return (
    <div className="loginpage">
      <button onClick={handleClose} className="close-btn">
              <IoClose />
      </button>
      <h1 className="title">Log In</h1>
      <p className="login-sub">
        New to this site? <a href="/signup">Sign Up</a>
      </p>

      <button className="btn google" onClick={handleGoogle}>
        <FcGoogle size="20px"/>
        Log in with Google
      </button>

      <button className="btn facebook" onClick={handleFacebook}>
        <FaFacebook size="20px"/>
        Log in with Facebook
      </button>

      <div className="divider">
        <span>or</span>
      </div>

      <a className="btn email" href="/login-email">
        Log in with email
      </a>

    </div>
  );
}
