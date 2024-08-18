import React from "react";
import { Link } from "react-router-dom";

export const Loader = () => {
  return (
    <div>
      <nav className="bar">
        <Link to="/" className="nav-text">Home </Link>

        <Link to="/Login" className="nav-text">Login </Link>

        <Link to="/product" className="nav-text">Product </Link>

        <Link to="/pricing" className="nav-text">Pricing</Link>
      </nav>
    </div>
  );
};
