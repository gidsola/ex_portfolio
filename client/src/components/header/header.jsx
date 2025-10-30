
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const
    [isMenuOpen, setIsMobileMenuOpen] = useState(false),
    [headerLinks, setHeaderLinks] = useState([]);

  useEffect(() => {
    async function fetchLinks() {
      const res = await fetch('/api/test');
      if (res.ok) {
        const links = await res.json();
        setHeaderLinks(links.navlinks);
      }
      else console.log("Failed to fetch links");
    };
    fetchLinks();
  }, []);

  return (
    <header className="header">
      <div className="header-container">

        <div className="mobile-header">
          <button
            className="leaf-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <img
              width={80}
              height={80}
              src="/images/leaf.png"
              alt="Menu"
              // priority={true}
              className={isMenuOpen ? "leaf-icon open" : "leaf-icon"}
            />
          </button>

          <div className={`mobile-nav-container ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className="mobile-nav-content">
              <ul className="mobile-nav-list">
                {headerLinks.map(([name, path]) => (
                  <li key={name} className="mobile-nav-item">
                    <Link
                      to={path}
                      className="mobile-nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Link to="/">
          <img
            className="desktop-logo"
            width={150}
            height={50}
            src="/images/logo_goodie.png"
            alt="Logo"
          // priority={true}
          />
        </Link>
        <div className="nav-container">
          <ul className="nav-list">
            {headerLinks.map(([name, path]) => (
              <li key={name}>
                <Link to={path} className="nav-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
};
