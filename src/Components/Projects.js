import React from "react";
import { useState, useEffect } from "react";
import Project from "./Project";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/projects`)
      .then((res) => setProjectList(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(projectList);

  return (
    <div className="Projects">
      <ul>
        {projectList.map((project) => {
          return (
            <li key={project.id}>
              <Project projectList={projectList} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
