import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <SignUp />
      </div>
    </ThemeProvider>
  );
}

export default App;
