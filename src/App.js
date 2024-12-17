import React, { useState } from "react";
import "./App.css";
import { books } from "./book";
import Book from "./Books";

function myApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
// function myApp() {
//   const [state, setState] = UseState("Shubha")
//   function handleClick() {
//     if (state === "Shubha") {
//       setState("Jeevan");
//     } else {
//       setState("Shubha");
//     }
//   }
//   return (
//     <>
//       <h2>{state}</h2>
//       <button type="button" onClick={handleClick}></button>
//       {books.map((book) => {
//         return <Book book={book} />;
//       })}

    
//     </>
//   );


export default myApp;
