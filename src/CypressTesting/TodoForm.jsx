import axios from "axios";
import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItems";

export const InputForm = ({ initState }) => {
  const [todo, setTodo] = useState([]);
  const [text, settext] = useState("");

  const handletogle = (id, e) => {
    setTodo(
      todo.map((elem) =>
        elem.id === id ? { ...elem, status: !elem.status } : elem,
      ),
    );
  };
  const handleDelete = (id, e) => {
    setTodo(todo.filter((elem) => elem.id !== id));
  };

  const handleadd = (e) => {
    if (e.code === "Enter") {
      const data = { status: false, id: Math.random(), title: text };
      axios
        .post("http://localhost:8080/todos", data)
        .then((r) => {
          console.log("post", r.data);
          get();
        })
        .catch(({ message }) => console.log(message));
      settext("");
    }
  };
  useEffect(() => {
    get();
  }, []);
  const get = () => {
    axios
      .get("http://localhost:8080/todos")
      .then(({ data }) => {
        setTodo(data);
      })
      .catch(({ message }) => console.log(message));
  };

  return (
    <>
      <h1 style={{ color: "#fff" }}>Todo Input form</h1>
      <input
        className="inputForm"
        placeholder="Enter anything"
        type="text"
        onKeyUp={handleadd}
        onChange={(e) => settext(e.target.value)}
      />
      <div>
        {todo.map((elem) => (
          <TodoItem
            key={elem.id}
            {...elem}
            handleDelete={handleDelete}
            handletogle={handletogle}
          />
        ))}
        <p style={{ color: "#fff" }}>Total item in list: {todo.length}</p>
      </div>
    </>
  );
};
