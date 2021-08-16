import "./App.css";
import { Header } from "./Mycopmonents/Header";
import { Todos } from "./Mycopmonents/Todos";
import { Footer } from "./Mycopmonents/Footer";
import React, { useState,useEffect} from "react";
import { Addtodo } from "./Mycopmonents/Addtodo";
import { About } from "./Mycopmonents/About";
import { Contact } from "./Mycopmonents/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("my_todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("my_todos"));
  }

 
  const delete_todo = (todo) => {
    console.log("delete button works", todo);

    //uesstate  and setTodos is used to updae the dom(changes in virtual do and then merge it with real dom)

    setTodos(
      my_todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("my_todos",JSON.stringify(my_todos));
console.log("localstorage us",localStorage)
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

    

    // localStorage.setItem("my_todos",JSON.stringify(my_todos));
    // console.log("localstorage us",localStorage)
 
  };
  

  const [my_todos, setTodos] = useState(initTodo);
  //any time todo is change useEffect calls the function amd save the new todo in ls
  useEffect(() => {
    localStorage.setItem("my_todos",JSON.stringify(my_todos)); //add data in ls
  }, [my_todos])

  
  // function for page 404
  const not_found=(()=>{
    return (
      <>
      <h2>page not found 404</h2>
      <p>some error occured</p>
      </>
    )
  })



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

          <Route exact path="/contact">
            <Contact />
          </Route>
{/* setting up page 404 */}
          <Route component={not_found}>

          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
