import { Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import FormTextField from "../atoms/FormTextField";

interface IFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { login } = useAuth();
  const { handleSubmit, control } = useForm<IFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormTextField
            id="email"
            name="email"
            control={control}
            label="Email"
            variant="outlined"
            type="email"
          />
          <FormTextField
            id="password"
            name="password"
            control={control}
            label="Password"
            variant="outlined"
            type="password"
          />
        </Stack>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
