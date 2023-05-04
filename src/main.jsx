import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Requests } from "./components/Requests"

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<App />} />
      <Route path="requests" element={<Requests />} />
    </Routes>
  </HashRouter>
</React.StrictMode>,
)
