import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import "./assets/css/login.css";
import RegisterImage from "./assets/image/login.jpg";
import logo from "./assets/image/login.jpg";
import { FaUserAlt, FaEye, FaEyeSlash, FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
   let [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //handle password
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container>
        <Grid item xs={12} sm={5} md={5} lg={5}>
         
          <Box component="div" className="registerContent">
            <div className="registerUrlSet">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <img src={logo} style={{ width: 100 }} />
                </div>
                <div className="userHeading">
                  <h1>Create an Account</h1>
                  <p>Continue where you left off</p>
                </div>
              
                <div className="formControl">
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-adornment-password"
                      type="email"
                      ref={register}
                      label="Email"
                      name="email"
                      size="small"
                      placeholder="Enter your Email Address"
                      {...register("email", {
                        required: "Email Address is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email && errors.email.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <HiOutlineMail fontSize={15} />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </FormControl>
                </div>
                <div className="formControl">
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      name="password"
                      size="small"
                      ref={register}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password  is required",
                        minLength: {
                          value: 5,
                          message: "Password must be at least 5 characters.",
                        },
                      })}
                      error={!!errors.password}
                      helperText={errors.password && errors.password.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <FaEyeSlash fontSize={15} />
                              ) : (
                                <FaEye fontSize={15} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </FormControl>
                  
                  <Box component="div" sx={{ margin: "30px 0 0 0" }}>
                    <Button
                      style={{ color: "#fff" }}
                      type="submit"
                      className="custom-btn btn-13"
                      sx={{ width: "100%!important" }}
                    >
                      Login
                    </Button>
                  </Box>
                </div>
              </form>
              <Typography
                component="h6"
                variant="h6"
                sx={{
                  fontSize: "14px !important",
                  textAlign: "center",
                  margin: "-5px 0",
                }}
              >
                Don't Have a Account? <Link to="/register">Register</Link>
              </Typography>
            </div>
            <div style={{ margin: "50px 0", textAlign: "center" }}>
              <span className="thirdPartyHeader">Or login with </span>
            </div>
            <div
              style={{
                margin: "15px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="outlined"
                sx={{ width: 300, marginRight: 2, textTransform: "none" }}
                className="googleBtn"
              >
                <span
                  style={{
                    textAlign: "left",
                    marginRight: 10,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FcGoogle fontSize={20} />
                </span>
                Login With Google
              </Button>
              <Button
                variant="outlined"
                sx={{ width: 300, marginRight: 2, textTransform: "none" }}
                className="facebookBtn"
              >
                <span
                  style={{
                    textAlign: "left",
                    marginRight: 10,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaFacebookSquare fontSize={20} />
                </span>
                Login With FaceBook
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={7} sx={{ display: { xs: "none", sm: "block" } }}>
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

export default Login;
