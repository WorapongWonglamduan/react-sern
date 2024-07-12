import React from "react";
// import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
