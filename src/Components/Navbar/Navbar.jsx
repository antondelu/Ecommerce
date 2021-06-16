import React from "react";
import logo from "../../logo.svg";
import {Menuitems} from "./Menuitems"
const Navbar = () => {
  return (
    <nav>
      <ul>
      <li>
          <a href="#index">
            <img className="logo" src={logo} alt="" />
          </a>
        </li>
      {Menuitems.map((item)=>{
          return (
            <li key={item.name}>
            <a href={item.href}>
              <i className={item.class}></i>{item.name}
            </a>
          </li>
          )
      })}
      </ul>
    </nav>
  );
};

export default Navbar;
