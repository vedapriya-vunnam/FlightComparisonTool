import React from "react";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-box">

        <h1>Login</h1>

        <div className="blue-line"></div>

        <form className="form">

          <input type="email" placeholder="Enter Your Email" />

          <input type="password" placeholder="Enter Your Password" />

          <button type="submit">Login</button>

        </form>

        <p className="bottom-text">
          Don’t have an account? <span>Sign Up</span>
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

export default Login;