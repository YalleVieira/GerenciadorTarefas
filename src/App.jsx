import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import TaskDetails from "./components/TaskDetails.jsx";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1000",
      title: "Estudar Programação",
      completed: "false",
    },
    {
      id: "2436",
      title: "Ler Livros",
      completed: "true",
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data)
    };
    fetchTasks();
  }, []);

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
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handlerTaskAddition={handlerTaskAddition} />
              <Tasks
                tasks={tasks}
                handlerTaskClick={handlerTaskClick}
                handlerRemoveTask={handlerRemoveTask}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
