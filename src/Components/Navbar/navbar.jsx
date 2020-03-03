import React from 'react';
import NavBarItem from './navbar-item';

import Logo from './icons/logo.jsx';
import Cat from './icons/cat.jsx';
import Alien from './icons/alien.jsx';
import Space from './icons/space.jsx';
import Shuttle from './icons/shuttle.jsx';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text logo-text">Animator</span>
            <Logo />
          </a>
        </li>

        <NavBarItem link={'#'} svg={<Cat />} name={'Cats'} />
        <NavBarItem link={'#'} svg={<Alien />} name={'Aliens'} />
        <NavBarItem link={'#'} svg={<Space />} name={'Space'} />
        <NavBarItem link={'#'} svg={<Shuttle />} name={'Shuttle'} />

        <li className="nav-item" id="themeButton">
          <a href="#" className="nav-link">
            <svg
              className="theme-icon"
              id="lightIcon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="moon-stars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Themify</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
