import React from "react";
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  return (
    <div className="container my-3">
      <h2>Todos List</h2>

      {props.todos.length === 0
        ? "no todos to display"
        : props.todos.map((x) => {
            return <Todoitem todo={x} key={x.sno} Delete={props.onDelete} />;
          })}
    </div>
  );
};
