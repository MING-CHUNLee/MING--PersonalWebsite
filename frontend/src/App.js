import React from "react";
import { ReactDOM } from "react";
import Index from "./pages/Home/index";
import Register from "./pages/Home/register";
import Login from "./pages/Home/login";
import Comment from "./pages/Home/comments";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

const App = () => {
  const user = localStorage.getItem("authorized_keys");
  return (
    <Router>
      {user ? (
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      ) : (
        // <Route path="*" element={<Button>sddsd</Button>} />
        <Route path="*" element={<Login />} />
      )}
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
