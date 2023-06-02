import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  let formSchema = yup.object({
    email: yup.string().required().email().trim().lowercase(),
    password: yup.string().required().min(8).trim(),
  });
  let { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  let { errors } = formState;
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
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
          Sign in
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
            id="email"
            {...register("email")}
            label="Email Address"
            name="email"
            error={errors?.email ? true : false}
            helperText={errors?.email?.message}
            autoComplete="email"
            autoFocus
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs sx={{ textAlign: "left" }}>
              <Link to="/forgetPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              Don't Have Account ?<Link to="/register">Register</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
