import React from "react";
import "./RightSideCompo.scss";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Education from "../Education/Education";

const RightSideCompo = () => {
  const className = "RightSideCompo";

  return (
    <div className={className}>
      <ProfilePhoto />
      <About />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default RightSideCompo;
