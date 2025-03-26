import { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ activeSection, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#hero" className="logo">
          <span>SLD</span>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a
            href="#hero"
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Experience
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#education"
            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Education
          </a>
          <a
            href="#certifications"
            className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Certifications
          </a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
