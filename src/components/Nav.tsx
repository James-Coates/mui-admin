// lib
import { matchPath, useLocation } from "react-router-dom";
// mui
import { List, ListSubheader } from "@mui/material";
// components
import NavItem from "./NavItem";
// config
import {
  sidebarConfig,
  sidebarManagementConfig,
} from "../config/sidebar-config";

export default function Nav() {
  const { pathname } = useLocation();

  const match = (path: string) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <>
      <List disablePadding sx={{ p: 1 }}>
        {sidebarConfig.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            path={item.path}
            icon={item.icon}
            active={match}
          />
        ))}
      </List>
      <List
        disablePadding
        sx={{ p: 1 }}
        subheader={
          <ListSubheader
            sx={{ backgroundColor: "transparent" }}
            component="div"
            id="nested-list-subheader"
          >
            Manage
          </ListSubheader>
        }
      >
        {sidebarManagementConfig.map((group) => (
          <NavItem
            key={group.title}
            title={group.title}
            icon={group.icon}
            children={group.children}
            path={group.path}
            active={match}
          />
        ))}
      </List>
    </>
  );
}
