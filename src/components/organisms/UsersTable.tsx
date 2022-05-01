// react
import { useState } from "react";
// mui
import {
  Avatar,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
// components
import UserMoreMenu from "../molecules/UserMoreMenu";
import UsersTableHead from "./UsersTableHead";
// types
import { User } from "../../types/user";

type UsersTableProps = {
  users: User[];
};

export default function UsersTable({ users }: UsersTableProps) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [selected, setSelected] = useState<string[]>([]);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <TableContainer sx={{ minWidth: 800 }}>
      <Table>
        <UsersTableHead
          order={order}
          orderBy={orderBy}
          numSelected={selected.length}
          rowCount={users.length}
          onRequestSort={handleRequestSort}
          onSelectAllClick={handleSelectAllClick}
        />
        <TableBody>
          {users.map((row) => {
            const { id, firstName, lastName, email } = row;
            const isItemSelected = selected.indexOf(id) !== -1;

            return (
              <TableRow
                hover
                key={id}
                tabIndex={-1}
                role="checkbox"
                selected={isItemSelected}
                aria-checked={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isItemSelected}
                    onChange={(event) => handleClick(event, id)}
                  />
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar alt={firstName} src={""} />
                    <Typography variant="subtitle2" noWrap>
                      {firstName} {lastName}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">
                  {/* <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                            {sentenceCase(status)}
                          </Label> */}
                </TableCell>

                <TableCell align="right">
                  <UserMoreMenu userId={id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
