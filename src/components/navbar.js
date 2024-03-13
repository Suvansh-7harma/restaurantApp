import React from "react";
import "../styles/navbar.css";
import logo from "../Assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo">
        <img className="image" src={logo} alt="Logo"></img>
        <span className="name">GeekFoods</span>
      </span>
      <span className="tabs">
        <span id="Home" className="tabButton">
          <a href="#">Home</a>
        </span>
        <span id="Quote" className="tabButton">
          <a href="#">Quote</a>
        </span>
        <span id="Resturants" className="tabButton">
          <a href="#">Resturants</a>
        </span>
        <span id="Foods" className="tabButton">
          <a href="#">Foods</a>
        </span>
        <span id="Contact" className="tabButton">
          <a href="#">Contacts</a>
        </span>
      </span>
      <span className="button">
        <button id="navButton">Get Started</button>
      </span>
    </nav>
  );
};

export default Navbar;
