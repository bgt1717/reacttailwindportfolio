import React from "react";
import mepic from "../assets/me.jpg";
import "./animations.css";

function About() {
  return (
    <section id="About" className="section">
      <div className="section-inner">
        <h1 className="section-title">Professional Summary</h1>

        <div className="about-grid">
          <p>
            Bachelor of Science in Computer Science graduate from Texas State
            University with hands-on experience in full-stack web development.
            Experienced in building responsive, scalable applications with a
            strong emphasis on clean architecture, maintainable code, and
            real-world problem solving.
          </p>

          <img
            src={mepic}
            alt="Portrait of Bryce Townsend"
            className="animate-profile_animate"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
