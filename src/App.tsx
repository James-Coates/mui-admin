import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./context/AuthContext";
import Router from "./routes";
import ThemeConfig from "./styles/theme";

function App() {
  return (
    <ThemeConfig>
      <HelmetProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </HelmetProvider>
    </ThemeConfig>
  );
}

export default App;
