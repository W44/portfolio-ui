import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null); // null (default), 'success', or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:arslaan_asad@hotmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;

    // Try opening the email client
    try {
      window.location.href = mailtoLink;
      setFormStatus("success"); // Email was triggered
    } catch (error) {
      setFormStatus("error"); // Email failed
    }
  };

  return (
    <footer className="footer">
      <div id="contact" className="footer-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact</h3>
          <p>📍 Kastarikatu 1, Ispuri Building I, 20810 Turku, Finland</p>
          <p>
            📧{" "}
            <a
            href="mailto:arslaan_asad@hotmail.com"
            onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText("arslaan_asad@hotmail.com");
            alert("Email copied to clipboard!");
            }}
            >
                arslaan_asad@hotmail.com
            </a>
            </p>
            <p>
            📞{" "}
          <a
            href="tel:+358417408350"
            onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText("+358417408350");
            alert("Phone number copied to clipboard!");
            }}
            >
            (+358) 417408350
         </a>
         </p>
          <p>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/arslaan-asad-8663101b4"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div> Developed By Arslaan Asad @2025</div>
        {/* Contact Form or Status Message */}
       {/* 
        <div className="contact-form">
          {formStatus === "success" ? (
            <h3 className="success-message">✅ Email Sent Successfully!</h3>
          ) : formStatus === "error" ? (
            <h3 className="error-message">
              ❌ Email sending failed. Please contact manually at{" "}
              <a href="mailto:arslaan_asad@hotmail.com">
                arslaan_asad@hotmail.com
              </a>
            </h3>
          ) : (
            <>
              <h3>Send Me a Message</h3>
              <form action="https://formsubmit.co/arslaan_asad@hotmail.com" method="POST" onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  onChange={handleChange}
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </>)} 
          
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
