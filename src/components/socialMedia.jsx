import React from "react";
//import features from Material UI libraries
import { Box, Grid, Button, Fab, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
//main funtion for export
export default function SocialMedia() {
  return (
    <Grid container>
      <Box component={Grid} item md={12} display={{ xs: "none", md: "block" }}>
        <Stack spacing={3} sx={{ p: 0, ml: 0 }}>
          <Fab
            href="http://laurittaburrows.tech/"
            size="medium"
            color="primary"
            aria-label="linkedIn"
          >
            <HomeIcon />
          </Fab>
          <Fab
            href="https://www.linkedin.com/in/ritaburrows/"
            size="medium"
            color="primary"
            aria-label="linkedIn"
          >
            <LinkedInIcon />
          </Fab>
          <Fab
            href="https://twitter.com/reetzonline"
            size="medium"
            color="primary"
            aria-label="twitter"
          >
            <TwitterIcon />
          </Fab>
          <Fab
            href="https://github.com/laurittab"
            size="medium"
            color="primary"
            aria-label="instagram"
          >
            <GitHubIcon />
          </Fab>
        </Stack>
      </Box>
      <Box
        sx={{ mb: 4 }}
        component={Grid}
        item
        xs={3}
        display={{ xs: "block", md: "none" }}
      >
        <Fab
          href="http://laurittaburrows.tech/"
          size="medium"
          color="primary"
          aria-label="linkedIn"
        >
          <HomeIcon />
        </Fab>
      </Box>
      <Box component={Grid} item xs={3} display={{ xs: "block", md: "none" }}>
        <Fab
          href="https://www.linkedin.com/in/ritaburrows/"
          size="medium"
          color="primary"
          aria-label="linkedIn"
        >
          <LinkedInIcon />
        </Fab>
      </Box>
      <Box component={Grid} item xs={3} display={{ xs: "block", md: "none" }}>
        <Fab
          href="https://twitter.com/reetzonline"
          size="medium"
          color="primary"
          aria-label="twitter"
        >
          <TwitterIcon />
        </Fab>
      </Box>
      <Box component={Grid} item xs={3} display={{ xs: "block", md: "none" }}>
        <Fab
          href="https://github.com/laurittab"
          size="medium"
          color="primary"
          aria-label="instagram"
        >
          <GitHubIcon />
        </Fab>
      </Box>
    </Grid>
  );
}
