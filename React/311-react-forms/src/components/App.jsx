import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("")
  const [name1, setName1] = useState("")

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value)
  }

  function updateName(event){
    setName1(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {name1} </h1>
      <form onSubmit={updateName}>
        <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>

        <button type="submit" >Submit</button>
      </form>

    </div>
  );
}

export default App;
