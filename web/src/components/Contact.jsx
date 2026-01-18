import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact" className="section section-alt">
      <div className="section-inner">
        <h1 className="section-title">Get in Touch</h1>

        <p className="contact-intro">
          I’m currently open to new opportunities. If you’d like to connect or
          discuss a project, feel free to reach out using the form below.
        </p>

        <form
          className="contact-form"
          action="https://getform.io/f/6c663468-a746-4d6e-a3f9-524acbe62774"
          method="POST"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
