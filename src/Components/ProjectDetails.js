import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const {
    project_name,
    project_description,
    technology_utilized,
    start_date,
    due_date,
    email,
  } = project;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/projects/${id}`)
      .then(() => navigate(`/projects`))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Show">
      <h1>
        Project Name:
        <span id="ProjectDetails">{project_name}</span>
      </h1>
      <h4>
        Project Description: <br />
        <span>{project_description}</span>
      </h4>
      <h4>
        Technology Used: <br /> <span>{technology_utilized}</span>
      </h4>
      <h4>
        Start Date: <br />
        <span>{start_date}</span>
      </h4>
      <h4>
        Due Date: <br />
        <span>{due_date}</span>
      </h4>
      <h4>
        Email: <br />
        <span>{email}</span>
      </h4>
      <div className="Buttons">
        <Link to={"/projects"}>
          <button>Back</button>
        </Link>
        <Link to={`/projects/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link>
          <button onClick={handleDelete}>Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
