"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>
            Hali<span>Mah</span>
          </h1>
        </Link>

        <div
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-btn__burger"></div>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="/#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="/#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="/#resume" className="nav-link">
                Resume
              </a>
            </li>
            <li>
              <a href="/#certificates" className="nav-link">
                Certificates
              </a>
            </li>
            <li>
              <a href="/#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
