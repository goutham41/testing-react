import React from "react";

export const TodoItem = ({ id, status, title, handletogle, handleDelete }) => {
  return (
    <div
      className="todo-Item"
      style={{
        textDecoration: status ? "line-through" : "none",
        margin: "20px auto",
        padding: "20px",
        border: "solid #fff",
        width: "300px",
        fontSize: "20px",
      }}
    >
      <input
        type="checkbox"
        className="checkbox"
        onChange={(e) => handletogle(id, e)}
      />
      {title}
      <button id="delete" onClick={(e) => handleDelete(id, e)}>
        delete
      </button>
    </div>
  );
};
