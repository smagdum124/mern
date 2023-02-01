import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="nav-bar">
      <img className="img-wrapper" src="https://st2.depositphotos.com/5943796/11433/v/600/depositphotos_114332684-stock-illustration-initial-letter-sk-silver-gold.jpg" alt="" />
      {auth ? (
        <ul className="nav-ul">
          <li className="nav-links">
            <Link to="/">Products</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product</Link>
            <Link to="/profile">Profile</Link>
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-uls">
          <li className="nav-linkss">
            <Link to="/signup">Sign-Up</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
