import React from "react";
import Input from "./Input";

function Login(props) {
    return (
        <form >
            <Input type = "text" placeholder = "Username" />
            <Input type = "password" placeholder = "Password" />
            <button type="submit">{props.Login}</button>
        </form>
    );
}

export default Login