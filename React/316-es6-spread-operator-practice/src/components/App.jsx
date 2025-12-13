import React from "react";
import { useState } from "react";

function App() {
  // const [itemK, setItemK] = useState("");

  const [itemC, setItemC] = useState("");

  const [items, setItems] = useState([]);

  function handleChange(event) {
    setItemC(event.target.value)
  }

  function handleClick() {
    setItems(preItems => {return  [...preItems, itemC]});
    setItemC("");    
  }

  

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={itemC}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {return (
            <li key={index}>{item}</li>
          );} )}
          {/* <li>{itemK}</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
