import React from "react";
import { useState } from "react";

function App() {
  // const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  // function fnameChange(event) {
  //   setfname(event.target.value)
  // }
  // function lnameChange(event) {
  //   setlname(event.target.value)
  // }

  function handleChange(event) { 
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const {value, name} = event.target

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName : value,
          lName : prevValue.lName
        }
      } else if  (name === "lName") {
        return {
          fName : prevValue.fName,
          lName : value
        }
      }
    })
    

    // const [value, name] = event.target
    // console.log(value)
    // console.log(name)
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName}/>
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
