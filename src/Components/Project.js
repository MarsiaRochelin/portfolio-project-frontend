import React from "react";
import { Link } from "react-router-dom";

const project = ({ projectList }) => {
  return (
    <div>
      <Link to={`/projects/${projectList.id}`}>
        <p>{projectList.project_name}</p>
      </Link>
    </div>
  );
};

export default project;
