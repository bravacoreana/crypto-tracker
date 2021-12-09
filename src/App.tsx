import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme, lightTheme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark((current) => !current);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router toggleDark={toggleDark} isDark={isDark} />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;
