import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Problme1 from "./problem1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Problme1 />
  </StrictMode>
);
