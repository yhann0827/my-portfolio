import React from "react";
import About from "./component/about";
import Experience from "./component/experience";
import Profile from "./component/profile";
import Project from "./component/project";

const Home = () => {
  return (
    <div>
      <div id="profile" className="flex items-center justify-center  bg-gray-100">
        <Profile />
      </div>
      <div id="about" className="flex justify-center ">
        <About />
      </div>
      <div id="experience" className="flex justify-center bg-gray-100">
        <Experience />
      </div>
      <div id="project" className="flex justify-center ">
        <Project />
      </div>
    </div>
  );
};

export default Home;
