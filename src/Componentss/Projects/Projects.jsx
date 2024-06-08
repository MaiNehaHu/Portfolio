import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectsList";
import "./Projects.scss";

const Projects = () => {
  const className = "Projects";
  const [list, setList] = useState(ProjectList);
  const [isActiveButton1, setIsActiveButton1] = useState(false); //for button
  const [isActiveButton2, setIsActiveButton2] = useState(true);
  const [isActiveButton3, setIsActiveButton3] = useState(false);

  function filterNative() {
    const tag = "Native";

    const NativeList = ProjectList.filter((Project) => {
      let flag = Project.tag === tag;
      return flag; //it will send true and the project will get into the array
    });
    setList(NativeList);
    setIsActiveButton1(true);
    setIsActiveButton2(false);
    setIsActiveButton3(false);
  }
  function filterReact() {
    const tag = "React";

    const ReactList = ProjectList.filter((Project) => {
      let flag = Project.tag === tag;
      return flag; //it will send true and the project will get into the array
    });
    setList(ReactList);
    setIsActiveButton2(true);
    setIsActiveButton1(false);
    setIsActiveButton3(false);
  }
  function filterVanilla() {
    const tag = "Vanilla";

    const VanillaList = ProjectList.filter((Project) => {
      let flag = Project.tag === tag;
      return flag;
    });
    setList(VanillaList);
    setIsActiveButton3(true);
    setIsActiveButton2(false);
    setIsActiveButton1(false);
  }

  useEffect(() => {
    filterReact();
  }, []);

  return (
    <div className={className}>
      <header className={`${className}__headerSection`}>
        <h2 className={`${className}__headerSection__heading heading`}>
          Projects
        </h2>

        <div className={`${className}__headerSection__filterButtons`}>
          <button
            onClick={filterReact}
            className={isActiveButton2 ? "active" : ""}
          >
            React JS
          </button>
          <button
            onClick={filterVanilla}
            className={isActiveButton3 ? "active" : ""}
          >
            JavaScript
          </button>
          <button
            onClick={filterNative}
            className={isActiveButton1 ? "active" : ""}
          >
            React Native
          </button>
        </div>
      </header>

      <div className={`${className}__wrapper`}>
        <div className={`${className}__wrapper__carousel`}>
          {list.map((project, i) => (
            <div className={`${className}__wrapper__carousel__card`} key={i}>
              <img src={project.src} alt="Project Image" />
              <p>
                <a href={project.href} target="_blank">
                  {project.name}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
