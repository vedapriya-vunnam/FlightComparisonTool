import React from "react";

function Signup() {
  return (
    <div className="auth-page">

      <div className="auth-box">

        <h1>Create Account</h1>

        <div className="blue-line"></div>

        <form className="form">

          <input type="text" placeholder="Enter Your Name" />

          <input type="email" placeholder="Enter Your Email" />

          <input type="password" placeholder="Enter Your Password" />

          <input type="password" placeholder="Confirm Your Password" />

          <button type="submit">Sign Up</button>

        </form>

        <p className="bottom-text">
          Already have an account? <span>Login</span>
        </p>

      </div>

      <div className="bottom-bar">

        <p>✉ support@skycompare.com</p>

        <p>📞 +91 98765 43210</p>

        <p>© 2025 SkyCompare. All rights reserved.</p>

      </div>

    </div>
  );
}

export default Signup;