import React from "react";
import google from "../Data/google.png";
import react from "../Data/React-icon.svg.png";
import facebook from "../Data/facebook.png";
import twitter from "../Data/twitter.png";
import "./User.css";

const Users = () => {
  return (
    <div className="users">
      <div className="react-logo">
        <img src={react} alt="" />
      </div>
      <div className="text">
        SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
      </div>
      <div className="login-signup">
        <div className="login"> Login</div>
        <div className="signup"> Signup</div>
      </div>
      <div className="input">
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Password" />
      </div>
      <div className="login">
        <button>LOGIN</button>
        <p>Fogot Password ?</p>
      </div>
      <div className="login-option">or login with</div>
      <div className="social-media">
        <img src={google} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
      <div className="account">
        <span>Don't have an account ?</span>
        <span style={{ color: "#e70b89" }}>Create new now !</span>
      </div>
      <div className="tc">
        <span>By signing up, you are agree with our</span>
        <span style={{ color: "#e70b89" }}>Terms and conditions </span>
      </div>
    </div>
  );
};

export default Users;
