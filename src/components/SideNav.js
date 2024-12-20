import React, { useState } from "react";
import "../css/sidenav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faArrowRight } from '@fortawesome/free-solid-svg-icons'


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
       <span> Menu</span>
       <span> <FontAwesomeIcon icon={faArrowRight} /></span>
       
      </button>
     
      <div>
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
       
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
