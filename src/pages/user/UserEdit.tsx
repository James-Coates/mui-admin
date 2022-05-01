// react
import { useEffect, useState } from "react";
// lib
import { useParams } from "react-router-dom";
// mui
import { Container, Typography } from "@mui/material";
// components
import Page from "../../components/organisms/Page";
import UserForm from "../../components/organisms/UserForm";
// api
import { getUser } from "../../api/user";
// types
import { User } from "../../types/user";

export default function UserEdit() {
  const [user, setUser] = useState<User | null>(null);
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      getUser(userId).then((user) => setUser(user));
    }
  }, [userId]);

  return (
    <Page title="Edit User">
      <Container>
        <Typography variant="h4">Edit user</Typography>
        <UserForm user={user} />
      </Container>
    </Page>
  );
}
