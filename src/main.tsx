import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChangeThemeProvider } from "./hooks/ChangeTheme/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChangeThemeProvider>
      <App />
    </ChangeThemeProvider>
  </React.StrictMode>
);
