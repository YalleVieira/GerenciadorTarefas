import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import {useHistory} from 'react-router-dom'

import "./Task.css";

const Task = ({ task, handlerTaskClick, handlerRemoveTask }) => {
  const history = useHistory();

  const handlerTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }


  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handlerTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handlerRemoveTask(task.id)}
        >
          <CgClose />
        </button>
        <button className="see-task-details-button"
          onClick={handlerTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );

  //return <div className="task-container">{task.title}</div>
};

export default Task;
