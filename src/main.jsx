import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Requests from "./components/requests/Requests";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="requests" element={<Requests />} />
    </Routes>
  </HashRouter>
</React.StrictMode>,
)
