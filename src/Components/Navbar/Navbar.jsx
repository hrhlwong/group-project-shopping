import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const { getTotalCartItems } = useContext(ShopContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      {/* Logo is now a clickable link to the homepage */}
      <Link to="/" className="nav-logo">
        <img src={logo} alt="OneStyle Logo" />
        <p>OneStyle</p>
      </Link>

      {/* Mobile menu toggle */}
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* All navigation links wrapped in a parent element */}
      <div className={`nav-links-wrapper`}>
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li onClick={() => setMenu("shop")}>
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("men")}>
            <Link style={{ textDecoration: "none" }} to="/mens">
              Men
            </Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("women")}>
            <Link style={{ textDecoration: "none" }} to="/womens">
              Women
            </Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link style={{ textDecoration: "none" }} to="/kids">
              Kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>

      <div className="nav-login-cart">
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
