import React from "react";
import "./Home.css";
import profileImg from "../assets/me.jpg";

const Home = () => {
  return (
<section className="hero" id="Home">
  <div className="hero-inner">
    <img
      src={profileImg}
      alt="Bryce Townsend portrait"
      className="hero-image"
    />

    <div className="hero-text">
      <h1>Hi, I’m Bryce Townsend</h1>

      <p className="hero-summary">
        Computer Science graduate focused on building clean, scalable full-stack
        web applications with real-world impact.
      </p>

      <div className="hero-actions">
        <a
          href="https://github.com/bgt1717"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-btn secondary">GitHub</button>
        </a>

        <a
          href="https://docs.google.com/document/d/YOUR_RESUME_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-btn primary">View Resume</button>
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default Home;
