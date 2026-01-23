import React from "react";
import mepic from "../assets/me.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section id="Home" className="hero">
      <div className="hero-inner">
        <img
          src={mepic}
          alt="Bryce Townsend"
          className="hero-image"
        />

        <div className="hero-text">
          <h1>Bryce Townsend</h1>

          <p className="hero-summary">
            Full-stack software developer with a strong foundation in computer
            science. Focused on building clean, scalable web applications that
            solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
