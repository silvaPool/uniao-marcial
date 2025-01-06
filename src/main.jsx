import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// const root = ReactDOM.createRoot(document.getElementById("root"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
