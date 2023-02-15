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
    technology_utilize,
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

  return (
    <div className="Show">
      <p>{project_name}</p>
      <p>{project_description}</p>
      <p>{technology_utilize}</p>
      <p>{start_date}</p>
      <p>{due_date}</p>
      <p>{email}</p>
      <div className="Buttons">
        <Link>
          <button>Back</button>
        </Link>
        <Link>
          <button>Edit</button>
        </Link>
        <Link>
          <button>Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
