import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LoginRegister from './LoginRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/admin" element={<App />} />
      <Route path="/user" element={<LoginRegister />} />
    </Routes>
  </Router>
);
