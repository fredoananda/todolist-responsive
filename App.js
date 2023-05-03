import "./App.css";
import List from "./List";
import { useState } from "react";
import "./List.css";


/*
  1. List component
  2. TodoItem
*/

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <List todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;
