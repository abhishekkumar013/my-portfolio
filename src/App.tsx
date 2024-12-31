import React from "react";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Projects from "./page/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
