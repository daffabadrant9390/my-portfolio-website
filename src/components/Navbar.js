import "../App.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo-brand">Portfolio</div>

      {/* Hamburger Menu */}
      <div
        className={menuOpen ? "hamburger-menu open" : "hamburger-menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "nav-list menu-block" : "nav-list"}>
        <li className="list-item">
          <a href="#about-section">About Me</a>
        </li>
        <li className="list-item">
          <a href="#interest-section">Interests</a>
        </li>
        <li className="list-item">
          <a href="#projects-section">Projects</a>
        </li>
        <li className="list-item">
          <a href="#skills-section">Skills</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
