import { Container, Typography } from "@mui/material";
import React from "react";
import Page from "../../components/organisms/Page";
import UserNewForm from "../../components/organisms/UserNewForm";

export default function UserNew() {
  return (
    <Page title="New User">
      <Container>
        <Typography variant="h4">Create a new user</Typography>
        <UserNewForm />
      </Container>
    </Page>
  );
}
