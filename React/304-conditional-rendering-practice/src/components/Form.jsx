import React from "react";
import Input from "./Input";
import Button from "./Button";
// import { userIsRegistered } from "./App";



function Form(props) {
  return (
    <form className="form">

      <Input  type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && <Input type="password" placeholder="Confirm Password" />}
      
      {props.isRegistered ? <Button action="Login" /> : <Button action="Register" />}
      
    </form>
  );
}

export default Form;
