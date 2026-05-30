import React from "react";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <div className="blue-line"></div>

      <p className="contact-text">
        Feel free to contact the SkyCompare team for any queries,
        feedback, or support regarding flight bookings and comparisons.
        We are always happy to help you with your travel planning.
      </p>

      <div className="contact-container form-center">

        <form className="form">

          <input type="text" placeholder="Enter Your Name" />

          <input type="email" placeholder="Enter Your Email" />

          <textarea
            rows="5"
            placeholder="Enter Your Message"
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

      <div className="bottom-bar">

        <p>✉ support@skycompare.com</p>

        <p>📞 +91 98765 43210</p>

        <p>© 2025 SkyCompare. All rights reserved.</p>

      </div>

    </div>
  );
}

export default Contact;