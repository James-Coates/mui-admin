// react
import React, { useState } from "react";
// lib
import { NavLink, NavLinkProps } from "react-router-dom";
// mui
import {
  alpha,
  Collapse,
  List,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
// components
import Iconify from "./atoms/Iconify";
// types
import { NavItemConfig } from "../types/nav-item";

type NavItemProps = {
  title: string;
  icon: React.ReactNode;
  path: string;
  children?: NavItemConfig[];
  active: (path: string) => boolean;
};

const StyledListItemButton = styled((props) => <ListItemButton {...props} />)<
  | (ListItemButtonProps & { component: any } & NavLinkProps)
  | ListItemButtonProps
>(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  minWidth: "unset",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const activeRootStyle = {
  color: "primary.main",
  fontWeight: "fontWeightMedium",
  bgcolor: alpha("#555", 0.2),
};

const activeSubStyle = {
  color: "text.primary",
  fontWeight: "fontWeightMedium",
};

export default function NavItem({
  title,
  icon,
  path,
  children,
  active,
}: NavItemProps) {
  const [open, setOpen] = useState(false);
  const isActiveRoot = active(path);
  if (children) {
    return (
      <>
        <StyledListItemButton
          onClick={() => setOpen(!open)}
          sx={{ ...(isActiveRoot && activeRootStyle) }}
        >
          <ListItemIconStyle>{icon}</ListItemIconStyle>
          <ListItemText primary={title} />
          {open ? (
            <Iconify icon="ion:chevron-down" />
          ) : (
            <Iconify icon="ion:chevron-forward" />
          )}
        </StyledListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child) => {
              const isActiveSub = active(child.path);
              return (
                <StyledListItemButton
                  key={child.title}
                  component={NavLink}
                  to={child.path}
                  sx={{ ...(isActiveSub && activeSubStyle) }}
                >
                  <ListItemIconStyle>
                    {isActiveSub ? (
                      <Iconify icon="fluent:circle-small-24-filled" />
                    ) : (
                      <Iconify icon="fluent:circle-small-20-filled" />
                    )}
                  </ListItemIconStyle>

                  <ListItemText primary={child.title} />
                </StyledListItemButton>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }
  return (
    <StyledListItemButton
      component={NavLink}
      key={title}
      to={path}
      sx={{ ...(isActiveRoot && activeRootStyle) }}
    >
      <ListItemIconStyle>{icon}</ListItemIconStyle>
      <ListItemText primary={title} />
    </StyledListItemButton>
  );
}
