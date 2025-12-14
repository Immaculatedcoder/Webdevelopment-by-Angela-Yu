import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])

  function addTodos(title, content) {
    setTodos(prevTodos => {
      return [...prevTodos, {
        title : title,
        content: content
      }];
    });
  }

  function deleteTodo(id) {
    setTodos(prevTodos => {
      return prevTodos.filter((todo, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit = {addTodos} />
      {todos.map((todoItems, index) => {
        return (
          <Note 
            key = {index}
            id = {index}
            title = {todoItems.title}
            content = {todoItems.content}
            onTap = {deleteTodo}
          />
        )
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
 