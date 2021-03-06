// mui
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { WithChildren } from "../../types/with-children";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function DashboardLayout({ children }: WithChildren) {
  // const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardSidebar />
      <DashboardTopbar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
