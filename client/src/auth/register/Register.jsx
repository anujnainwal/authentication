import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch, useSelector } from "react-redux";
import { checkEmail, registerUser } from "../../features/user/user.thunk";
import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

export default function Register() {
  let dispatch = useDispatch();
  let {
    isLoading,
    isSuccess,
    isError,
    errorMessage,
    statusCode,
    successMessage,
  } = useSelector((state) => state.authSlice);
  let formSchema = yup.object({
    firstname: yup.string().min(3).max(30).required().trim(),
    lastname: yup.string().min(3).max(30).required().trim(),
    email: yup.string().required().email().trim().lowercase(),
    password: yup
      .string()
      .required()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    role: yup.string().required(),
  });
  let { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  let { errors } = formState;

  const onSubmit = (data) => {
    if (isSuccess === true) {
      dispatch(registerUser(data));
      // console.log(data);
    }
  };

  let checkEmailHandler = () => {
    let email = document.getElementById("email").value;
    dispatch(checkEmail(email));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            {...register("firstname")}
            label="Firstname"
            name="firstname"
            error={errors?.firstname ? true : false}
            helperText={errors?.firstname?.message}
            autoComplete="firstname"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            {...register("lastname")}
            label="Lastname"
            name="lastname"
            error={errors?.lastname ? true : false}
            helperText={errors?.lastname?.message}
            autoComplete="lastname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            {...register("email")}
            label="Email Address"
            name="email"
            disabled={isLoading ? true : false}
            onBlur={checkEmailHandler}
            error={errors?.email ? true : false || isError ? true : false}
            helperText={errors?.email?.message || errorMessage}
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            {...register("password")}
            fullWidth
            name="password"
            label="Password"
            type="password"
            error={errors?.password ? true : false}
            helperText={errors?.password?.message}
            id="password"
            autoComplete="current-password"
          />
          <InputLabel id="demo-simple-select-autowidth-label">
            Select Role
          </InputLabel>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            fullWidth
            label="Role"
            {...register("role")}
            error={errors?.role ? true : false}
          >
            <MenuItem value="USER">user</MenuItem>
            <MenuItem value="ADMIN">admin</MenuItem>
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {errors?.role?.message}
          </FormHelperText>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>

          <Grid container>
            <Grid item>
              Already have an Account ?<Link to="/login">Login</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
