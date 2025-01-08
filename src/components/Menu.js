import React, { useState } from "react";
import '../css/menu.css'

function Menu() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, `Item ${items.length + 1}`]);
  }

  return (
    <>
      <div className="container">
        <div className="adding_menu">
          <button className="btn addBtn m-3" onClick={addItem}>
            Add Meal
          </button>

          {items.map((data, index) => (
            <div key={index} className="first-container">{data}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
