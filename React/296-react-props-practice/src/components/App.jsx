import React from "react";
import contacts from "../contacts";

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="top" >
        <h2 className="name"> {props.name}</h2>
        <img className="circle-img" src={props.imglink} alt="avatar_img"/>
      </div>

      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name = {contacts[0].name}
        imglink = {contacts[0].imgURL}
        tel = {contacts[0].phone}
        email = {contacts[0].email}
      />

      <Card
        name = {contacts[1].name}
        imglink = {contacts[1].imgURL}
        tel = {contacts[1].phone}
        email = {contacts[1].email}
      />

      <Card
        name = {contacts[2].name}
        imglink = {contacts[2].imgURL}
        tel = {contacts[2].phone}
        email = {contacts[2].email}
      />
    </div>
  );
}

export default App;

