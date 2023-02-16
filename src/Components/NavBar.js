import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={"/projects"}>Index</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/projects/new"}>New</Link>
    </div>
  );
};

export default NavBar;
