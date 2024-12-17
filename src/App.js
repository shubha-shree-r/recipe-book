import React from "react";
import "./App.css";
import {books} from './book'
import Book from "./Books";


function myApp() {
  return (
    <>
   {books.map((book) => {
      return  <Book book={book}/>
   })}
    </>
     
  )
}

export default myApp;
