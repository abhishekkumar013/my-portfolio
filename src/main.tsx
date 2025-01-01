import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// Set initial theme to prevent flash
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <App />
        <ToastContainer position="bottom-right" />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
