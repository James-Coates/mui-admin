import React from "react";
import {
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { NavLink, NavLinkProps } from "react-router-dom";

type NavItemProps = {
  title: string;
  icon: React.ReactNode;
  path: string;
};

const StyledListItemButton = styled((props) => (
  <ListItemButton disableGutters {...props} />
))<ListItemButtonProps & { component: any } & NavLinkProps>(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export default function NavItem({ title, icon, path }: NavItemProps) {
  return (
    <StyledListItemButton component={NavLink} key={title} to={path}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </StyledListItemButton>
  );
}
