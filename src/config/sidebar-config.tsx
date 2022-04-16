import { NavLink } from "../types/nav-link";
import Iconify from "../components/atoms/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <Iconify icon={name} width={22} height={22} />
);

const sidebarConfig: NavLink[] = [
  {
    title: "dashboard",
    path: "/",
    icon: getIcon("ion:grid"),
  },
  {
    title: "invoice",
    path: "/dashboard/invoice/list",
    icon: getIcon("ion:document-text"),
  },
  {
    title: "user",
    path: "/dashboard/user/list",
    icon: getIcon("ion:person"),
  },
  {
    title: "new user",
    path: "/dashboard/user/new",
    icon: getIcon("ion:person"),
  },
];

export default sidebarConfig;
