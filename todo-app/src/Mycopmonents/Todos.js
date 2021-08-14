import React from "react";
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h2>todos</h2>
      {props.todos.length === 0
        ? "no todos to display"
        : props.todos.map((todo) => {
            return (
              <Todoitem
                todo={todo}
                key={todo.serialno}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
};
