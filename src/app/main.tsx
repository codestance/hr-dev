import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("container");
if (container) {
  const root = createRoot(container);
  root.render(
    <HashRouter>
      <FluentProvider theme={teamsDarkTheme}>
        <App />
      </FluentProvider>
    </HashRouter>
  );
}
