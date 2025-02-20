import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);
