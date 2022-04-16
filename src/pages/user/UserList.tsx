import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Page from "../../components/organisms/Page";
import { getUsers } from "../../api/user";

export default function UserList() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <Page title="Users">
      <Container>
        <Typography variant="h4">Users</Typography>

        {users.map((user) => (
          <div key={user.id}>
            <Typography variant="h5">{user.id}</Typography>
            <Typography variant="h5">{user.email}</Typography>
          </div>
        ))}
      </Container>
    </Page>
  );
}
