import React from "react";
import "../Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bg">
      <div className="nav-profile">
        <img src={require("../img/profile.png")} />
        <h4>Pawaris Suea-aeim</h4>
        <h5>I'm a Computer Engineering</h5>
      </div>
      <div className="nav-menu">
        <ul>
          <CustomLink to="/" className="site-title">
            Home
          </CustomLink>
          <CustomLink to="/Skills" className="site-title">
            Skills & Project
          </CustomLink>
          <CustomLink to="/Experience" className="site-title">
            Experience
          </CustomLink>
          <CustomLink to="/Certificate" className="site-title">
            Certificate
          </CustomLink>
          <CustomLink to="/Comment" className="site-title">
            Comment
          </CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
