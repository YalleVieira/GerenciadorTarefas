import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";

import "./app.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: "false",
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: "true",
    },
  ]);

  const handlerTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      else return task;
    });
    setTasks(newTasks);
  };

  const handlerTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handlerRemoveTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact render={() => (
            <>
              <AddTask handlerTaskAddition={handlerTaskAddition}/>
              <Tasks
                tasks={tasks}
                handlerTaskClick={handlerTaskClick}
                handlerRemoveTask={handlerRemoveTask}
              />
            </>

          )} />
        </div>
      </Router>
  );
};

export default App;
