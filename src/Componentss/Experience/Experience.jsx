import React from "react";
import { TbExternalLink } from "react-icons/tb";
import List from "./ExperienceList";
import "./Experience.scss";

const Experience = () => {
  const className = "Experience";

  return (
    <div className={className}>
      <h2 className={`${className}__heading heading`}>Experience</h2>

      <div className={`${className}__cardContainer`}>
        {List.map((exp, i) => (
          <div key={i} className={`${className}__card ${exp.company}`}>
            <section className={`${className}__card__left`}>
              <img
                src={exp.imageLink}
                alt="logo"
                className={`${className}__card__left__img`}
              />

              <a href={exp.link} target="_blank">
                <p className={`${className}__card__left__orgName`}>
                  {exp.company}
                  <TbExternalLink />
                </p>
              </a>

              <p className={`${className}__card__left__role`} >{exp.role}</p>
              <p className={`${className}__card__left__duration`} >{exp.duration}</p>
            </section>

            <section className={`${className}__card__right`}>
              <h3 className={`${className}__card__right__role`}>{exp.role}</h3>

              <ul className={`${className}__card__right__responsibility`}>
                {!exp ? "Job role: " : ""}
                {exp.responsibility.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </section>
          </div>
        ))
        }
      </div >
    </div >
  );
};

export default Experience;
