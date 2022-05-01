import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import typography from "./typography";
import { CssBaseline } from "@mui/material";
import ComponentsOverride from "./overrides";
import palette from "./palette";

export const themeOptions = createTheme({
  palette,
  typography,
});

const ThemeConfig: any = ({ children }: any) => {
  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverride(theme);

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
