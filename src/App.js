// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/index'
import Navbar from './components/Nav-bar/index'; // Import Navbar component
import Home from './pages/home';
import About from './pages/about';
import PopularStories from './pages/popular-stories';
import Archives from './pages/archives';
import Profile from './pages/profile';

function App() {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar on every page */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular-stories" element={<PopularStories />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
