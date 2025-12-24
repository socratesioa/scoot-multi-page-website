import { useState, useEffect, useRef } from "react";
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icons/hamburger.svg';
import closeIcon from '../../assets/images/icons/close.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 700;
      setIsMobile(mobile);

      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || !isMobile || !navRef.current) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea',
      'input[type="text"]',
      'input[type="radio"]',
      'input[type="checkbox"]',
      'select'
    ];

    const focusableEls = Array.from(
      navRef.current.querySelectorAll(focusableSelectors.join(','))
    );

    if (!focusableEls.length) return;

    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        return;
      }

      if (e.key !== 'Tab') return;

      if (document.activeElement === navRef.current) {
        e.preventDefault();
        firstEl.focus();
        return;
      }

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    navRef.current.setAttribute('tabIndex', '-1');
    navRef.current.focus({ preventScroll: true });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      navRef.current.removeAttribute('tabIndex');
    };
  }, [menuOpen, isMobile]);


  return (
    <header>
      <div className="header__container">
        {isMobile && (
          <button
            type='button'
            className='hamburger'
            aria-label={menuOpen ? 'Close Navigation menu' : 'Open Navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <img src={menuOpen ? closeIcon : hamburger} alt="" />
          </button>
        )}

        <Link to='/' className="logo__link" aria-label='Go to Homepage'>
          <img
            src={logo}
            className='header__logo'
            alt='Scoot Logo'
            width="76"
            height="20"
            loading='eager'
            decoding='async'
          />
        </Link>

        <nav
          id="primaryNav"
          ref={navRef}
          className={`primary__nav-container ${menuOpen ? "nav--open" : ""} ${isMobile ? "mobile" : ""}`}
          aria-label="Primary"
  aria-hidden={!menuOpen}
  inert={!menuOpen ? "" : undefined}
>
          <ul className='primary__nav'>
            <li><Link to='/about' className='nav__link' onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to='/locations' className='nav__link' onClick={() => setMenuOpen(false)}>Location</Link></li>
            <li><Link to='/careers' className='nav__link' onClick={() => setMenuOpen(false)}>Careers</Link></li>
          </ul>
          <Link
            to="#cta"
            className="cta__btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Get Scootin
          </Link>
        </nav>

        <div
          className={`menu__overlay ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
}

export default Header;
