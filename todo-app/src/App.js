import "./App.css";
import { Header } from "./Mycopmonents/Header";
import { Todos } from "./Mycopmonents/Todos";
import {Footer} from "./Mycopmonents/Footer";
import React, { useState } from 'react';

function App() {

const delete_todo=(todo)=>{
  console.log("on delete todo executes",todo)

  //
  setTodos(my_todos.filter((e)=>{
    return e!==todo
  }))

}

const [my_todos, setTodos] = useState([
    {
      serialno:"1",
      title:"title no 1",
      desc:"description no 1",
    },
    {
      serialno:"2",
      title:"title no 2",
      desc:"desciption no 2",
    },
    {
      serialno:"3",
      title:"title no 3",
      desc:"desciption no 3",
    }
  ]);

 

  return (
    <>
      <Header title="My TododApp" searching={false} />
      <Todos todos={my_todos} onDelete={delete_todo} />
      <Footer/>
    </>
  );
}

export default App;
