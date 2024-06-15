import React from 'react';
import './Header.css';

const Header = () => {
  
  return (
    <header className="header">
      <img src='./PandaSquare.png' alt="Michi" className="logo" />
      <span className="header-name">$SPANDA</span>
    </header>
  );
};

export default Header;