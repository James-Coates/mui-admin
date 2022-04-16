// mui
import { Box, Drawer } from "@mui/material";
// components
import Nav from "../../components/Nav";
// hooks

const DRAWER_WIDTH = 280;

export default function DashboardSidebar() {
  // const isDesktop = useResponsive("up", "lg");

  return (
    <Drawer
      open
      variant="persistent"
      sx={{
        width: DRAWER_WIDTH,
      }}
      PaperProps={{
        sx: {
          width: DRAWER_WIDTH,
          bgcolor: "background.default",
          borderRightStyle: "dashed",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>Logo</Box>

      <Nav />
    </Drawer>
  );
}
