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
    icon: getIcon("ic:baseline-home"),
  },
  {
    title: "invoices",
    path: "/dashboard/invoices",
    icon: getIcon("ic:baseline-attach-money"),
  },
];

export default sidebarConfig;
