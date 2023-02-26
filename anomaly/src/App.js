
import './App.css';
import { useState } from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Index from './pages/Index';
import Social from './pages/Social';
import Event from './pages/Event';
import User from './pages/User';

function App() {

  return (
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/" element={<Home />} />
      <Route path="/social" element={<Social />} />
    </Routes>
    


  );
}

export default App;
