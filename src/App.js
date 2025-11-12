import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Twister from "./pages/Twister";
import Blog from "./pages/Blog";
import DailyNote from "./pages/DailyNote";import Corporate from "./pages/Corporate";
import HobbyProviders from "./pages/HobbyProviders";
import Shop from "./pages/Shop";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/twister" element={<Twister />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/daily-note" element={<DailyNote />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="hobby-providers" element={<HobbyProviders />} />
            <Route path="shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
