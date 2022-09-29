import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Video from './components/video/Video';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Sidebar />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
