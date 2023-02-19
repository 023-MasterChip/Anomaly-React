
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Index from './pages/Index';
import Social from './pages/Social';
import Event from './pages/Event';
import User from './pages/User';

function App() {
  return (
    <Routes>
      {/* <Index/> */}
      {/* <Home/> */}
      {/* <Social/> */}
      <Route path="/" element={<Home />} />
      <Route path="/index" element={<Index/>} />
      <Route path="/social" element={<Social/>} />
      <Route path="/event" element={<Event/>} />
      <Route path="/user" element={<User/>} />
    </Routes>


  );
}

export default App;
