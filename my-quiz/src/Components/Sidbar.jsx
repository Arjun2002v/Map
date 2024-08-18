import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function Sidbar() {
  return (
    <div className="sidebar">
      <h2>World Map</h2>
      <div className="nav">
        <Link to="city" className="nav-links">
          {" "}
          Cities
        </Link>
        <Link to="country" className="nav-links">
          {" "}
          Country
        </Link>
      </div>

      <Outlet />
      <div>
       
      </div>

      <footer> Copyright 2023 by World Map Inc.</footer>
    </div>
  );
}
