import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./book";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FaSquareFacebook } from "react-icons/fa6";
import { faFacebook, faSquareInstagram, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

function MyApp() {
  const [state, setState] = useState("Shubha");
  const [teams, setTeam] = useState(data);

  function onHandleClick() {
    setTeam([]);
  }

  function handleClick() {
    if (state === "Shubha") {
      setState("Jeevan");
    } else {
      setState("Shubha");
    }
  }

  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <>
      <div>
        <TopNav />
      </div>
      <div>
        <div className="container">
          <BrowserRouter>
            <SideNav />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      <div>
        {/* <main className="home-container">
          <Home />
        </main> */}
      </div>
      <div className="footer-header">
        <div className="footer-content">Join With Us for Your Meal</div>
      </div>
      <div className="footer">
      <div className="footer-content2 container p-4">
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span >
              <FontAwesomeIcon icon={faSquareTwitter} />
              </span>
              <span >
              <FontAwesomeIcon icon={faSquareInstagram} />
              </span>
            </div>
      </div>
      {/* <div className="first-container">
      <div className="header">State and props with event basis</div>
        <h2>{state}</h2>
        <button type="button" onClick={handleClick}>Click here</button>
        {books.map((book) => {
          return <Book book={book} />;
        })}
      </div>
      <div className="second-container">
      <div className="header">useState</div>

          {teams.map((team)=>{
            return (
              <div key={team.id}>
                <h2>{team.name}</h2>
              </div>
            )
          })}

          <button onClick={onHandleClick}>Click here to check useState</button>
      </div>
      <div className="third-container">
      <div className="header">useEffect</div>

          {teams.map((team)=>{
            return (
              <div key={team.id}>
                <h2>{team.name}</h2>
              </div>
            )
          })}

          <button onClick={onHandleClick}>Click here to check useState</button>
      </div> */}
    </>
  );
}

export default MyApp;
