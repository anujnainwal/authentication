import React from "react";
import { CssBaseline, Container, Box, Grid, ImageList } from "@mui/material";
import "./assets/css/register.css";
import RegisterImage from "./assets/image/register.jpg";
import logo from "./assets/image/logo.png";

const Register = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          {/* Left side content */}
          <Box component="div" className="registerContent">
            <div className="registerUrlSet">
              <form>
                <div>
                  <img src={logo} style={{ width: 100 }} />
                </div>
                <div className="userHeading">
                  <h1>Create an Account</h1>
                  <p>Continue where you left off</p>
                </div>
              </form>
            </div>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Right side content */}

          <img
            className="registerImage"
            src={RegisterImage}
            srcSet={RegisterImage}
            alt="registerImage"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
