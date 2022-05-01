import Iconify from "../components/atoms/Iconify";
import { NavItemConfig } from "../types/nav-item";

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <Iconify icon={name} width={22} height={22} />
);

export const sidebarConfig: NavItemConfig[] = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon("uil:estate"),
  },
  {
    title: "invoice",
    path: "/dashboard/invoice/list",
    icon: getIcon("uil:invoice"),
  },
];

export const sidebarManagementConfig: NavItemConfig[] = [
  {
    title: "User",
    icon: getIcon("uil:users-alt"),
    path: "/dashboard/user",
    children: [
      {
        title: "list",
        path: "/dashboard/user/list",
        icon: getIcon("ion:person"),
      },
      {
        title: "new",
        path: "/dashboard/user/new",
        icon: getIcon("ion:person"),
      },
    ],
  },
];
