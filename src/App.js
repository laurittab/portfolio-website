import React from "react";
//import features from Material UI libraries
import { Box, Grid } from "@mui/material";
//import components
import MainBox from "./components/MainBox.jsx";
// Import and apply CSS stylesheet
import "./styles/styles.css";
// Home function that is reflected across the site
export default function App() {
  return (
    <div style={{marginLeft: "20px", fontFamily: "Roboto, sans-serif" }}>
      <MainBox />
    </div>
  );
}
