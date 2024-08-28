import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}

export default App;
