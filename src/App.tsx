import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import { useTheme } from "./hooks/useTheme";
// import { useTheme } from "@emotion/react";

function App() {

  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
