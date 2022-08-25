import React from "react";
import { Home } from "components/Home";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "_assets/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/Form-Recognicao" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
