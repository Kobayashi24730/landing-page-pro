import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>
);
