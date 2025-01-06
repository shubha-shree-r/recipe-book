import React, { useState, useEffect } from 'react';
import persons from "../../src/assets/data/person.json";
import '../css/about.css'
function About() {
  const [personData, setPersonData] = useState(persons);


  useEffect(() => {
    setPersonData(persons); // Set initial data
  }, []);

  return (
    <div className='container'>
      <div className='first-container'>
      <h1>About Page</h1>
      {personData.map(person => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <p>Address: {person.address}</p>
          <p>Phone: {person.phone}</p>
          <p>Email: {person.email}</p>
        </div>
      ))}
      </div>

    </div>
  );
}

export default About;