import React from "react";
import "./Home.css";
import profileImg from "../assets/me.jpg";

const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="home-container">
        <img
          src={profileImg}
          alt="Bryce Townsend portrait"
          className="home-image"
        />

        <div className="home-content">
          <h1>Hi, I’m Bryce Townsend</h1>

          <p>
            Computer Science graduate focused on building clean, scalable
            full-stack web applications with real-world impact.
          </p>

          <div className="home-buttons">
            <a
              href="https://github.com/bgt1717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn secondary">GitHub</button>
            </a>

            <a
              href="https://docs.google.com/document/d/YOUR_RESUME_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn primary">View Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
