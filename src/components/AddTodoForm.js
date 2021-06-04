/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodoAsync({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className='form-inline mt-3 mb-3'>
      <label className='sr-only'>Name</label>
      <input
        type='text'
        placeholder='todo'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='form-control mb-2 mr-sm-2'
      />
      <button type='submit' className='btn btn-primary mb-2'>
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
