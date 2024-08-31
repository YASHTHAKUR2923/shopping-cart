import React from 'react';

const NavBar = ({ cartCount }) => {
  return (
    <nav>
      <h2>My Shop</h2>
      <div>
        <a href="/">Home</a>
        <a href="/cart">Cart ({cartCount})</a>
      </div>
    </nav>
  );
};

export default NavBar;
