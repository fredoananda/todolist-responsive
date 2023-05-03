import React, { useState } from "react";
import "./Story.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    const newTodos = [...todos];
    const updatedTodo = prompt("Edit Todo", newTodos[index].text); // Gunakan text dari todo yang diupdate sebagai nilai awal prompt
    if (updatedTodo) {
      newTodos[index] = { ...newTodos[index], text: updatedTodo }; // Gunakan spread operator untuk mengupdate nilai text pada todo yang dipilih
      setTodos(newTodos);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputTodo, done: false }]);
    setInputTodo("");
  };

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div className="container-body">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputTodo} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? "done" : ""}>
            {todo.text}
            <input
              type="checkbox"
              className="todo-checkbox"
              onChange={() => handleCheck(index)}
              checked={todo.done}
            />
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
