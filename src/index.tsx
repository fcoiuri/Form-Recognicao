import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StepsProvider } from "./Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StepsProvider>
      <App />
    </StepsProvider>
  </React.StrictMode>
);
