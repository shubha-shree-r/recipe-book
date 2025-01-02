import React, { useEffect, useState } from "react";
import "../css/home.css"
// import { Link } from 'react-router-dom'; // If using React Router
function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to make the menu visible after 2 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000); // 2 seconds delay

    // Cleanup the timer if component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container">
       <div className="row">
      <div className="col-sm-6 menu-card" style={{ animation: visible ? 'slideUp 1s forwards' : 'none' }}>
        hi
      </div>
      <div className="col-sm-6 menu-card" style={{ animation: visible ? 'slideUp 1s forwards 0.5s' : 'none' }}>
        hello
      </div>
    </div>
    </div>
  );
}




export default Home;