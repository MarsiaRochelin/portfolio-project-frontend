import React from "react";
import { Link } from "react-router-dom";

const project = ({ project }) => {
  const { id, project_name } = project;

  return (
    <div>
      <Link to={`/projects/${id}`}>
        <p>{project_name}</p>
      </Link>
    </div>
  );
};

export default project;
