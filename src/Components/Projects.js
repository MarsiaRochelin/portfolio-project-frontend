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

  return (
    <div className="Projects">
      {" "}
      <div className="projectContainer"> </div>
      {/* <div> */}
      <ul className="bulletinBoard">
        {projectList.map((project) => {
          return (
            <li key={project.id} className="stickyNotes">
              <Project project={project} />
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Projects;
