import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handlerTaskClick, handlerRemoveTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handlerTaskClick={handlerTaskClick}
          handlerRemoveTask={handlerRemoveTask}
        />
      ))}
    </>
  );
};

export default Tasks;
