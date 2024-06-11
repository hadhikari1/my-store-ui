import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="header">
      <Link to="/" className="logo"> 
      <img src="shop.png" alt="Cart" className="cart-icon" />
      </Link>
      <div className="cart">
        <Link to="/cart">
          <img src="cart.png" alt="Cart" className="cart-icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
