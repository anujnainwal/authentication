import React from "react";
import LoginImage from "./assets/image/logo.jpg";
import forget from "./assets/image/fortget.png";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./assets/css/forget.css";
const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <Box sx={{ height: "100vh",background:'#FAFBFE' }}>
      <Grid container>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <Box component="div" className="registerContent forgetBox">
            <div className="registerUrlSet">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <img src={forget} style={{ width: 150 }} />
                </div>
                <div className="userHeading">
                  <h1> Forgot password?</h1>
                  <p>
                    Don’t warry! it happens. Please enter the address associated
                    with your account.
                  </p>
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
                <Box component="div" sx={{ margin: "30px 0 30px 0" }}>
                  <Button
                    style={{ color: "#fff" }}
                    type="submit"
                    className="custom-btn btn-13"
                    sx={{ width: "100%!important" }}
                  >
                    Login
                  </Button>
                </Box>
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
                Back to <Link to="/login">Login</Link>
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={7} sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            className="registerImage"
            src={LoginImage}
            srcSet={LoginImage}
            alt="LoginImage"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgetPassword;
