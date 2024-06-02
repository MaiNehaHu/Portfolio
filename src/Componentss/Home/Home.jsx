import React from "react";
import { useMediaQuery } from "@mui/material";
import "./Home.css";
import Introduction from "../Introduction/Introduction";
import RightSideCompo from "../RightSideCompo/RightSideCompo";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

const Home = () => {
  const className = "Home";
  const is820px = useMediaQuery("(max-width: 820px)");

  return (
    <div className={className}>
      <Introduction />

      {!is820px ? (
        <RightSideCompo />
      ) : (
        <React.Fragment>
          <About />
          <Experience />
          <Projects />
          <Education />
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
