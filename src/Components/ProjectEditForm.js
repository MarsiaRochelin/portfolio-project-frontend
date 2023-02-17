import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const ProjectEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    project_name: "",
    project_description: "",
    technology_utilized: "",
    start_date: undefined,
    due_date: undefined,
    email: "",
  });

  const {
    project_name,
    project_description,
    technology_utilized,
    start_date,
    due_date,
    email,
  } = project;

  useEffect(() => {
    axios.get(`${API}/projects/${id}`).then(
      (res) => {
        setProject(res.data);
      },
      (err) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleTextChange = (e) => {
    setProject({ ...project, [e.target.id]: e.target.value });
  };

  const updateProject = (updatedProject) => {
    axios
      .put(`${API}/projects/${id}`, updatedProject)
      .then(
        () => {
          navigate(`/projects/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject(project, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="project_name">Project Name: </label>
        <input
          id="project_name"
          value={project_name}
          type="text"
          onChange={handleTextChange}
          placeholder="project name"
          required
        />
        <br />
        <label htmlFor="project_description">Project Description: </label>
        <input
          id="project_description"
          value={project_description}
          type="text"
          onChange={handleTextChange}
          placeholder="project description"
          required
        />
        <br />
        <label htmlFor="technology_utilized">Tech Utilized: </label>
        <input
          id="technology_utilized"
          value={technology_utilized}
          type="text"
          onChange={handleTextChange}
          placeholder="tech used"
          required
        />
        <br />
        <label htmlFor="start_date">Start Date: </label>
        <input
          id="start_date"
          value={start_date}
          type="number"
          onChange={handleTextChange}
          placeholder="mmddyyyy"
          required
        />
        <br />
        <label htmlFor="due_date">Due Date: </label>
        <input
          id="due_date"
          value={due_date}
          type="number"
          onChange={handleTextChange}
          placeholder="mmddyyyy"
          required
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          value={email}
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

export default ProjectEditForm;
