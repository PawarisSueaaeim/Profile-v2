import React from "react";
import "../Navbar.css";
import "../switch.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import SwitchDarkmode from "./Switchdarkmode";
import Switchdarkmode from "./Switchdarkmode";

export default function Navbar() {
  return (
    <nav className="nav-bg">
      <div className="switch-darkmode"><SwitchDarkmode/></div>
      <div className="nav-profile">
        <img src={require("../img/profile.png")} />
        <h5>Pawaris Suea-aeim</h5>
        <h6>I'm a Computer Engineering</h6>
      </div>
      <div className="nav-menu">
        <ul>
          <CustomLink to="/" className="nav-menu">
            <FaIcons.FaHome />
            <span>Home</span>
          </CustomLink>
          <CustomLink to="/Skills" className="nav-menu">
            <FaIcons.FaCode />
            <span>Skills</span>
          </CustomLink>
          <CustomLink to="/Experience" className="nav-menu">
            <FaIcons.FaSuitcase />
            <span>Experience</span>
          </CustomLink>
          <CustomLink to="/Certificate" className="nav-menu">
            <FaIcons.FaCertificate />
            <span>Certificate</span>
          </CustomLink>
          <CustomLink to="/Comment" className="nav-menu">
            <FaIcons.FaSmile />
            <span>Comment</span>
          </CustomLink>
        </ul>
      </div>
      <div className="nav-footer">
        <a href="https://github.com/PawarisSueaaeim" target="_blank">
          <img
            className="nav-icons"
            src="https://img.icons8.com/glyph-neue/40/000000/github.png"
          />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100006235390790"
          target="_blank"
        >
          <img
            className="nav-icons"
            src="https://img.icons8.com/color/40/000000/facebook-new.png"
          />
        </a>
        <a href="https://www.instagram.com/pleumqz/" target="_blank">
          <img
            className="nav-icons"
            src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UChRwgbwyZU1eZFuqilV9bmg/featured"
          target="_blank"
        >
          <img
            className="nav-icons"
            src="https://img.icons8.com/color/40/000000/youtube-play.png"
          />
        </a>
        <br />
        <p className="text">© 2022 Pawaris Suea-aeim Computer Engineering</p>
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
