import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import Pages from "./pages";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Pages />
      </div>
    </ThemeProvider>
  );
}

export default App;
