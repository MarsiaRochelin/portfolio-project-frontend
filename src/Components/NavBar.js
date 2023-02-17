import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to={"/projects"}>Index</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/projects/new"}>New Project</Link>
    </div>
  );
};

export default NavBar;
