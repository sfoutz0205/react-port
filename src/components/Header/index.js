import React from 'react';
import Nav from '../Nav';

function Header () {
  return (
    <header>
      <div id="header">
      <h2 class="header-name">
        <a href="/">
          Sophie Foutz
        </a>
      </h2>
      <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;