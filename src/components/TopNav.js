import React from "react";
// import { Link } from 'react-router-dom'; // If using React Router
import "../css/topnav.css";
function TopNav() {
    window.addEventListener("scroll", () => {
        const container = document.querySelector(".container");
        const scrollPosition = window.scrollY;
        const containerTop = container.offsetTop;
      
        if (scrollPosition > containerTop - window.innerHeight / 2) { 
          container.classList.add("container-visible");
        } else { 
          container.classList.remove("container-visible"); 
        }
      });
  return (
    <div className="topbar">
      <div className="container">
        <h1 className="animated-text">A Chef In Every Tasty Meal Box</h1>
        {/* <span><FontAwesomeIcon icon={faHatChef} style={{color: "#a47751",}} /></span> */}
      </div>
    </div>
  );
}

export default TopNav;
