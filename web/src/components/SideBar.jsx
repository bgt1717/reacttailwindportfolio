import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineSolution,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import "./SideBar.css";

const SideBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <>
      {/* Hamburger Menu (mobile) */}
      <AiOutlineMenu
        onClick={handleNav}
        className="hamburger-icon"
        size={48}
      />

      {/* Mobile Overlay Menu */}
      {nav && (
        <div className="mobile-nav">
          <a onClick={handleNav} href="#Home" className="mobile-link">
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>

          <a onClick={handleNav} href="#Projects" className="mobile-link">
            <AiOutlineProject size={20} />
            <span>Projects</span>
          </a>

          <a onClick={handleNav} href="#Contact" className="mobile-link">
            <AiOutlineMail size={20} />
            <span>Contact</span>
          </a>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="desktop-sidebar">
        <a href="#Home" className="sidebar-icon">
          <AiOutlineHome size={30} />
        </a>
        <a href="#Projects" className="sidebar-icon">
          <AiOutlineProject size={30} />
        </a>
        <a href="#Contact" className="sidebar-icon">
          <AiOutlineMail size={30} />
        </a>
      </div>
    </>
  );
};

export default SideBar;
