// react
import { useEffect } from "react";
// lib
import { useForm } from "react-hook-form";
// mui
import { Button, Grid } from "@mui/material";
// components
import FormTextField from "../atoms/FormTextField";
// api
import { createUser } from "../../api/user";
// types
import { User } from "../../types/user";

type UserFormProps = {
  user?: User | null;
};

type IFormInputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export default function UserForm({ user }: UserFormProps) {
  const { handleSubmit, control, setValue } = useForm<IFormInputs>();

  function onSubmit(user: IFormInputs) {
    try {
      createUser(user);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
    }
  }, [user, setValue]);

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
