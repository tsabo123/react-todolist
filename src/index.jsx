import React from "react";
import ReactDom from "react-dom/client";
import TodoList from "./TodoList";




function App() {
  return (
    <div className="text-center border-bottom">
      <TodoList></TodoList>
    </div>
  );
}

var root = document.getElementById("root");
ReactDom.createRoot(root).render (<App />);