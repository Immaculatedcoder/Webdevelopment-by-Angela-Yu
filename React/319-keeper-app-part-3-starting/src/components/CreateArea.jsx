import React from "react";
import { useState } from "react";

function CreateArea() {
  const [myform, setMyform] = useState({
    title : "",
    content : ""
  })

  function handleChange(event) {
    const {value, name} = event.target ;

    setMyform(prev => {
      if (name === "title") {
        return {
          title : value,
          content : prev.content
        }
      } else if (name === "content") {
        return {
          title : prev.title,
          content : value
        }
      }
    });
  }




  return (
    <div>
      <form onSubmit={(event) => {
        props.onSubmit(myform.title, myform.content);
        setMyform({title: "", content: ""})
        event.preventDefault();
      }}>
        <input onChange={handleChange} name="title" placeholder="Title" value={myform.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3"  value={myform.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

