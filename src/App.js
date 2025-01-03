import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./book";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <SideNav />
      </div>

      <div>
        <main className="home-container">
          <Home />
        </main>
      </div>
      <div className="footer-header">
    

      </div>
      <div className="footer">
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
