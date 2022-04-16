import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import typography from "./typography";
import { CssBaseline } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
  },
  typography,
});

const ThemeConfig: any = ({ children }: any) => {
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
