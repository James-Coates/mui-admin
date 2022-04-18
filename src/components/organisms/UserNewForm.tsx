import React from "react";
import { Button, Grid } from "@mui/material";
import FormTextField from "../atoms/FormTextField";
import { useForm } from "react-hook-form";
import { createUser } from "../../api/user";
import { User } from "firebase/auth";

interface IFormInputs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default function UserNewForm() {
  const { handleSubmit, control } = useForm<IFormInputs>();

  function onSubmit(user: IFormInputs) {
    try {
      createUser(user);
      // console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormTextField
            id="email"
            fullWidth
            name="email"
            control={control}
            label="Email"
            variant="outlined"
            type="email"
          />
        </Grid>
        <Grid item xs={6}>
          <FormTextField
            id="password"
            fullWidth
            name="password"
            control={control}
            label="Password"
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item xs={6}>
          <FormTextField
            id="firstName"
            fullWidth
            name="firstName"
            control={control}
            label="First name"
            variant="outlined"
            type="text"
          />
        </Grid>
        <Grid item xs={6}>
          <FormTextField
            id="lastName"
            fullWidth
            name="lastName"
            control={control}
            label="Last name"
            variant="outlined"
            type="text"
          />
        </Grid>
      </Grid>

      <Button type="submit">Submit</Button>
    </form>
  );
}
