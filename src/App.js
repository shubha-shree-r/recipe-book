import React, { useEffect, useState } from "react";
import "./App.css";
import { books, data } from "./book";
import Book from "./Books";
import SideNav from "./components/SideNav";



function MyApp() {
  
  const [state, setState] = useState("Shubha");
  const [teams, setTeam] = useState(data);
 
   function onHandleClick(){
        setTeam([])
   }

  function handleClick() {
    if (state === "Shubha") {
      setState("Jeevan");
    } else {
      setState("Shubha");
    }   
  }

  useEffect(() => {
    console.log("useEffect")
  })
  return (
    <>
    <div>
    <SideNav/>
    </div>
      <div className="first-container">
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
      </div>
    </>

  );
}



export default MyApp;
