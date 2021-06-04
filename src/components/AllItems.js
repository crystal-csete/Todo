/** @format */

import React from "react";
import { useSelector } from "react-redux";

const AllItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return (
    <div>
      <h4 className='mt-3'>All todo's completed: {completedTodos.length}</h4>
    </div>
  );
};

export default AllItems;
