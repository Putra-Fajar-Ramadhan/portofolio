import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark neon-navbar ${isOpen ? 'menu-open' : ''}`}
      data-aos="fade-down"
    >
      <div className="container">
        <a className="navbar-brand text-purple" href="#home">Portfolio</a>
        <button
          className={`navbar-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            {['about', 'projects', 'skills', 'contact'].map((section, i) => (
              <li key={section} className="nav-item">
                <a
                  href={`#${section}`}
                  className="nav-link nav-link-neon"
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
