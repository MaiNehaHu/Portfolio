// eslint-disable-next-line no-unused-vars
import React from "react";
import "./error.css";

import Doggy from "./Doggy.jpeg";

const ErrorPage = () => {
  return (
    <div id="error-page">
      <img src={Doggy} alt="Sad doggy" />
      <h1>Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;
