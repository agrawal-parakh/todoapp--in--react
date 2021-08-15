import "./App.css";
import { Header } from "./Mycopmonents/Header";
import { Todos } from "./Mycopmonents/Todos";
import { Footer } from "./Mycopmonents/Footer";
import React, { useState } from "react";
import { Addtodo } from "./Mycopmonents/Addtodo";
import { About } from "./Mycopmonents/About";
import { Contact } from "./Mycopmonents/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
 
  const delete_todo = (todo) => {
    console.log("delete button works", todo);

    //uesstate  and setTodos is used to updae the dom(changes in virtual do and then merge it with real dom)

    setTodos(
      my_todos.filter((e) => {
        return e !== todo;
      })
    );

  };

  const addTodo = (title, desc) => {
    let sno;
    if (my_todos.length === 0) {
      sno = 0;
    } else {
      sno = my_todos[my_todos.length - 1].sno + 1;
    }
    const my_addTodos = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...my_todos, my_addTodos]);
    console.log("my_add todos is", my_addTodos);

    // localStorage.setItem("todos is",JSON.stringify(my_todos));
    // console.log("local storage is",localStorage)
  };

  const [my_todos, setTodos] = useState([]);

  return (
    <>
      <Router>
        <Header title="My TododApp" searching={false} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Addtodo addTodo={addTodo} />
                  <Todos todos={my_todos} onDelete={delete_todo} />
                </>
              );
            }}
          ></Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
