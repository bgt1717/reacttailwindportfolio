import React from "react";
import mepic from "../assets/me.jpg";
import "./About.css";
import "./animations.css";

function About() {
  return (
    <section className="about-section">
      <div id="About" className="about-container">
        <h1 className="about-title">Professional Summary</h1>

        <div className="about-content">
          <div className="about-text">
            <p>
              Bachelor of Science in Computer Science graduate from Texas State
              University with hands-on experience in full-stack web development.
              Proven ability to build responsive, scalable applications across
              modern front-end and back-end technologies, with an emphasis on
              clean code, maintainability, and real-world problem solving.
            </p>
          </div>

          <img
            className="profile-image animate-profile_animate"
            src={mepic}
            alt="Portrait of Bryce Townsend"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
