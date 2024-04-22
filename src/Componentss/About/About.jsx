import React from "react";
import "./About.scss";

const About = () => {
  const className = "About";

  return (
    <article className={className}>
      <h1 className={`${className}__heading heading`}>About Me</h1>

      <div className={`${className}__container`}>
        <section className={`${className}__container__section`}>
          <p className={`${className}__container__section_para`}>
            I'm a passionate front-end web developer with a passion for
            transforming designs into seamless and engaging user interfaces. I
            find joy in the creative process of building the visual aspects of
            websites, turning ideas into interactive experiences.
          </p>
        </section>

        <section className={`${className}__container__section`}>
          <h4 className={`${className}__container__section__heading`}>
            Technical
          </h4>
          <p className={`${className}__container__section__para`}>
            I have a good knowledge of technologies such as HTML, CSS, React JS,
            jQuery, Redux Toolkit, Tailwind CSS, SASS/SCSS, Git, and GitHub. I am currently
            expanding my skill set by delving into the world of React Native, adding
            another layer to my expertise.
          </p>
        </section>

        <section className={`${className}__container__section`}>
          <h4 className={`${className}__container__section__heading`}>
            Personal
          </h4>
          <p className={`${className}__container__section__para`}>
            On a personal note, I hail from Bihar and ventured to Hyderabad,
            Telangana, for my higher studies. I cherish the journey of personal
            and professional growth, and I am grateful to be surrounded by the
            support of my family.
          </p>
        </section>
      </div>
    </article>
  );
};

export default About;
