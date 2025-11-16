import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../styles/Signup.css";

export default function Signup() {
  const [showMore, setShowMore] = useState(false); 

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
    <div className="signuppage">
      <button onClick={handleClose} className="close-btn">
        <IoClose />
      </button>
      <h1 className="title">Sign Up</h1>
      <p className="signup-sub">
        Already a member? <a href="/login">Log In</a>
      </p>

      <button className="btn google" onClick={handleGoogle}>
        <FcGoogle size="20px"/>
        Sign up with Google
      </button>

      <button className="btn facebook" onClick={handleFacebook}>
        <FaFacebook size="20px"/>
        Sign up with Facebook
      </button>

      <div className="divider">
        <span>or</span>
      </div>

      <a className="btn email" href="/signup-email">
        Sign up with email
      </a>

      <div className="checkbox-section">
        <div className="checkbox-row">
          <input type="checkbox" defaultChecked />
          <p className="readmoretext">
            Sign up to this site with a public profile.{" "}
            <button
              className="readmore-btn"
              type="button"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read less" : "Read more"}
            </button>
          </p>
        </div>

        {showMore && (
          <p className="expanded-text">
            Your profile will be set to public automatically when you sign up.
            You can change this later in your profile settings.
          </p>
        )}
      </div>
    </div>
  );
}
