import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section id="Home" className="hero">
      <div className="section-inner center">
        <div style={{ textAlign: "center", padding: "0 1rem" }}>
          <h1>Hello, I’m Bryce.</h1>

          <h2>
            I’m a{" "}
            <TypeAnimation
              sequence={[
                "Data analyst.",
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
