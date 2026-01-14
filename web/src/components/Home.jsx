import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import atx from "../assets/atx.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section id="Home" className="home">
      <img className="home-bg" src={atx} alt="Austin skyline" />

      <div className="home-overlay">
        <div className="home-card">
          <h1 className="home-title">Hello. I'm Bryce.</h1>

          <h2 className="home-subtitle">
            I'm a
            <TypeAnimation
              sequence={[
                " programmer.",
                1000,
                " data analyst.",
                1000,
                " React enthusiast.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <a
            href="https://drive.google.com/file/d/1rYY3pt9xF1W8wkVrhJiwTJX9ma1c9Mtt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <span>Resume</span>
          </a>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/bryce-townsend-426289237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={30} />
            </a>

            <a
              href="https://github.com/bgt1717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
