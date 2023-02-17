import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <p className="Greeting">
        <>👋🏾</> Welcome to the
        <span className="ProjectName">
          {" "}
          <>👩🏾‍💻</> To Code or Not Code<>👨🏿‍💻</> App!
        </span>
      </p>
      <div className="HomeImg" />
    </div>
  );
};

export default Home;
