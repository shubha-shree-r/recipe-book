import React, { useState } from "react";
import "../css/sidenav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Route, Router, Routes } from "react-router-dom";
import Home from './Home'

function SideNav() {
  const [isOpen, setOpen] = useState(false);

  function toggleNav() {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-toggle" onClick={toggleNav}>
      <span>
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />  // Show 'X' icon when open
          ) : (
            <FontAwesomeIcon icon={faBars} />  // Show 'bars' icon when closed
          )}
        </span>
       
      </button>
     
      <div>
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
       
      </div>
      <nav className="sidebar-nav">
        <ul>

          <li>
          <NavLink to="/">Home</NavLink>
          </li>
         
          
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li ><NavLink to="/about">About</NavLink></li>
          
          <li>Contact</li>
        </ul>
      </nav>
      </div>
  );
}

export default SideNav;
