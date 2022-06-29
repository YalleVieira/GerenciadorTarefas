import React, { useState } from "react";

import "./AddTask.css";
import Button from "./Button";
import "./Task.css";

const AddTask = ({ handlerTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handlerInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handlerAddTaskClick = () => {
    handlerTaskAddition(inputData);
    setInputData("");
  };

  return (
    <>
      <div className="add-task-container">
        <input
          onChange={handlerInputChange}
          value={inputData}
          className="add-task-input"
          type="text"
        />
        <div className="add-task-button-container">
          <Button onClick={handlerAddTaskClick}>Adicionar</Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
