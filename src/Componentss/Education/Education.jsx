import React from "react";
import list from "./EducationList";
import "./Education.scss";

const Education = () => {
  const className = "Education";
  return (
    <div className={className}>
      <h2 className="heading">Education</h2>

      <div className={`${className}__cardContainer`}>
        {list.map((edu, i) => (
          <div key={i} className={`${className}__cardContainer__card`}>
            <h4>{edu.institute}</h4>
            <p>{edu.course}</p>
            <p>Grade: {edu.grade}</p>
            <p>Year: {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
