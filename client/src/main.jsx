import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
      <Toaster position="bottom-right" richColors />
    </QueryClientProvider>
  </React.StrictMode>
);
