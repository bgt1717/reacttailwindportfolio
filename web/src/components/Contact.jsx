import React from "react";
import "./Contact.css";

const Contact = () => (
  <section className="contact-section">
    <div id="Contact" className="contact-container">
      <h1 className="contact-title">Contact</h1>

      <form
        action="https://getform.io/f/6c663468-a746-4d6e-a3f9-524acbe62774"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="contact-grid">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="10" name="message"></textarea>
        </div>

        <button type="submit" className="contact-submit">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
