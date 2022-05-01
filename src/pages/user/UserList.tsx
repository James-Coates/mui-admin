// react
import { useEffect, useState } from "react";
// mui
import { Button, Container, Stack, Typography } from "@mui/material";
// components
import Iconify from "../../components/atoms/Iconify";
import UsersTable from "../../components/organisms/UsersTable";
import Page from "../../components/organisms/Page";
// api
import { getUsers } from "../../api/user";
// types
import { User } from "../../types/user";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <Page title="Users">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4">Users</Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New User
          </Button>
        </Stack>
        <UsersTable users={users} />
      </Container>
    </Page>
  );
}
