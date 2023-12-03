import "./App.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./Componentss/Home/Home";
import ErrorPage from "./Componentss/ErrorPage/ErrorPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div id="App">
      <BrowserRouter basename="Portfolio">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <Home />
              </React.Fragment>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
