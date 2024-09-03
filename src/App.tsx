import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import { useTheme } from "./hooks/useTheme";
import { getAllCharacters } from "./services/CharacterService";
import { CharacterContext, CharacterProvider } from "./context/CharacterContext";

function App() {

  getAllCharacters();

  const { theme } = useTheme();

  return (
    <CharacterProvider>
    <div className={`${theme} min-h-screen min-w-full h-screen`}>
      <div className="h-1/6">
      <Navbar />
      </div>
      <div className="h-5/6">
      <HomePage />
      </div>
    </div>
    </CharacterProvider>
  );
}

export default App;
