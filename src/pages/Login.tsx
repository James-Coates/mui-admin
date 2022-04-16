import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Page from "../components/organisms/Page";
import LoginForm from "../components/organisms/LoginForm";

export default function Login() {
  return (
    <Page title="Login">
      <Box mt={5}>
        <Container>
          <Typography variant="h4">Sign in to MUI Admin</Typography>
          <Box my={5}>
            <LoginForm />
          </Box>
        </Container>
      </Box>
    </Page>
  );
}
