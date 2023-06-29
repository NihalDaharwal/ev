import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const { register, control, handleSubmit, formState, trigger } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("form submitted", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={4} width={400}>
          <TextField
            // id="filled-basic"
            label="login"
            variant="filled"
            type="email"
            size="large"
            id="email"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email",
              },
              validate: (fieldValue) => {
                return (
                  fieldValue != "admin@example.com" ||
                  "enter a different email address"
                );
              },
            })}
            helperText={errors ? errors.email?.message : ""}
            FormHelperTextProps={{
              sx: {
                color: "red",
              },
            }}
            sx={{
              backgroundColor: "#00352c",
              borderRadius: "10px",
              border: "3px solid black",
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            InputProps={{
              disableUnderline: true,
              sx: {
                color: "white",
              },
            }}
          />

          <TextField
            // id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
            size="large"
            id="password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message: "password pattern not matched",
              },
            })}
            helperText={errors ? errors.password?.message : ""}
            FormHelperTextProps={{
              sx: {
                color: "red",
              },
            }}
            sx={{
              backgroundColor: "#00352c",
              borderRadius: "10px",
              border: "3px solid black",
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            InputProps={{
              disableUnderline: true,
              sx: {
                color: "white",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            onClick={() => trigger()}
            sx={{
              textTransform: "capitalize",
            }}
          >
            Login
          </Button>
        </Stack>
        {/* <DevTool control={control} /> */}
      </form>
    </>
  );
};

export default LoginForm;
