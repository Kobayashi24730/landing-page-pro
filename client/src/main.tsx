import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/layout/Header";
import Home from "./pages/Home";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  </React.StrictMode>
);
