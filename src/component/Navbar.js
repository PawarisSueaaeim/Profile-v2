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
        {listMenu.map((items) => {
          return (
            <ul>
              <CustomLink to={items.link} className='m-4'>
                {items.icon}<span>{items.lable}</span>
              </CustomLink>
            </ul>
          );
        })}
      </div>
      <div className="nav-footer">
        {footerNavbar.map((items,index) => {
          return (
            <div className='nav-icons'>{items.item}</div>
          );
        })}
      </div>
      <p className="text">© 2022 Pawaris Suea-aeim Computer Engineering</p>
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
