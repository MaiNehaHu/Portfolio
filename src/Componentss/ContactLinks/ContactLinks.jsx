import React from "react";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import "./ContactLinks.scss";

const ContactLinks = () => {
  const className = "ContactLinks";
  return (
    <aside className={className}>
      <div className={`${className}__email`}>
        <a target="blank" href="mailto:nehakumari2002muriyari@gmail.com">
          <IoMail />
        </a>
      </div>

      <div className={`${className}__github`}>
        <a target="blank" href="https://github.com/MaiNehaHu">
          <VscGithub />
        </a>
      </div>

      <div className={`${className}__linkedin`}>
        <a target="blank" href="https://www.linkedin.com/in/nehakumari0102/">
          <FaLinkedin />
        </a>
      </div>
    </aside>
  );
};

export default ContactLinks;
