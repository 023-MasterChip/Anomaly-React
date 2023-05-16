
import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Index from './pages/Index';
import Social from './pages/Social';
import Event from './pages/Event';
import User from './pages/User';
import Friend from './pages/Friend';
import Comment from './pages/Comment';

function App() {
  const user = localStorage.getItem("username")
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={user?<Home />:<Index/>} />
      <Route path="/social" element={user?<Social />:<Index/>} />
      <Route path="/event" element={user?<Event />:<Index/>} />
      <Route path="/user" element={user?<User />:<Index/>} />
      <Route path="/comment/:id" element={user?<Comment />:<Index/>} />
      <Route path="/friend/:friendUser" element={user?<Friend />:<Index/>} />
    </Routes>



  );
}

export default App;
