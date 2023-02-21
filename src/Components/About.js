import React from "react";

const About = () => {
  return (
    <div className="About">
      <h1>About the To Code or Not To Code</h1>
      <p className="AboutTheApp">
        This app was created as a means for aiding me in getting portfolio ready
        for prospect employers, by listing out projects I want to add to my
        portfolio (another app to develop) by continuing their builds as
        specified in my project description for each app. My hopes is to
        continue the build of my app, so that users could not only have the
        ability to add projects of their own, but have a platform to find
        collaborators for listed projects.
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
