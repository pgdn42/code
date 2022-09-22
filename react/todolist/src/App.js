import Todolist from "./Todolist";
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState(["killjoel", "dontkilljoel"]);
  const addTodoText = useRef(null);
  function addTodo(todotext) {
    setTodos(todotext);
  }

  return (
    <>
      <input ref={addTodoText} type="text"></input>
      <button onClick={addTodo(addTodoText)}>add todo</button>
      <Todolist todolist={todos} />
    </>
  );
}

export default App;
