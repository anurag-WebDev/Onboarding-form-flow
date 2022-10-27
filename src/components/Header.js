import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../eden.gif";

const Header = () => {
  return (
    <>
      <Box>
        <Grid container sx={{ justifyContent: "center", padding: "3rem" }}>
          <Grid item sx={{ display: "flex" }}>
            <img src={logo} alt="Logo" />
            <Typography variant="h5" sx={{ paddingTop: "0.5rem" }}>
              Eden
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
