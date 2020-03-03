import React from 'react';
const NavBarItem = ({ link, svg, name }) => {
  return (
    <li className="nav-item">
      <a href={link} className="nav-link">
        {svg}
        <span className="link-text">{name}</span>
      </a>
    </li>
  );
};

export default NavBarItem;
