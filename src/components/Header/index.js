import React from 'react';
import Nav from '../Nav';

function Header () {
  return (
    <header>
      <h2 class="header-name">
        <a href="/">
          Sophie Foutz
        </a>
      </h2>
      <Nav></Nav>
    </header>
  );
}

export default Header;