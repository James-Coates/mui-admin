// mui
import { Container, Typography } from "@mui/material";
// components
import Page from "../../components/organisms/Page";
import UserForm from "../../components/organisms/UserForm";

export default function UserNew() {
  return (
    <Page title="New User">
      <Container>
        <Typography variant="h4">Create a new user</Typography>
        <UserForm />
      </Container>
    </Page>
  );
}
