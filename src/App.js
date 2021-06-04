/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import AllItems from "./components/AllItems";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className='container bg-white p-4 mt-5'>
      <h1>✏ My Official Todo List ✏</h1>
      <AddTodoForm />
      <TodoList />
      <AllItems />
    </div>
  );
};

export default App;
