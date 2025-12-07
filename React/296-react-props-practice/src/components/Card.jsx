import React from "react";
import Avatar from "./Avatar";
import Detailed from "./detailed";

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="top" >
        <h2 className="name"> {props.name}</h2>
        {/* <img className="circle-img" src={props.imglink} alt="avatar_img"/> */}
        <Avatar img = {props.imglink}/>
      </div>

      <div className="bottom">
        <Detailed 
        telephone = {props.tel}
        emailing = {props.email}/>
      </div>
    </div>
  );
}

export default Card