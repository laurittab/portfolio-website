import React, { useState, useEffect } from "react";
//import features from Material UI libraries
import { Box, Grid, IconButton, Tab, Tabs } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
//import components
import SocialMedia from "./socialMedia.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import CV from "../pages/CV.jsx";
import Projects from "../pages/Projects.jsx";
/**
 *A component which returns tab panels and thier content
 *@param {object} properties are tab contents, a number and an index position
 *@return {object} page contents for a tab
 */
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h4>{children}</h4>}</div>;
}
//main funtion for export
export default function MainBox() {
  const [value, setValue] = useState(0);
//sx={{maxWidth: 3000}}
  //sx={{ display: 'flex',justifyContent: 'center', flexWrap: 'wrap' }} 
  //sx={{m: "auto"}}
  
  
  //WAS   x={{ display: 'flex',justifyContent: 'center', flexWrap: 'wrap' }} 
  
  return (
    <Grid container spacing={2} justify="centre">
      <Grid item xs={11} style={{ textAlign: "center" }}>
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          value={value}
          onChange={(event, value) => setValue(value)}
          centered
        >
          <Tab sx={{ fontSize: "medium" }} label="about" />
          <Tab sx={{ fontSize: "medium" }} label="my projects" />
          <Tab sx={{ fontSize: "medium" }} label="cv" />
          <Tab sx={{ fontSize: "medium" }} label="contact" />
        </Tabs>
      </Grid>
      <Grid item xs={11}>
        <Grid>
          <TabPanel value={value} index={0}>
            <About />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Projects />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CV />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Contact />
          </TabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
}

//sx={{ mt: "1%" }}
