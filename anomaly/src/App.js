
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
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/social" element={<Social />} />
      <Route path="/event" element={<Event />} />
      <Route path="/user" element={<User />} />
    </Routes>
    


  );
}

export default App;
