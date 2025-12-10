import React from "react";
import Login from "./login";

var isLoggedIn = true;

function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>
  } else {
    return <Login Login="Login"/>
  }
}

// ----------- Without Tenery Expression--------- >
// function App() {
//   return (
//     <div className="container">
//       {renderConditionally()}
      
//     </div>
//   );
// }

// ------------ With Tenary Expression ----------- >

function App() {
  return (
    <div className="container">
      { isLoggedIn ? <h1>Hello</h1> : <Login Login="Login"/>}
      
    </div>
  );
}
export default App;
