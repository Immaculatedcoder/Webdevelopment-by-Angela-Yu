import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
// import Fab from '@mui/material/Fab';
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [myform, setMyform] = useState({
    title : "",
    content : ""
  })

  function handleChange(event) {
    const {value, name} = event.target ;

    setMyform(prev => ({
    ...prev, 
    [name] : value
  }));
  }

  //   setMyform(prev => {
  //     if (name === "title") {
  //       return {
  //         title : value,
  //         content : prev.content
  //       }
  //     } else if (name === "content") {
  //       return {
  //         title : prev.title,
  //         content : value
  //       }
  //     }
  //   });
  // }

  




  return (
    <div>
      <form className="create-note" onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(myform.title, myform.content);
        setMyform({title: "", content: ""});
        
      }}>
        <input onChange={handleChange} name="title" placeholder="Title" value={myform.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3"  value={myform.content}/>
        <Zoom in={true}> 
          <Fab type="submit"> <AddIcon /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

