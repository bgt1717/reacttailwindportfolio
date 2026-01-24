import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Load theme ONCE
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setDark(prev => {
      const next = !prev;

      if (next) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">Bryce Townsend</div>

        <nav className="navbar-links">
          <a href="#Home">Home</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>

        <div className="navbar-actions">
          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="icon-btn navbar-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar-mobile">
          <a onClick={() => setOpen(false)} href="#Home">Home</a>
          <a onClick={() => setOpen(false)} href="#Projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#Contact">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
