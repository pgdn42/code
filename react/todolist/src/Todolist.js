import React from "react";
import Todo from "./Todo";

function Todolist({ todolist }) {
  return (
    <>
      {todolist.map((todo) => (
        <Todo todo={todo} />
      ))}
    </>
  );
}
export default Todolist;
