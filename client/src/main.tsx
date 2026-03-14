import React from "react";
import ReactDom from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
const queryclient = new QueryClient();

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <Header />
      <Home />
    </QueryClientProvider>
  </React.StrictMode>
)
