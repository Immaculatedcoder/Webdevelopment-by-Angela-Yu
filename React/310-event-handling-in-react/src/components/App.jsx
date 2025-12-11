import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  function handleClick() {
    setHeadingText("Submitted")
  }

  const [color, setColor] = useState("white")

  function customColorOver(){
    setColor("black")
  }

  function customColorOut() {
    setColor("white")
  }


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} onMouseOver={customColorOver} onMouseOut={customColorOut} style={{backgroundColor:color}}>Submit</button>
    </div>
  );
}

export default App;
 