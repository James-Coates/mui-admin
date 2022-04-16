import React from "react";
import { List } from "@mui/material";
import sidebarConfig from "../config/sidebar-config";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <List>
      {sidebarConfig.map((item) => (
        <NavItem
          key={item.title}
          title={item.title}
          path={item.path}
          icon={item.icon}
        />
      ))}
    </List>
  );
}
