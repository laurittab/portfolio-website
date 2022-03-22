import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import CV from "./pages/CV.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={<Navigate replace to="/about" />}
        />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cv" element={<CV />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);