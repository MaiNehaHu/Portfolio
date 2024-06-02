import React from "react";
import { useMediaQuery } from "@mui/material";
import resume from "./Neha_Kumari.pdf";
import "./Introduction.scss";
import ContactLinks from "../ContactLinks/ContactLinks";

const Introduction = () => {
  const className = "Introduction";
  const is820px = useMediaQuery("(max-width: 820px)");

  return (
    <div className={className}>
      <ContactLinks />

      <div className={`${className}__text`}>
        <h1 className={`${className}__text__great`}>{"< Namaste />"}</h1>
        <p className={`${className}__text__about`}>
          I'm
          <span className={`${className}__text__about__name`}>
            {" "} Neha Kumari
          </span>
          . A self taught Front-End Web Developer.
        </p>

        <button type="button" className={`${className}__text__button`}>
          <a
            href={resume}
            download={true}
          >
            Resume
          </a>
        </button>
      </div>

      {is820px ? (
        <div className="scroll-indicator">
          <div className="arrow"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Introduction;
