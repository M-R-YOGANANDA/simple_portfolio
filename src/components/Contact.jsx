import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Write your message here..." rows="5" required></textarea>
          <button type="submit" className="get-in-touch-btn">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://github.com/example" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="#" target="_blank">LINKEDIN</a>
          <a href="#" target="_blank">TWITTER</a>
        </div>

        <footer className="footer">
          <div className="footer-brand">PORTFOLIO.V3</div>
          <p>© 2026 Engineering Student Portfolio • Designed by [Your Name]</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;