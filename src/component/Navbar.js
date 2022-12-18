import React from "react";
import "../Navbar.css";
import "../switch.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import SwitchDarkmode from "./subComponents/Switchdarkmode";
import { headNavbar ,listMenu, footerNavbar } from "../db/NavbarData"

export default function Navbar() {

  return (
    <nav className="nav-bg">
      <div className="switch-darkmode"><SwitchDarkmode/></div>
      <div className="nav-profile">
        {headNavbar.map((item) => {
          return (
            <div>
              <div>{item.image}</div>
              <div>{item.name}</div>
              <div>{item.title}</div>
            </div>
          );
        })}
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
        <br/>
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
