import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">Bryce Townsend</div>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <a href="#Home">Home</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="navbar-mobile">
          <a onClick={() => setOpen(false)} href="#Home">
            Home
          </a>
          <a onClick={() => setOpen(false)} href="#Projects">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="#Contact">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
