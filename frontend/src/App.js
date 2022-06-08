import React from "react";
import Index from "./pages/Home/index";
import Register from "./pages/Home/register";
import Login from "./pages/Home/login";
import Comment from "./pages/Home/comments";
import Work from "./pages/Home/work";
import Resume from "./pages/Home/resume";
import Profile from "./pages/Home/profile"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

const App = () => {
  const user = localStorage.getItem("authorized_keys");
  // const user = true;
  return (
    <Router>
      {user ? (
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/resume" element={<Resume />}/>
          <Route path="/work" element={<Work/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      ) : (
        <Routes>
        <Route path="*" element={<Index />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/resume" element={<Resume />}/>
          <Route path="/work" element={<Work/>} />
          <Route path="/login" index element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      )}
    
    </Router>
  );
};

export default App;
