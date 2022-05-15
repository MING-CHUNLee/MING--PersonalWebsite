import React from 'react';
import { ReactDOM } from 'react';
import Index from './pages/Home/index'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import './App.css';

const App = () => {

  return(
    <Router>
    <Routes>
    <Route path="/index" index element={<Index />} />

    </Routes>
  </Router>
  );

};

export default App;