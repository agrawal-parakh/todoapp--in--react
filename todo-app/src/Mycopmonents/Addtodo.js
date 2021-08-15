import React, { useState } from "react";
import "./formstyle.css";

export const Addtodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
 
    e.preventDefault();
    if(title==="" || desc===""){
        alert("title or desc cannot be empty")
    }
    props.addTodo(title,desc);
  };

  return (
    <div>
      <h2>Add a Todo</h2>
      <form className="container my-3" onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Todo description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-success">
          Addtodo
        </button>
      </form>
    </div>
  );
};
