import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section id="Home" className="hero">
      <div className="section-inner center">
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" }}>
            Hello, I’m Bryce.
          </h1>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            I’m a{" "}
            <TypeAnimation
              sequence={[
                "Software Engineer.",
                1500,
                "Full Stack Developer.",
                1500,
                "Problem Solver.",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
