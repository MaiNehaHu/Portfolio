import React, { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import List from "./ExperienceList";
import "./Experience.scss";

const Experience = () => {
  const className = "Experience";
  const [list, setList] = useState(List);
  const [isActiveButton1, setIsActiveButton1] = useState(true); //for button
  const [isActiveButton2, setIsActiveButton2] = useState(false);
  const [isActiveButton3, setIsActiveButton3] = useState(false);

  function filterInternship() {
    const tag = "internship";

    const internList = List.filter((Exp) => {
      let flag = Exp.tag === tag;
      return flag; //it will send true and the project will get into the array
    });
    setList(internList);
    setIsActiveButton2(true);
    setIsActiveButton1(false);
    setIsActiveButton3(false);
  }
  function filterFulltime() {
    const tag = "fullTime";

    const fulltimeList = List.filter((Exp) => {
      let flag = Exp.tag === tag;
      return flag;
    });
    setList(fulltimeList);
    setIsActiveButton1(true);
    setIsActiveButton3(false);
    setIsActiveButton2(false);
  }
  function filterOthers() {
    const tag = "others";

    const othersList = List.filter((Exp) => {
      let flag = Exp.tag === tag;
      return flag; //it will send true and the project will get into the array
    });
    setList(othersList);
    setIsActiveButton1(false);
    setIsActiveButton2(false);
    setIsActiveButton3(true);
  }

  useEffect(() => {
    // filterInternship()
    filterFulltime()
    // filterOthers();
  }, []);

  return (
    <div className={className}>
      <header className={`${className}__headerSection`}>
        <h2 className={`${className}__heading heading`}>Experience</h2>

        <div className={`${className}__headerSection__filterButtons`}>
          <button
            onClick={filterFulltime}
            className={isActiveButton1 ? "active" : ""}
          >
            Full Time
          </button>
          <button
            onClick={filterInternship}
            className={isActiveButton2 ? "active" : ""}
          >
            Internship
          </button>
          <button
            onClick={filterOthers}
            className={isActiveButton3 ? "active" : ""}
          >
            Freelance
          </button>
        </div>
      </header>

      <div className={`${className}__cardContainer`}>
        {list.map((exp, i) => (
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
                {exp.responsibility.length !== 0 ? exp.responsibility.map((res, i) => (
                  <li key={i}>{res}</li>
                )) :
                  <p>
                    {exp.companyDescription}
                  </p>
                }
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
