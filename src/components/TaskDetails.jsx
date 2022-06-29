import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css"

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const hadlerBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={hadlerBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
