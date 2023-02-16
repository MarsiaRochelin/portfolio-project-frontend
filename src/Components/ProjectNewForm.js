import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const ProjectNewForm = () => {
  const [project, setProject] = useState({
    project_name: "",
    project_description: "",
    technology_utilized: "",
    start_date: undefined,
    due_date: undefined,
    email: "",
  });

  const navigate = useNavigate();

  const addProject = () => {
    axios
      .post(`${API}/projects`, project)
      .then(
        () => {
          navigate("/projects");
        },
        (error) => console.error(error)
      )
      .catch((err) => console.log(err));
  };

  const handleTextChange = (e) => {
    setProject({ ...project, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(project);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="project_name">Project Name: </label>
        <input
          id="project_name"
          value={project.project_name}
          type="text"
          onChange={handleTextChange}
          placeholder="project name"
          required
        />
        <br />
        <label htmlFor="project_description">Project Description: </label>
        <input
          id="project_description"
          value={project.project_description}
          type="text"
          onChange={handleTextChange}
          placeholder="project description"
          required
        />
        <br />
        <label htmlFor="technology_utilized">Tech Utilized: </label>
        <input
          id="technology_utilized"
          value={project.technology_utilized}
          type="text"
          onChange={handleTextChange}
          placeholder="tech used"
          required
        />
        <br />
        <label htmlFor="start_date">Start Date: </label>
        <input
          id="start_date"
          value={project.start_date}
          type="number"
          onChange={handleTextChange}
          placeholder="yyyymmdd"
          required
        />
        <br />
        <label htmlFor="due_date">Due Date: </label>
        <input
          id="due_date"
          value={project.due_date}
          type="number"
          onChange={handleTextChange}
          placeholder="yyyymmdd"
          required
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          value={project.email}
          type="text"
          onChange={handleTextChange}
          placeholder="email@provider.com"
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProjectNewForm;
