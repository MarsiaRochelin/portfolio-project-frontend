import React from "react";

const About = () => {
  return (
    <div className="About">
      <h1>About the To Code or Not To Code</h1>
      <p className="AboutTheApp">
        This app was created as a means for aiding me in getting portfolio ready
        for prospect employers, by listing out projects I want to add to my
        portfolio by continuing their builds as specified in my project
        description. My hopes is to continue the build of my app so that users
        could have a platform to do the same and also find collaborators.
      </p>
      <h1>About the Developer</h1>
      <div className="Mars" />
      <p className="AboutMe">
        [Mars]ia [Roc]helin is a [Full Stack Web Developer] who desires to land
        a role maintaining software infrastructures and assuring their quality.
      </p>
      <a href="https://github.com/MarsiaRochelin">My Github</a>
      <br />
      <a href="https://www.linkedin.com/in/marsia-rochelin-tech">LinkedIn</a>
    </div>
  );
};

export default About;
