import React from 'react';
import '../styles/SignUpEmail.css'; 
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SignUpEmail = () => {

    const navigate = useNavigate(); 
    const handleClose = () => {
    navigate(-1); 
    };

    return (
        <div className="signup-email-page">
            <div className="signup-container">
                <button onClick={handleClose} className="close-btn">
                        <IoClose />
                </button>
                <h1>Sign Up</h1>
                <p>
                Already have an account? <a href="/login">Log In</a>
                </p>
            <form>
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <div className="or-divider">or sign up with</div>
                <div className="social-login">
                    <FcGoogle size="32px"/>
                    <FaFacebook size="32px"/>
                </div>
            </div>
        </div>
    );
};
export default SignUpEmail;