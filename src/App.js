import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Twister from "./pages/Twister";
import Blog from "./pages/Blog";
import DailyNote from "./pages/DailyNote";
import Corporate from "./pages/Corporate";
import DailyNote from "./pages/DailyNote";import Corporate from "./pages/Corporate";
import HobbyProviders from "./pages/HobbyProviders";
import Shop from "./pages/Shop";
import Quiz from "./pages/Quiz";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import SignUpEmail from "./pages/SignUpEmail";
import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const pathsWithoutNavbar = ['/login', '/signup', '/signup-email'];
  const showNavbar = !pathsWithoutNavbar.includes(location.pathname);

   console.log("Current Path:", location.pathname, "| Should Show Navbar?:", showNavbar);

  return (
    <>
      {showNavbar && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twister" element={<Twister />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/daily-note" element={<DailyNote />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/hobby-providers" element={<HobbyProviders />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup-email" element={<SignUpEmail />} />
        </Routes>
      </div>
    </>
  );
};

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