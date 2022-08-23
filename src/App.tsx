import React from "react";
import { Home } from "components/Home";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "_assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
