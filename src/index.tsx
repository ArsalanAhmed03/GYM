import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./screens/HomePage/HomePage";

import LoginPage from "./screens/LogIn/LogIn";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    {/* <HomePage /> */}
    <LoginPage />
  </StrictMode>,
);
